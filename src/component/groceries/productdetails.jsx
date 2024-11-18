import React, { useEffect, useState, useMemo } from 'react';
import favourite from "../../assets/images/favorite.svg";
import ProductList from './productlist';
import { useParams } from 'react-router-dom';
import CartBtn from './cartbtn';

const ProductDetails = ({ 
  products, 
  loading, 
  handleRemoveFromCart, 
  handleAddToCart, 
  cartData, 
  addLoading 
}) => {
  const { id } = useParams();
  const [productQuantity, setProductQuantity] = useState(0);

  const isInCart = cartData?.some(item => item.product._id === id);
  const product = products.find(item => item._id === id);
  
  // Memoize filtered products to avoid unnecessary recalculations
  const relatedProducts = useMemo(() => 
    products.filter(product => product._id !== id)
  , [products, id]);

  const getProductQuantity = (productId) => {
    const cartItem = cartData?.find(item => item.product._id === productId);
    // Simplified the logic since both checks were identical
    return cartItem ? cartItem.quantity : 0;
  };

  useEffect(() => {
    if (cartData && id) {
      const quantity = getProductQuantity(id);
      setProductQuantity(quantity);
    }
  }, [cartData, id]);

  if (!product) {
    return <div className="col-12">Loading...</div>;
  }

  return (
    <div className="col-12">
      <div className="d-flex flex-column flex-md-row product-details-container">
        <div className="col-12 col-md-4 product-banner">
          {product.image?.url && (
            <img 
              className="mt-auto" 
              src={product.image.url} 
              alt={product.title || 'product'} 
            />
          )}
        </div>
        <div className="col-12 col-md-8 mt-2 mt-md-0 ms-md-3 p-4 rounded-3 p-details">
          <p className="banner-title fs-5 fs-md-4 mt-0 mb-0">
            {product.title}
          </p>
          {product.size && (
            <p className="product-size mb-0">{product.sub_title}</p>
          )}
          <p className="product-price fs-6 fs-5 mb-0">
            NGN {product.price?.toLocaleString()}
          </p>
          
          <div className="button-h w-50">
            <CartBtn 
              isInCart={isInCart}
              cartData={cartData}
              count={productQuantity}
              ProductId={id}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
              addLoading={addLoading}
            />

            <div className='d-flex justify-content-start mt-5 paybound-gap-2 align-items-center'>
              <div className="fav-con">
                <img src={favourite} alt="Add to wishlist" />
              </div>
              <p className="mb-0">Add to wishlist</p>
            </div>
          </div>
        </div>
      </div>

      {product.description && (
        <div className='mt-5'>
          <p className="banner-title fs-5 my-2">Product Descriptions</p>
          <p>{product.description}</p>
        </div>
      )}

      {relatedProducts.length > 0 && (
        <div className='mt-5'>
          <p className="banner-title fs-5 mb-4">You may also like</p>
          <div className="row g-gs">
            <ProductList  
              loading={loading}
              products={relatedProducts}
              cartData={cartData}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
              addLoading={addLoading}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;