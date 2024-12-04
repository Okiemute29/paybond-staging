import { useState, useEffect, useMemo } from 'react'
import InputField from "../../component/common/input"
import useGetFromCart from '../../hooks/shop/usegetfromcart';
import usecreatecheckout from '../../hooks/shop/usecreatecheckout';
import useGetCartDelivery from '../../hooks/shop/usegetcartdelivery';
import { formatPrice } from '../../helpers/priceFormat';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useSelector } from 'react-redux';
import Spinnar from '../../component/spinnar';
import successImg from "../../assets/success.png";
import useCreateCard from "../../hooks/airtime/usecreatecardtr"
import failImg from "../../assets/fail.png";
import Modal from "../../helpers/modal";
import LoadingModal from "../../helpers/paybillsmodal";
import { Link } from 'react-router-dom';
import _route from '../../constants/routes';

export default function CheckOut() {
  const user = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const {createCardTransaction, data: cardData, loading: cardLoading,  error: cardError, isSuccess } = useCreateCard()
  const [formData, setFormData] = useState({
    number: "",
    city: "",
    address: "",
    state: "",
    price: "",
    country: null
  });
  
  const {getFromCart, data: cartData, loading: cartLoading} = useGetFromCart();
  const {getDeliveryState, data, loading} = useGetCartDelivery();
  const {addToCheckOut, data: checkoutData, loading: checkOutLoading} = usecreatecheckout()

  // Nigerian phone number regex
  const nigerianPhoneRegex = /^(080|081|070|090|091)\d{8}$/;

  const [paymentConfig, setPaymentConfig] = useState({
    public_key: process.env.REACT_APP_FLUTTER_WAVE,
    tx_ref: `tx-${Date.now()}`,
    amount: 0,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: user?.username || '',
      name: user?.fullname || '',
    },
    customizations: {
      title: 'Grocery Order Payment',
      description: 'Payment for Grocery Order',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
    meta: {
      source: window.location.origin,
    },
    redirect_url: '',
    mode: 'payment',
  });

  const handleFlutterPayment = useFlutterwave(paymentConfig);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    if (name === 'number') {
      const rawValue = value.replace(/[^\d]/g, '');
      setFormData(prev => ({...prev, [name]: rawValue}));
    } else {
      setFormData(prev => ({...prev, [name]: value}));
    }
  };

  const handlegetCart = () => {
    getFromCart();
  };

  const handlegetState = () => {
    getDeliveryState();
  };

  const subTotal = useMemo(() => {
    if (!cartData) return 0;
    return cartData.reduce((total, product) => {
      return total + (parseFloat(product.product.price) * parseFloat(product.quantity));
    }, 0);
  }, [cartData]);

  const totalAmount = useMemo(() => {
    if (!cartData || !formData.price || !subTotal) return 0;
    const price = parseFloat(formData.price) || 0;
    const subtotalValue = parseFloat(subTotal) || 0;
    return subtotalValue + price;
  }, [cartData, formData.price, subTotal]);

  // Validate form completion
  const isFormValid = () => {
    return (
      formData.number.trim() !== '' &&
      nigerianPhoneRegex.test(formData.number) &&
      formData.city.trim() !== '' &&
      formData.address.trim() !== '' &&
      formData.state &&
      formData.price &&
      totalAmount > 0
    );
  };

  // Update payment config when amount changes
  useEffect(() => {
    if (totalAmount) {
      setPaymentConfig(prevConfig => ({
        ...prevConfig,
        amount: totalAmount,
        tx_ref: `tx-${Date.now()}`,
        customer: {
          ...prevConfig.customer,
          phone_number: formData.number
        }
      }));
    }
  }, [totalAmount, formData.number]);

  useEffect(() => {
    handlegetCart();
    handlegetState();
  }, []);

  useEffect(() => {
    if (!loading && data?.length > 0 && !formData.country) {
      setFormData(prev => ({
        ...prev,
        country: data[0].state,
        price: data[0].price,
        state: data[0].state
      }));
    }
  }, [loading, data]);

  const handleChange = (e) => {
    const selectedState = e.target.value;
    const selectedCountry = data.find(country => country.state === selectedState);
    
    setFormData(prev => ({
      ...prev,
      country: selectedState,
      price: selectedCountry?.price || '',
      state: selectedState
    }));
  };

  const handlePaymentSuccess = () => {
    setShowSuccess(false);
    // Reset form or redirect to success page
    setFormData({
      number: "",
      city: "",
      address: "",
      state: "",
      price: "",
      country: null
    });
  };

  const handlePaymentError = () => {
    setShowError(false);
  };

  
  const transformToCartItems = (inputArray) => {
	  return inputArray.map(item => ({
		product: item.product._id,
		quantity: item.quantity
	  }));
	};

  
	const handleBillPayment = async (data)=>{
		const cardData ={
			status: data.status,
			description: "A new card payment",
			flutterwave: data
		}
		const cartItems = transformToCartItems(cartData);
		const billData = {
			total_amount: data.amount,
			payment_method: "card",
			items: cartItems,
			shipping_info: {
				phone_no: formData.number,
				address: formData.address,
				city: formData.address,
				state: formData.state
			}
		}
		await createCardTransaction(cardData, billData, "grocery")
	}
  const initiatePayment = () => {
    if (!isFormValid()) {
      window.NioApp.Toast("Please fill all required fields correctly", "warning");
      return;
    }

    setIsLoading(true);
    try {
      handleFlutterPayment({
        callback: (response) => {
          console.log('Payment Response:', response);
          if (response.status === 'successful') {
            setShowSuccess(true);
			console.log("flutterwave", response)
			handleBillPayment(response)
            // Handle successful payment here - you might want to call an API to process the order
          } else {
            setShowError(true);
          }
          closePaymentModal();
          setIsLoading(false);
        },
        onClose: () => {
          console.log('Payment modal closed');
          setIsLoading(false);
        },
      });
    } catch (error) {
      console.error('Error initiating payment:', error);
      setShowError(true);
      setIsLoading(false);
    }
  };

  
	useEffect(() => {
		if(isSuccess) {
			setShowSuccess(true);
			setShowError(false);
		} else if (cardError.cardError || cardError.billError) {
			setShowError(true);
			setShowSuccess(false);
		}
	}, [isSuccess, cardData, cardError]);


