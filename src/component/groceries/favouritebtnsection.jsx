import { Link } from "react-router-dom"
import favourite from "../../assets/images/favorite_colored.svg"
import cart from "../../assets/images/shopping_basket_colored.svg"
import _route from "../../constants/routes"

export default function FavouriteBtnSection() {
  return (
	<>
		<div className="flex-con paybound-gap-1">
			<Link to={_route._favourite} className="fav-con">
				<img src={favourite} alt="favourite" />
			</Link>
			<Link to={_route._category} className="fav-con">
				<img src={cart} alt="cart" />
			</Link>
		</div>
	</>
  )
}
