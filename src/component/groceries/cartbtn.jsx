import { useState } from "react";

export default function CartBtn({isInCart, ProductId, count}) {
	const [countValue, setCountValue] = useState(0)



	const handleClick = (e) => {
		e.stopPropagation();
		e.preventDefault(); // Corrected the typo here
	};

  return (
	<>
		<button 
			data-cart={isInCart}  
			data-id={ProductId} 
			onClick={(e) => handleClick(e)}
			className={`product-add-btn py-1 ${countValue > 0 && "bg-paybond"}`}>
			<div>
				{countValue > 0 && <span onClick={()=> setCountValue(prv => (prv - 1))} className={`cart-plus ${countValue > 0 && " cart-plus-active"}`}>-</span>}
			</div>
			{countValue > 0 ? <p className="text-white mb-0">{countValue}</p> : "cart"}

			<span onClick={()=> setCountValue(prv => (prv + 1))} className={`cart-plus ${countValue > 0 && " cart-plus-active"}`}>+</span>
		</button>
	</>
  )
}
