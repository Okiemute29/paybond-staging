import React from 'react';
import favourite from "../../assets/images/favorite.svg"
import { Link } from 'react-router-dom';
import _route from '../../constants/routes';
import CartBtn from "../../component/groceries/cartbtn"
import usePostAddToCart from '../../hooks/shop/useaddtocart';
import Skeleton from '../skeletons/skeleton';
import oops from '../../assets/images/oops.png'

const ProductList = ({ products, carts, loading, setSelectProduct }) => {
	const {addToCart, data, loading: addLoading} = usePostAddToCart()

	const handleAddToCart = (addData) => {
		addToCart(addData)
	}
    return (
        <>
            {
			loading ?
			<div className="sevice_container mt-3">
				{[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((product, index) => {
					return (
						<div  className="product pb-0">
							<Skeleton type='product' />
						</div>
					);
				})}
			</div>
			:
			products.length < 1 ? (
                <div className="w-100 d-flex flex-column justify-content-center mt-5 align-items-center">
                    <img className="mt-auto w-60" src={oops} alt="Error" />
					<p>No Product Found</p>
                </div>
            ) : (
                <div className="sevice_container mt-3">
                    {products.map((product, index) => {
                        const isInCart = carts.some(item => item.product._id === product._id);
                        // const productQuantity = isInCart ? carts.find(item => item.product._id === product._id)?.quantity : '0';

                        return (
                            <Link to={`${_route._groceries}/${product._id}`} className="product">
								<div className="product-image-container relative">
									<img src={product?.image?.url} alt="product" />
									<div className="fav-con-abs">
										<img src={favourite} alt="favourite" />
									</div>
								</div>
								
								<div className="product-details px-3">
									<div>
										<p className="product-name mb-0">{product.title}</p>
										<p className="product-size mb-0">{product.size}</p>
										<p className="product-price mb-0">
											{/* <span className="currency">₦</span> */}
											NGN {product.price}
										</p>
									</div>
								</div>

								<div className="w-100 button-h px-3">
									
									<CartBtn 
										isInCart={isInCart}
										ProductId={product._id}
										handleAddToCart={handleAddToCart}
									/>

								</div>
                            </Link>
                        );
                    })}
                </div>
            )
			}
        </>
    );
};

export default ProductList;
