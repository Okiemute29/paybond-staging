import Spinnar from "../../helpers/spinnar";

export default function CartBtn({isInCart, ProductId, count, handleAddToCart, handleRemoveFromCart, addLoading}) {

  return (
	<>
		<button 
			// data-cart={isInCart}  
			// data-id={ProductId} 
			className={`product-add-btn py-1 ${count > 0 && "bg-paybond"}`}>
			<div>
				{count > 0 && <span onClick={(e) => handleRemoveFromCart({product: ProductId})} className={`cart-plus ${count > 0 && " cart-plus-active"}`}>-</span>}
			</div>
			{addLoading ? <span className="add-loading"> <Spinnar /> </span> : count > 0 ? <p className="text-white mb-0">{count}</p> : "cart"}

			<span onClick={(e) => handleAddToCart({product: ProductId})} className={`cart-plus ${count > 0 && " cart-plus-active"}`}>+</span>
		</button>
	</>
  )
}
