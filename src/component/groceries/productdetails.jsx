import React from 'react';
import favourite from "../../assets/images/favorite.svg"
import ProductList from './productlist';

const ProductDetails = ({ product, carts, products, setSelectProduct }) => {
    const isInCart = carts.some(item => item.product._id === product._id);
    // const quantity = isInCart ? carts.find(item => item.product._id === product._id)?.quantity : 0;




    return (
        <div className="col-12">
            <div className="d-flex flex-column flex-md-row product-details-container">
                <div className="col-12 col-md-4 product-banner">
                    <img className="mt-auto" src={product?.image?.url} alt="product" />
                </div>
                <div className="col-12 col-md-8 mt-2 mt-md-0 ms-md-3 p-4 rounded-3 p-details">
                    <p className="banner-title fs-5 fs-md-4 mt-0 mb-0">{product.title}</p>
					<p className="product-size mb-0">{product.size}</p>
                    <p className="product-price fs-6 fs-5 mb-0">
					NGN {product.price}
                    </p>
						

					<div className=" button-h w-50">
						<button 
							data-cart={isInCart}  
							data-id={product._id} 
							className="product-add-btn py-1">
							<div></div>
							cart

							<span className='cart-plus'>+</span>
						</button>

						<div className='d-flex justify-content-start mt-5 paybound-gap-2 align-items-center'>							
							<div className="fav-con">
								<img src={favourite} alt="favourite" />
							</div>
							<p>Add to wishlist</p>
						</div>

					</div>
                    {/* <p className="product-details-desc">{product?.description}</p> */}
                    
                </div>
            </div>
			<div className='mt-5'>
				<p className="banner-title fs-5 my-2">Product Descriptions</p>
				<p>Lorem ipsum dolor sit amet consectetur. Quisque etiam enim malesuada et et amet malesuada et. Morbi amet sem orci faucibus sed. Enim urna nisl quam nisl porta tortor sagittis. Eleifend consequat tempor quis sem erat. Volutpat consequat ornare amet augue sollicitudin accumsan tempus adipiscing. Imperdiet mauris convallis suscipit risus sit. Mi hendrerit leo nunc aliquam imperdiet iaculis. Cras egestas egestas turpis nisl pulvinar. Aliquet sodales id tincidunt iaculis id amet sit elit.
				Quam neque facilisi maecenas sed tellus suscipit pretium. Facilisi nascetur id faucibus purus sed. Egestas pellentesque vestibulum mi sed ullamcorper ornare iaculis scelerisque. In quisque hendrerit nisl sed ac feugiat viverra egestas. Morbi tellus habitant facilisi posuere vitae.</p>
			</div>
			<div className='mt-5'>
			<p className="banner-title fs-5 mb-4">You may also like</p>
			
			<div className="row g-gs ">
				<ProductList 
					products={products}
					carts={carts}
					setSelectProduct={setSelectProduct}
				/>
			</div>
			</div>
        </div>
    );
};

export default ProductDetails;
