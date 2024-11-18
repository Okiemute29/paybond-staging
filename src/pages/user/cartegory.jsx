import deleteIcon from "../../assets/images/delete.svg";
import { useState, useEffect, useMemo } from 'react'
import InputField from "../../component/common/input"
import FavouriteBtnSection from "../../component/groceries/favouritebtnsection"
import CartBtn from "../../component/groceries/cartbtn";
import { Link } from "react-router-dom";
import _route from "../../constants/routes";
import useGetFromCart from '../../hooks/shop/usegetfromcart';
import { formatPrice } from "../../helpers/priceFormat";
import usePostRemoveFromCart from '../../hooks/shop/useremovefromcart';
import useDropFromCart from '../../hooks/shop/usedropfromcart';
import usePostAddToCart from '../../hooks/shop/useaddtocart';
import Skeleton from "../../component/skeletons/skeleton";
import Spinnar from "../../helpers/spinnar";

export default function Category() {
  const [formData, setFormData] = useState({
    amount: "",
  })
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const {getFromCart, data: cartData, loading: cartLoading} = useGetFromCart()
  const {addToCart, data: addCartData, loading: addLoading} = usePostAddToCart();
  const {removeFromCart, data: removeCartData, loading: removeLoading } = usePostRemoveFromCart()
  const {dropFromCart, data: dropCartData, loading: dropCartLoading} = useDropFromCart()

  const totalAmount = useMemo(() => {
    if (!cartData) return 0;
    return cartData.reduce((total, product) => {
      return total + (parseFloat(product.product.price) * parseFloat(product.quantity));
    }, 0);
  }, [cartData]);

  const handleInputChange = (e) => {
    const {name, value} = e.target 
    const rawValue = value.replace(/[^\d]/g, '');
    setFormData(prv => ({...prv, [name]: rawValue}))
  }  

  const handlegetCart = () => {
    getFromCart()
  }

  const handleAddToCart = (addData) => {
    addToCart(addData)
  }

  const handleDropFromCart = (addData) => {
    dropFromCart(addData)
  }

  const handleRemoveFromCart = (addData) => {
    removeFromCart(addData)
  }

  useEffect(() => {
    handlegetCart();
  }, []);

  useEffect(() => {
    if (!isInitialLoading) {
      handlegetCart();
    }
  }, [addCartData, removeCartData, dropCartData]);

  // Updated loading state logic to only consider initial load
  useEffect(() => {
    if (!cartLoading && cartData !== undefined) {
      setIsInitialLoading(false);
    }
  }, [cartLoading, cartData]);

  // Show skeletons only during initial loading
  const shouldShowSkeletons = isInitialLoading;

  // Show empty state when not loading and cart is empty
  const shouldShowEmptyState = !isInitialLoading && (!cartData || cartData.length === 0);

  const renderContent = () => {
    if (shouldShowSkeletons) {
      return [1,2,3,4,5,6].map((_, index) => (
        <div key={index} className="d-flex justify-content-between cart-table py-4 align-items-start w-100">
          <div className="col-5">           
            <div className="d-flex flex-column flex-md-row p-0 product-details-container">
              <div className="shopping-cart">
                <Skeleton type="cartproduct" />
              </div>
              <div className="col-12 col-md-8 mt-2 mt-md-0 ms-md-3 px-1 rounded-3 p-details d-flex flex-column">
                <p className="text-black fs-6 mt-0 mb-0"><Skeleton type="text" /></p>
                <p className="product-size mt-1 mb-0"><Skeleton type="text" /></p>
                <div className="delete-cont fs-6 mt-auto mb-0">
                  <Skeleton type="avatar" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 text-black fw-bolder fs-5">
            <Skeleton type="text" />
          </div>
          <div className="col-3 ms-2">
            <div className="button-h w-75">             
              <Skeleton type="button" />
            </div>
          </div>
          <div className="col-2 text-black fw-bolder fs-5"><Skeleton type="text" /></div>
        </div>
      ));
    }

    if (shouldShowEmptyState) {
      return (
        <div className="text-center py-5">
          <h5 className="text-muted">Your shopping cart is empty</h5>
          <Link to={_route._groceries} className="btn btn-primary bg-paybond mt-3">
            Continue Shopping
          </Link>
        </div>
      );
    }

    return cartData.map((product, index) => (
      <div key={index} className="d-flex justify-content-between cart-table py-4 align-items-start w-100">
        <div className="col-5">           
          <div className="d-flex flex-column flex-md-row p-0 product-details-container">
            <div className="shopping-cart">
              <img className="mt-auto" src={product.product.image.url} alt="product" />
            </div>
            <div className="col-12 col-md-8 mt-2 mt-md-0 ms-md-3 px-1 rounded-3 p-details d-flex flex-column">
              <p className="text-black fs-6 mt-0 mb-0">{product.product.title}</p>
              <p className="product-size mb-0">{product.product.sub_title}</p>
              <div className="delete-cont fs-6 mt-auto mb-0">
                {dropCartLoading ? 

					<span className="text-danger"><Spinnar /></span>
				:
					<img 
					src={deleteIcon} 
					alt="delete" 
					onClick={() => handleDropFromCart({ _ids: product._ids })} 
					/>
				}
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 text-black fw-bolder fs-5">
          {formatPrice(product.product.price)}
        </div>
        <div className="col-3">
          <div className="button-h w-75">             
            <CartBtn 
              isInCart={true}
              cartData={product}
              count={product.quantity || 0}
              ProductId={product.product._id}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
              addLoading={addLoading || removeLoading}
            />
          </div>
        </div>
        <div className="col-2 text-black fw-bolder fs-5">
          {formatPrice(parseFloat(product.product.price) * parseFloat(product.quantity))}
        </div>
      </div>
    ));
  };

  return ( 
    <>
      <div className="nk-content">
        <div className="container-fluid">
          <div className="nk-content-inner">
            <div className="nk-content-body">
              <div className="nk-block-head nk-block-head-sm mt-4">
                <div className="nk-block-between">
                  <div className="nk-block-head-content flex-column flex-sm-row d-flex paybound-gap-1 justify-content-sm-between align-items-sm-center w-100">
                    <h4 className="page-title cus-page-title text-paybond">Groceries</h4>
                    <div className="d-flex paybound-gap-1 justify-content-between align-items-center w-available">
                      <div className="d-none d-sm-block"></div>
                      <div className="w-75 relative">           
                        <InputField 
                          name="search"
                          type="text"
                          inputClass=""
                          placeholder="Search groceries"
                          value={formData.amount}
                          change={handleInputChange}
                        />
                      </div>
                      <FavouriteBtnSection cartData={cartData} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="nk-block mt-4">
                <div className="row g-gs">
                  <h4 className="page-title cus-page-title text-paybond text-center w-100 mb-4">Shopping cart</h4>
                  
                  <div className="d-flex justify-content-between cart-table align-items-start mt-3 w-100">
                    <div className="col-5"><p>Product Description</p></div>
                    <div className="col-2"><p>Price</p></div>
                    <div className="col-3"><p>Quantity</p></div>
                    <div className="col-2"><p>Total</p></div>
                  </div>       
                  
                  <div className="p-0 m-0">
                    {renderContent()}
                  </div>

                  {!shouldShowEmptyState && (
                    <div className="d-flex justify-content-between py-4 align-items-start w-100">
                      <div className="w-35">
                        <p className="mb-1">Add a note to your order</p>
                        <textarea rows="5" className="w-100 p-2"></textarea>
                      </div>
                      <div className="w-35 text-end">
                        <p className="text-black fs-5">
                          {shouldShowSkeletons ? 
                            <Skeleton type="title" /> 
                            : 
                            <>Subtotal: <span className="fw-bold">{formatPrice(totalAmount)}</span></>
                          }
                        </p>
                        {shouldShowSkeletons ? 
                          <Skeleton type="button" /> 
                          : 
                          <Link to={_route._checkout} className="checkout-btn bg-paybond">Checkout</Link>
                        }
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}