console.log("cartData", cartData)
  return (
    <>
      <div className="nk-content">
        <div className="container-fluid">
          <div className="nk-content-inner">
            <div className="nk-content-body">
              <div className="nk-block-head nk-block-head-sm mt-4">
                <div className="nk-block-between">
                  <div className="nk-block-head-content">
                    <h4 className="page-title cus-page-title text-paybond">Groceries</h4>
                  </div>
                </div>
              </div>
              
              <div className="nk-block">
                <div className="row g-gs">
                  <div className="col-md-6">
                    <div className='col-md-9'>
                      <div className="card mt-0 shodowles-card bg-transparent">
                        <div className="nk-ecwg nk-ecwg2">
                          <div className="card-inner p-0">
                            <div className='rounded-4 py-2'>
                              <form>
                                <div className="form-group">
                                  <InputField 
                                    label="House Address"
                                    name="address"
                                    type="text"
                                    placeholder="Enter house address"
                                    value={formData.address}
                                    change={handleInputChange}
                                  />
                                </div>
                                
                                <div className="form-group">
                                  <InputField 
                                    label="City"
                                    name="city"
                                    type="text"
                                    placeholder="Enter City"
                                    value={formData.city}
                                    change={handleInputChange}
                                  />
                                </div>
                                
                                <div className="form-group">
                                  <InputField 
                                    label="Phone Number"
                                    name="number"
                                    type="tel"
                                    placeholder="Enter phone number"
                                    value={formData.number}
                                    change={handleInputChange}
                                  />
                                  {formData.number && !nigerianPhoneRegex.test(formData.number) && (
                                    <small className="text-danger">Please enter a valid Nigerian phone number</small>
                                  )}
                                </div>
                                
                                <div className="form-group">
                                  <label className="auth-label">State</label>
                                  <select
                                    name="country"
                                    className="form-control form-control-lg auth-field"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                  >
                                    {loading ? (
                                      <option>Loading...</option>
                                    ) : (
                                      data.map((country, index) => (
                                        <option key={index} value={country.state}>
                                          {country.state}
                                        </option>
                                      ))
                                    )}
                                  </select>
                                </div>

                                <div className="mt-5">
                                  <p className="text-black fs-6">Delivery Fee: <span className="fw-bold ms-2">{formatPrice(formData.price)}</span></p>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card bg-transparent">
                      <div className="nk-ecwg nk-ecwg2">
                        <div className="card-inner flex-grow-1 d-flex flex-column ps-4">
                          {
							(cartData.length > 0) ?
								<div className="col-12 p-4 text-white rounded-5 bg-paybond overflow-hidden">
								<h4>Order Summary</h4>
								<div className="py-3 border-b-white d-flex flex-column justify-content-start paybound-gap-2">
								{cartData?.map((element, index) => (
									<div key={index} className="fs-5 d-flex justify-content-between align-items-center">
									<p className="mb-0 fw-normal">{element.product.title}</p>
									<p className="fw-bold">{formatPrice(element.product.price * element.quantity)}</p>
									</div>
								))}
								</div>

								<div className="fs-5 border-b-white py-3 d-flex justify-content-between align-items-center">
								<p className="mb-0 fw-bold">Subtotal</p>
								<p className="fw-bold">{formatPrice(subTotal)}</p>
								</div>

								<div className="fs-5 border-b-white py-3 d-flex justify-content-between align-items-center">
								<p className="mb-0 fw-bold">Delivery fee</p>
								<p className="fw-bold">{formatPrice(formData.price)}</p>
								</div>

								<div className="fs-5 border-b-white py-3 d-flex justify-content-between align-items-center">
								<p className="mb-0 fw-bold">Total</p>
								<p className="fw-bold">{formatPrice(totalAmount)}</p>
								</div>

								<div className="w-100 d-flex justify-content-center mt-4 align-items-center">
								<button 
									className={`w-75 fw-medium complete-btn ${!isFormValid() ? 'opacity-50' : ''}`}
									onClick={initiatePayment}
									disabled={!isFormValid() || isLoading}
								>
									{isLoading ? (
									<Spinnar />
									) : (
									<span className="text-paybond">Complete Order</span>
									)}
								</button>
								</div>
							</div>
							:
							<div className="text-center py-5">
							  <h5 className="text-muted">Your shopping cart is empty</h5>
							  <Link to={_route._groceries} className="btn btn-primary bg-paybond mt-3">
								Continue Shopping
							  </Link>
							</div>

						  }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Modal */}
      {(loading || cardLoading) && <LoadingModal />}

      {/* Success Modal */}
      {showSuccess && (
        <Modal
          handleClose={handlePaymentSuccess}
          showModal={showSuccess}
          myStyle="modal-sm"
        >
          <div className="success-card">
            <img src={successImg} alt="successful-check" />
            <p className="payment-success-text text-paybond mb-0">Order Successful</p>
            <p className="text-center">Your order has been placed successfully.</p>
          </div>
        </Modal>
      )}

      {/* Error Modal */}
      {showError && (
        <Modal
          handleClose={handlePaymentError}
          showModal={showError}
          myStyle="modal-sm"
        >
          <div className="success-card">
            <img src={failImg} alt="error-check" />
            <p style={{color: "red"}} className="payment-fail-text mb-0">Order Failed</p>
            <p className="text-center">Your order could not be processed. Please try again.</p>
          </div>
        </Modal>
      )}
    </>
  );
}