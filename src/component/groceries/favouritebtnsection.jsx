import { Link } from "react-router-dom"
import favourite from "../../assets/images/favorite_colored.svg"
import cart from "../../assets/images/shopping_basket_colored.svg"
import _route from "../../constants/routes"

export default function FavouriteBtnSection({cartData, favData}) {

  return (
	<>
		<div className="flex-con paybound-gap-1">
			<Link to={_route._favourite} className="fav-con-top">
				<img src={favourite} alt="favourite" />
				<div className="fav-con-amount">{(favData) ? favData?.length : "0"}</div>
			</Link>
			<Link to={_route._category} className="fav-con-top">
				<img src={cart} alt="cart" />
				<div className="fav-con-amount">{(cartData) ? cartData?.length  === 0 ? "0" : cartData[0]?.total_items_in_cart : "0"}</div>
			</Link>
		</div>
	</>
  )
}
