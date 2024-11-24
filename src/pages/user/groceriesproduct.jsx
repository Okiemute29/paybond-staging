
import ProductDetails from "../../component/groceries/productdetails"
import { useEffect, useState } from 'react'
import FavouriteBtnSection from "../../component/groceries/favouritebtnsection"
import useGetAllShop from "../../hooks/shop/usegetallshop"
import usePostAddToCart from '../../hooks/shop/useaddtocart';
import useGetFromCart from '../../hooks/shop/usegetfromcart';
import usePostRemoveFromCart from '../../hooks/shop/useremovefromcart';
import useGetFromFavourite from "../../hooks/shop/usegetfromfavorite";
import usePostAddToFavourite from "../../hooks/shop/useaddtofavorite";
import usePostRemoveFromFavourite from "../../hooks/shop/useremovefromfav";


export default function GroceriesProduct() {
	const [formData, setFormData] = useState({
		amount: "",
	})
	const {getAllShop, data, loading} = useGetAllShop()
	const {addToCart, data: addCartData, loading: addLoading} = usePostAddToCart();
	const {removeFromCart, data: removeCartData, loading: removeLoading } = usePostRemoveFromCart()
	const {getFromCart, data: cartData, loading: cartLoading} = useGetFromCart()
	const {getFromFavourite, data: FavouriteData, loading: favouriteLoading} = useGetFromFavourite()
	const {addToFavourite, data: addFavData, loading: addFavLoading} = usePostAddToFavourite()
	const {removeFromFavourite, data: removeFavData, loading: removeFavLoading} = usePostRemoveFromFavourite()

	// const handleInputChange = (e) =>{
	// 	const {name, value} = e.target 
	// 	const rawValue = value.replace(/[^\d]/g, ''); // Remove non-numeric characters
	// 	console.log(rawValue);
	// 	setFormData(prv => ({...prv, [name]: rawValue}))
	// }	

	const handleAddToCart = (addData) => {
		addToCart(addData)
	}
	const handleAddToFav = (addData) => {
		addToFavourite(addData)
	}

	const handleRemoveFromCart = (addData) => {
		removeFromCart(addData)
	}
	const handleRemoveFromFav = (addData) => {
		removeFromFavourite(addData)
	}
	
	const handleGetAllShopItem = async ()=>{
		getAllShop()
		getFromCart()
		getFromFavourite()
	}

	useEffect(()=>{
		if(addCartData){
			getFromCart()
		}
	}, [addCartData, removeCartData])

	useEffect(()=>{
		if(addFavData){
			getFromFavourite()
		}
	}, [addFavData, removeFavData])

	useEffect(()=>{
		handleGetAllShopItem()
	}, [])

	console.log("FavouriteData", FavouriteData)
	
	return ( 
	<>
		<div className="nk-content ">
			<div className="container-fluid">
				<div className="nk-content-inner">
				<div className="nk-content-body">
					<div className="nk-block-head nk-block-head-sm mt-4">
					<div className="nk-block-between">
						<div className="nk-block-head-content flex-column flex-sm-row d-flex paybound-gap-1 justify-content-sm-between align-items-sm-center w-100">
							<h4 className="page-title cus-page-title text-paybond">Groceries</h4>
							<div className="d-flex paybound-gap-1 justify-content-between align-items-center w-available">
								<div className="d-none d-sm-block"></div>
								
								<FavouriteBtnSection 
									cartData={cartData}
									favData={FavouriteData}
								/>
							</div>
						</div>
						{/* .nk-block-head-content */}
					</div>
					{/* .nk-block-between */}
					</div>
					{/* .nk-block */}
					<div className="nk-block mt-4">
					<div className="row g-gs ">
						<ProductDetails 
							loading={loading}
							products={data}
							cartData={cartData}
							FavouriteData={FavouriteData}
							handleAddToCart={handleAddToCart}
							handleRemoveFromCart={handleRemoveFromCart}
							handleAddToFav={handleAddToFav}
							handleRemoveFromFav={handleRemoveFromFav}
							addLoading={addLoading || removeLoading}

						/>
					</div>
					{/* .row */}
					</div>
					{/* .nk-block */}
				</div>
				</div>
			</div>
		</div>


	</>

  );
}
