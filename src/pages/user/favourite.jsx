
import { useState, useEffect } from 'react'
import InputField from "../../component/common/input"
import FavProductList from "../../component/groceries/favproductlist"
import FavouriteBtnSection from "../../component/groceries/favouritebtnsection"
import useGetFromFavourite from "../../hooks/shop/usegetfromfavorite";
import usePostAddToFavourite from "../../hooks/shop/useaddtofavorite";
import usePostRemoveFromFavourite from "../../hooks/shop/useremovefromfav";
import useGetFromCart from '../../hooks/shop/usegetfromcart';
import usePostAddToCart from '../../hooks/shop/useaddtocart';
import usePostRemoveFromCart from '../../hooks/shop/useremovefromcart';


export default function Favourites() {
	const [formData, setFormData] = useState({
		amount: "",
	})
	const {getFromFavourite, data: FavouriteData, loading} = useGetFromFavourite()
	const {addToCart, data: addCartData, loading: addLoading} = usePostAddToCart();
	const {removeFromCart, data: removeCartData, loading: removeLoading } = usePostRemoveFromCart()
	const {getFromCart, data: cartData, loading: cartLoading} = useGetFromCart()
	const {addToFavourite, data: addFavData, loading: addFavLoading} = usePostAddToFavourite()
	const {removeFromFavourite, data: removeFavData, loading: removeFavLoading} = usePostRemoveFromFavourite()



	const handleInputChange = (e) =>{
		const {name, value} = e.target 
		const rawValue = value.replace(/[^\d]/g, ''); // Remove non-numeric characters
		console.log(rawValue);
		setFormData(prv => ({...prv, [name]: rawValue}))
	}	

	
	
	const handleAddToCart = (addData) => {
		addToCart(addData)
	}

	const handleRemoveFromCart = (addData) => {
		removeFromCart(addData)
	}

	const handlegetCart = () => {
		getFromCart()
	}
	
	const handleGetAllShopItem = async ()=>{
		getFromFavourite()
		handlegetCart()
	}

	useEffect(()=>{
		if(addCartData){
			handlegetCart()
		}
	}, [addCartData, removeCartData])

	useEffect(()=>{
		if(cartData || FavouriteData){
			handleGetAllShopItem()
		}
	}, [])

	const handleAddToFav = (addData) => {
		addToFavourite(addData)
	}
	const handleRemoveFromFav = (addData) => {
		removeFromFavourite(addData)
	}
	
	useEffect(()=>{
		if(addFavData){
			getFromFavourite()
		}
	}, [addFavData, removeFavData])
	
	
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
								<div className=" w-75 relative">												
									<InputField 
										name="search"
										type="text"
										inputClass=""
										placeholder="Search groceries"
										value={formData.amount}
										change={handleInputChange}
									/>
								</div>
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
					<h4 className="page-title cus-page-title text-paybond text-center w-100 mb-4">Favourites</h4>
					
						<FavProductList 
							loading={loading}
							products={FavouriteData}
							cartData={cartData}
							handleAddToCart={handleAddToCart}
							handleRemoveFromCart={handleRemoveFromCart}
							addLoading={addLoading || removeLoading}
							handleAddToFav={handleAddToFav}
							handleRemoveFromFav={handleRemoveFromFav}
							FavouriteData={FavouriteData}
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
