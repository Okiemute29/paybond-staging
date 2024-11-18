import { useState, useEffect } from 'react';
import Spinnar from "../../helpers/spinnar";


const CartButton = ({ 
  isInCart, 
  ProductId, 
  count: serverCount, 
  handleAddToCart, 
  handleRemoveFromCart, 
  addLoading 
}) => {
  // Local state to track optimistic count
  const [optimisticCount, setOptimisticCount] = useState(serverCount);

  // Use optimistic count if available, otherwise use server count
  const displayCount = optimisticCount ?? serverCount;

  const handleOptimisticAdd = async (e) => {
    // Immediately update local count
    setOptimisticCount(prev => prev + 1);
    
    try {
      // Make the actual server request
      await handleAddToCart({ product: ProductId });
    } catch (error) {
      // Revert optimistic update if server request fails
      setOptimisticCount(prev => prev - 1);
      console.error('Failed to add item:', error);
    }
  };

  const handleOptimisticRemove = async (e) => {
    // Don't allow negative counts
    if (displayCount <= 0) return;

    // Immediately update local count
    setOptimisticCount(prev => prev - 1);
    
    try {
      // Make the actual server request
      await handleRemoveFromCart(ProductId);
    } catch (error) {
      // Revert optimistic update if server request fails
      setOptimisticCount(prev => prev + 1);
      console.error('Failed to remove item:', error);
    }
  };

  // Update local state when server state changes
  useEffect(() => {
    setOptimisticCount(serverCount);
  }, [serverCount]);

  return (
    <button className={`product-add-btn py-1 ${displayCount > 0 && "bg-paybond"}`}>
      <div>
        {displayCount > 0 && (
          <span 
            onClick={handleOptimisticRemove}
            className={`cart-plus ${displayCount > 0 && "cart-plus-active"}`}
          >
            -
          </span>
        )}
      </div>
      
      {addLoading ? (
        <span className="add-loading">
          <Spinnar />
        </span>
      ) : displayCount > 0 ? (
        <p className="text-white mb-0">{displayCount}</p>
      ) : (
        "cart"
      )}
      
      <span 
        onClick={handleOptimisticAdd}
        className={`cart-plus ${displayCount > 0 && "cart-plus-active"}`}
      >
        +
      </span>
    </button>
  );
};

export default CartButton;