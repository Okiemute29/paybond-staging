
import sidepic from "../../assets/images/airtime-img.png"
import mtn from "../../assets/images/mtn.png"
import airtel from "../../assets/images/airtel.png"
import glo from "../../assets/images/glo.png"
import mobile from "../../assets/images/9mobil.png"
import dropdown from "../../assets/images/dropdown.svg"
import nigeria from "../../assets/images/nigeria.png"
import Spinnar from '../../component/spinnar'
import { useEffect, useState } from 'react'
import DropDown from '../../helpers/dropdown'
import InputField from "../../component/common/input"
import useGetBillCategory from "../../hooks/airtime/usegetbillcategory"
import useGetBillFromCategory from "../../hooks/airtime/usegetbillfromcategory"
import LoadingModal from "../../helpers/paybillsmodal"
import Modal from "../../helpers/modal"
import usePostVerifyBill from "../../hooks/airtime/usepostverifybill"
import useCreateCard from "../../hooks/airtime/usecreatecardtr"
// import OtpInput from 'react-otp-input';
import { useSelector } from 'react-redux'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import successImg from "../../assets/success.png"
import failImg from "../../assets/fail.png"


export default function Airtime() {
	const user = useSelector((state) => state.auth.user)
	const [selectProvider, setSelectProvider] = useState(false)
	const {getBillCategory, data, loading} = useGetBillCategory();
	const {createCardTransaction, data: cardData, loading: cardLoading,  error: cardError, isSuccess } = useCreateCard()
    const [pin, setPin] = useState("");
	const [showSuccess, setShowSuccess] = useState(false)
	const [showError, setShowError] = useState(false)
	const {getBillFromCategory, data: billFromCategoryData, loading: billFromCategoryLoading} = useGetBillFromCategory()
	const {postVerifyBill, data: verifyBillData, loading: verifyBillLoading} = usePostVerifyBill()
	const [selectedProvider, setSelectedProvider] = useState(null)
	const [updatedBillers, setUpdatedBillers] = useState([]);
	const [formData, setFormData] = useState({
		amount: "",
		item_code: "",
		code: "",
		customer: ""
	})
	const [error, setError] = useState('');
	// Define a regular expression for Nigerian phone numbers
	const nigeriaPhoneRegex = /^(080|081|070|090|091)\d{8}$/;

	const [paymentConfig, setPaymentConfig] = useState({
		public_key: 'FLWPUBK_TEST-46541080f1bf17e301a6f52027061790-X',
		tx_ref: `tx-${Date.now()}`,
		amount: 0,
		currency: 'NGN',
		payment_options: 'card,mobilemoney,ussd',
		customer: {
		  email: user.username,
		//   phone_number: '070********',
		  name: user.fullname,
		},
		customizations: {
		  title: 'Airtime Payment',
		  description: 'Payment for Airtime',
		  logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
		},
		meta: {
		  source: window.location.origin, // Add your website name
		},
		redirect_url: '', // Add redirect URL
		mode: 'payment',
		payment_plan: null,
		subaccounts: null,
		theme: {
		  mode: 'light', // or 'dark'
		}
	  });
	const handleFlutterPayment = useFlutterwave(paymentConfig);

	// Update config when amount changes
	useEffect(() => {
	if (formData?.amount) {
		setPaymentConfig(prevConfig => ({
		...prevConfig,
		amount: formData.amount,
		tx_ref: `tx-${Date.now()}`,
		}));
	}
	}, [formData?.amount]);

	const handleClick = (item) => {
		setSelectedProvider(item);
		setFormData(prv => ({...prv, code: item.biller_code}))
		setSelectProvider(prv => !prv)
	};

	const handleInputChange = (e) =>{
		const {name, value} = e.target 
		const rawValue = value.replace(/[^\d]/g, ''); // Remove non-numeric characters
		console.log(rawValue);
		setFormData(prv => ({...prv, [name]: rawValue}))
	}	

	const formatNumber = (num) => {
		return `N${new Intl.NumberFormat().format(num)}`;
	};


	const items = [
		{
			img: mtn,
			value: "MTN"
		},
		{
			img: airtel,
			value: "AIRTEL"
		},
		{
			img: glo,
			value: "GLO"
		},
		{
			img: mobile,
			value: "9MOBILE"
		},
	]

	const handleGetBillCategory = async () =>{
		await getBillCategory("airtime")
	}
	const handleGetBillFromCategory = async () =>{
		await getBillFromCategory(selectedProvider.biller_code)
	} 
	
	const handleChange = (e) => {
		const { value } = e.target;


		// Update state with input value
		setFormData((prev) => ({ ...prev, customer: value }));

		// Validate phone number
		if (value && !nigeriaPhoneRegex.test(value)) {
			setError('Please enter a valid Nigerian phone number');
		} else {
			setError('');
		}
	};
	const handleVerifyBill = async (e) =>{
		e.preventDefault()
		console.log("submit verify", formData)
		if(formData.amount && formData.code && formData.customer && formData.item_code){

			// Check if the phone number is valid
			if (!nigeriaPhoneRegex.test(formData.customer)) {
				window.NioApp.Toast("Please enter a valid 11-digit Nigerian phone number", "warning");
				return; // Stop execution if phone number is invalid
			}
			var verifyData = {
				item_code: formData.item_code,
				code: formData.code,
				customer: formData.customer
			}
			await postVerifyBill(verifyData)
		}else{
			window.NioApp.Toast("Fill all available field", "warning");

		}
	} 
	const handleBillPayment = async (data)=>{
		const cardData={
			status: data.status,
			description: "A new card payment",
			flutterwave: data
		}
		const billData = {
			amount: formData.amount,
			customer_id: formData.customer,
			biller_code: formData.code,
			item_code: formData.item_code

		}
		await createCardTransaction(cardData, billData)
	}

	useEffect(()=>{
		handleGetBillCategory()
	},[])

	useEffect(()=>{
		if(selectedProvider){
			handleGetBillFromCategory()
		}
	}, [selectedProvider])



	useEffect(() => {
		if(data) {
			// Update logos in the billers array
			const updated = data.map(biller => {
				// Find matching logo by checking if biller name includes the logo value
				const matchingLogo = items.find(logo => 
					biller.name.toUpperCase().includes(logo.value)
				);
				
				// If found, update the logo, otherwise keep as is
				return matchingLogo 
					? { ...biller, logo: matchingLogo.img }
					: biller;
			});
	
			setUpdatedBillers(updated);
			setSelectedProvider(updated[0])
			setFormData(prv => ({...prv, code: updated[0]?.biller_code}))
		}
	}, [data]); // Added items to dependency array
	
	// Set the first item_code by default if billFromCategoryData is available
	useEffect(() => {
		if (billFromCategoryData?.length > 0 && !formData.item_code) {
			const defaultItem = billFromCategoryData.find(item => 
				item.name.includes(selectedProvider?.name?.split(" ")[0])
			);
			if (defaultItem) {
				setFormData(prev => ({ ...prev, item_code: defaultItem.item_code }));
			}
		}
	}, [billFromCategoryData,]);
	console.log("formData", formData);

	// Function to handle payment initiation
	const initiatePayment = () => {
		try {
		  handleFlutterPayment({
			callback: async (response) => {
			  console.log('Payment Response:', response);
			  if (response.status === 'successful') {
				// Verify the transaction on your backend
				if (window.event) {
					window.event.preventDefault();
				  }
				  handleBillPayment(response)
				
			  }
			  closePaymentModal();
			},
			onClose: () => {
			  console.log('Payment modal closed');
			},
		  });
		} catch (error) {
		  console.error('Error initiating payment:', error);
		}
	  };

	  
	useEffect(()=>{
		if(verifyBillData.status?.toLowerCase() === "success"){			
			initiatePayment()
			
		}
	}, [verifyBillData])


	const handlePaybillSuccess = () => {
		setShowSuccess(false)
		setFormData({
			amount: "",
			item_code: "",
			code: "",
			customer: ""
		})
	}
	const handlePaybillError = () => {
		setShowError(false)
	}

	// useEffect(()=>{
	// 	if(cardData){
	// 		setShowSuccess(true)
	// 	}
	// }, [cardData])
	useEffect(() => {
        if(isSuccess) {
            setShowSuccess(true);
            setShowError(false);
        } else if (cardError.cardError || cardError.billError) {
            setShowError(true);
            setShowSuccess(false);
        }
    }, [isSuccess, cardData, cardError]);

	console.log("cardData", cardData)

	return ( 
	<>
		<div className="nk-content ">
		<div className="container-fluid">
			<div className="nk-content-inner">
			<div className="nk-content-body">
				<div className="nk-block-head nk-block-head-sm mt-4">
				<div className="nk-block-between">
					<div className="nk-block-head-content">
						<h4 className="page-title cus-page-title text-paybond">Buy Airtime</h4>
						
					</div>
					{/* .nk-block-head-content */}
				</div>
				{/* .nk-block-between */}
				</div>
				{/* .nk-block */}
				<div className="nk-block">
				<div className="row g-gs">
					<div className={`col-md-6`}>
						<div className='col-md-9'>
							<div className="card shodowles-card bg-transparent">
								<div className="nk-ecwg nk-ecwg2">
								<div className="card-inner p-0">
								<p className='auth-label'>Select Provider</p>
									<div onClick={()=> setSelectProvider(prv => !prv)} className='bg-white cursor-pointer d-flex justify-content-between align-items-center rounded-4 py-2 px-3'>
										<div className="select-item">
											<div className='selected-product-img'>
											{selectedProvider?.logo && <img src={selectedProvider?.logo} alt='select-img' />}
											</div>
											{selectedProvider?.name && <p>{selectedProvider?.name}</p>}
										</div>
										<div className='dropdown-con'>
											<img src={dropdown} alt='dropdown' />
										</div>
									</div>
								</div>
								{/* .card-inner */}
								</div>
								{/* .nk-ecwg */}
							</div>


							<DropDown 
								show={selectProvider}
								items={updatedBillers}
								handleClick={handleClick}
								loading={loading}
								checkMark
								selectedProvider={selectedProvider}

							/>
																
							{billFromCategoryData?.length > 0 && <div className="form-group mt-3">	
								<label className='auth-label'>Category</label>
								<select
									name="category"
									className={`form-control form-control-lg auth-field `}                              
									placeholder="Select Biller"
									value={formData?.item_code}
									onChange={(e)=> setFormData(prv => ({...prv, item_code: e.target.value }))}

									required
								>
									{
										billFromCategoryData?.filter(item => item.name.includes(selectedProvider?.name?.split(" ")[0])).map((biller, index)=>{
											return <option key={index} value={biller.item_code}>{biller.short_name}</option>
										})
									}
									
								</select>
							</div>}

							<div className="card shodowles-card bg-transparent">
								<div className="nk-ecwg nk-ecwg2">
								<div className="card-inner p-0">
									<div className='bg-white d-flex justify-content-between align-items-center rounded-4 py-2 px-3'>
										<div className="select-item">
											<div className='d-flex justify-content-start product-number align-items-center'>
												<div className='selected-product-img me-2'>
													<img src={nigeria} alt='select-img' />
												</div>
												+234
											</div>
											<input
												className="border-0"
												type="tel"
												placeholder="e.g 0801 234 5678 901"
												maxLength="11"
												value={formData.customer}
												onChange={handleChange}
											/>

										</div>
										{/* <div className='dropdown-con'>
											<img src={dropdown} alt='dropdown' />
										</div> */}
									</div>
									{error && <p style={{ color: 'red' }}>{error}</p>}
								</div>
								{/* .card-inner */}
								</div>
								{/* .nk-ecwg */}
							</div>
							<div className="card shodowles-card bg-transparent">
								<div className="nk-ecwg nk-ecwg2">
								<div className="card-inner p-0">
									<div className='bg-white product-amount-con rounded-4 py-2 px-3'>
										<input onClick={(e) => handleInputChange(e)}  className={`price-tablet ${formData.amount === '50' && "bg-paybond text-white"}`} value={formatNumber("50")} name="amount" type='text' readOnly/>
										<input onClick={(e) => handleInputChange(e)}  className={`price-tablet ${formData.amount === '100' && "bg-paybond text-white"}`} value={formatNumber("100")} name="amount" type='text' readOnly/>
										<input onClick={(e) => handleInputChange(e)}  className={`price-tablet ${formData.amount === '200' && "bg-paybond text-white"}`} value={formatNumber("200")} name="amount" type='text' readOnly/>
										<input onClick={(e) => handleInputChange(e)}  className={`price-tablet ${formData.amount === '500' && "bg-paybond text-white"}`} value={formatNumber("500")} name="amount" type='text' readOnly/>
										<input onClick={(e) => handleInputChange(e)}  className={`price-tablet ${formData.amount === '1000' && "bg-paybond text-white"}`} value={formatNumber("1000")} name="amount" type='text' readOnly/>
										<input onClick={(e) => handleInputChange(e)}  className={`price-tablet ${formData.amount === '1500' && "bg-paybond text-white"}`} value={formatNumber("1500")} name="amount" type='text' readOnly/>
										<input onClick={(e) => handleInputChange(e)}  className={`price-tablet ${formData.amount === '2000' && "bg-paybond text-white"}`} value={formatNumber("2000")} name="amount" type='text' readOnly/>
										<input onClick={(e) => handleInputChange(e)}  className={`price-tablet ${formData.amount === '5000' && "bg-paybond text-white"}`} value={formatNumber("5000")} name="amount" type='text' readOnly/>
									
									</div>
								</div>
								{/* .card-inner */}
								</div>
								{/* .nk-ecwg */}
							</div>
							<div className="card mt-0 shodowles-card bg-transparent">
								<div className="nk-ecwg nk-ecwg2">
								<div className="card-inner p-0">
									<div className='rounded-4 py-2'>
										<form onSubmit={handleVerifyBill}>										
											<div className="form-group">												
												<InputField 
													label="Amount"
													name="amount"
													type="number"
													placeholder="Enter Amount"
													value={formData.amount}
													change={handleInputChange}
												/>
											</div>
											{/* .form-group */}
											<div className="form-group col-12">
											<button className="auth-btn btn btn-lg btn-primary btn-block">
												{verifyBillLoading ? <Spinnar /> : 'Pay'}
											</button>
											</div>
										</form>
										
									</div>
								</div>
								{/* .card-inner */}
								</div>
								{/* .nk-ecwg */}
							</div>
						</div>
					{/* .card */}
					</div>
					{/* .col */}
					<div className="d-none d-md-block col-md-6">
						<div className="card bg-transparent">
							<div className="nk-ecwg nk-ecwg2">
							<div className="card-inner flex-grow-1 d-flex flex-column p-0">
								<div className="col-12 rounded-5 overflow-hidden">
									<img className="product-sidepic" src={sidepic} alt="airtime" />
								</div>
							</div>
							{/* .card-inner */}
							</div>
							{/* .nk-ecwg */}
						</div>
					</div>
					{/* .col */}
				</div>
				{/* .row */}
				</div>
				{/* .nk-block */}
			</div>
			</div>
		</div>
		</div>

		{
			(billFromCategoryLoading || cardLoading) &&<LoadingModal />
		}
		{showSuccess && <Modal
			handleClose={handlePaybillSuccess}
			showModal={showSuccess}
			myStyle="modal-sm"
		>
				
				<div className="success-card">
					<img src={successImg} alt="successful-check" />
					<p className="payment-success-text text-paybond mb-0">Payment Successful</p>
					<p className="text-center">{`Your airtime recharge of ${formatNumber(formData.amount)} to ${formData.customer} was successful `}</p>
				</div>
			</Modal>}
		{showError && <Modal
			handleClose={handlePaybillError}
			showModal={showError}
			myStyle="modal-sm"
		>
			
			<div className="success-card">
				<img src={failImg} alt="successful-check" />
				<p style={{color: "red"}} className="payment-fail-text mb-0">Payment Failed</p>
				<p className="text-center">{`Your data purchase was failed. `}</p>
			</div>
		</Modal>}


	</>

  );
}
