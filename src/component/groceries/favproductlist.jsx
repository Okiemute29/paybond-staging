import React from 'react';
import favourite from "../../assets/images/favorite.svg";
import activefavourite from "../../assets/images/favoriteactive.svg";
import { Link } from 'react-router-dom';
import _route from '../../constants/routes';
import CartBtn from "./cartbtn";
import Skeleton from '../skeletons/skeleton';
import oops from '../../assets/images/oops.png';

const FavProductList = ({ products, loading, handleRemoveFromCart, handleAddToCart, cartData, addLoading, FavouriteData, handleRemoveFromFav, handleAddToFav }) => {
    const getProductQuantity = (productId) => {
        // First check cartData for the product
        const cartItem = cartData?.find(item => item.product._id === productId);
        if (cartItem) {
            return cartItem.quantity;
        }
        
        // If not found in cartData, check carts array
        const cartsItem = cartData?.find(item => item.product._id === productId);
        return cartsItem ? cartsItem.quantity : 0;
    };

	const handleFavOnclick = (id) =>{
		const foundItem = FavouriteData?.find(item => item.product._id === id);
	  
		if (foundItem) {
		  handleRemoveFromFav(foundItem._id);
		} else {
		  handleAddToFav({ product: id });
		}
	  }

    return (
        <>
            {loading ? (
                <div className="sevice_container mt-3">
                    {[...Array(20)].map((_, index) => (
                        <div key={index} className="product pb-0">
                            <Skeleton type='product' />
                        </div>
                    ))}
                </div>
            ) : products.length < 1 ? (
                <div className="w-100 d-flex flex-column justify-content-center mt-5 align-items-center">
                    <img className="mt-auto w-60" src={oops} alt="Error" />
                    <p>No Favourite Item</p>
                </div>
            ) : (
                <div className="sevice_container mt-3">
                    {products.map((product, index) => {
                        const isInCart = cartData?.some(item => item.product._id === product._id);
                        const productQuantity = getProductQuantity(product._id);

                        return (
                            <div key={product._id} className="product relative">
                                <Link to={`${_route._groceries}/${product._id}`} className="product-image-container relative">
                                    <img src={product?.product?.image?.url} alt="product" />
                                </Link>
								<div 
									onClick={() => handleFavOnclick(product.product?._id)} 
									className={`fav-con-abs ${FavouriteData?.find(item => item.product._id === product.product._id) ? "infavourite" : ""}`}
								>
									<img className='default-fav' src={favourite} alt="favourite" />
									<img className='active-fav' src={activefavourite} alt="favourite" />
								</div>
                                
                                <div className="product-details px-3">
                                    <div>
                                        <p className="product-name mb-0">{product.product?.title}</p>
                                        <p className="product-size mb-0">{product.product?.sub_title}</p>
                                        <p className="product-price mb-0">
                                            NGN {product.product?.price}
                                        </p>
                                    </div>
                                </div>

                                <div className="w-100 button-h px-3">
                                    <CartBtn 
                                        isInCart={isInCart}
                                        cartData={cartData}
                                        count={productQuantity}
                                        ProductId={product.product._id}
                                        handleAddToCart={handleAddToCart}
										handleRemoveFromCart={handleRemoveFromCart}
										addLoading={addLoading}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default FavProductList;