import React from 'react';
import favourite from "../../assets/images/favorite.svg"

const ProductList = ({ products, carts, setSelectProduct }) => {
    return (
        <>
            {products.length < 1 ? (
                <div className="w-100 d-flex justify-content-center mt-5 align-items-center">
                    <img className="mt-auto w-60" src="/images/oops.png" alt="banner" />
                </div>
            ) : (
                <div className="sevice_container mt-3">
                    {products.map((product, index) => {
                        const isInCart = carts.some(item => item.product._id === product._id);
                        // const productQuantity = isInCart ? carts.find(item => item.product._id === product._id)?.quantity : '0';

                        return (
                            <div onClick={()=> setSelectProduct(product)} key={index} id={index} className="product">
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
									<button 
										data-cart={isInCart}  
										data-id={product._id} 
										className="product-add-btn py-1">
										<div></div>
										cart

										<span className='cart-plus'>+</span>
									</button>

									{/* <div className={`quantity quantity-counter justify-content-center g-col-1 align-items-center ${isInCart ? '' : 'hidden'}`}>
										<button data-id={product._id} className="prev">
											<img src="/images/minus.svg" alt="subtract" />
										</button>

										<p style={{ width: '100%', textAlign: 'center' }} className="mb-0 quantity-value store-quantity-value">
											{productQuantity}
										</p>

										<button data-id={product._id} className="next">
											<img src="/images/add.svg" alt="add" />
										</button>
									</div> */}
								</div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default ProductList;
