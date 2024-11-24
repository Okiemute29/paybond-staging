
import { useEffect, useState } from 'react'
import InputField from "../../component/common/input"
import ProductList from "../../component/groceries/productlist"
import FavouriteBtnSection from "../../component/groceries/favouritebtnsection"
import useGetAllShop from "../../hooks/shop/usegetallshop"
import usePostAddToCart from '../../hooks/shop/useaddtocart';
import useGetFromCart from '../../hooks/shop/usegetfromcart';
import usePostRemoveFromCart from '../../hooks/shop/useremovefromcart';
import useGetFromFavourite from "../../hooks/shop/usegetfromfavorite";
import usePostAddToFavourite from "../../hooks/shop/useaddtofavorite";
import usePostRemoveFromFavourite from "../../hooks/shop/useremovefromfav";
import { SearchHandle } from '../../helpers/searchfilter'


export default function Groceries() {
	const {searchResult, filterHandle, searchTerm} = SearchHandle()
	const {getAllShop, data, loading} = useGetAllShop()
	const {addToCart, data: addCartData, loading: addLoading} = usePostAddToCart();
	const {removeFromCart, data: removeCartData, loading: removeLoading } = usePostRemoveFromCart()
	const {getFromCart, data: cartData, loading: cartLoading} = useGetFromCart()
	const {getFromFavourite, data: FavouriteData, loading: favouriteLoading} = useGetFromFavourite()
	const {addToFavourite, data: addFavData, loading: addFavLoading} = usePostAddToFavourite()
	const {removeFromFavourite, data: removeFavData, loading: removeFavLoading} = usePostRemoveFromFavourite()	

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
		getAllShop()
		getFromFavourite()
		handlegetCart()
	}

	useEffect(()=>{
		if(addCartData){
			handlegetCart()
		}
	}, [addCartData, removeCartData])

	useEffect(()=>{
		handleGetAllShopItem()
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

	   // Handle Search function 
	const searchHandle = (e) =>{
		filterHandle(e.target.value, data)  
	}
	
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
										value={searchTerm}
										change={searchHandle}
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
						<ProductList 
							loading={loading}
							products={data}
							cartData={cartData}
							handleAddToCart={handleAddToCart}
							handleRemoveFromCart={handleRemoveFromCart}
							addLoading={addLoading || removeLoading}
							handleAddToFav={handleAddToFav}
							handleRemoveFromFav={handleRemoveFromFav}
							FavouriteData={FavouriteData}
							searchResult={searchResult}
							searchTerm={searchTerm}

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
