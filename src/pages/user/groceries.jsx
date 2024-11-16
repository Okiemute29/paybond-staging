
import milo from "../../assets/images/milo.png"
import milk from "../../assets/images/milk.png"
import noodles from "../../assets/images/noodles.png"
import gabage from "../../assets/images/gabage.png"
import spag from "../../assets/images/spag.png"
import egg from "../../assets/images/egg.png"
import { useEffect, useState } from 'react'
import InputField from "../../component/common/input"
import ProductList from "../../component/groceries/productlist"
import FavouriteBtnSection from "../../component/groceries/favouritebtnsection"
import useGetAllShop from "../../hooks/shop/usegetallshop"
import usePostAddToCart from '../../hooks/shop/useaddtocart';
import useGetFromCart from '../../hooks/shop/usegetfromcart';
import usePostRemoveFromCart from '../../hooks/shop/useremovefromcart';


export default function Groceries() {
	const [formData, setFormData] = useState({
		amount: "",
	})
	const {getAllShop, data, loading} = useGetAllShop()
	const {addToCart, data: addCartData, loading: addLoading} = usePostAddToCart();
	const {removeFromCart, data: removeCartData, loading: removeLoading } = usePostRemoveFromCart()
	const {getFromCart, data: cartData, loading: cartLoading} = useGetFromCart()

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
	
	const handleGetAllShopItem = async ()=>{
		await getAllShop()
		await getFromCart()
	}

	useEffect(()=>{
		if(addCartData){
			getFromCart()
		}
	}, [addCartData, removeCartData])

	useEffect(()=>{
		handleGetAllShopItem()
	}, [])
	
	const product = [
		{
			_id: "prod1",
			title: "Milo Refill",
			price: 3200,
			description: "A high-quality t-shirt made from organic cotton, available in multiple sizes and colors.",
			image: {
				url: milo
			},
			size: "800g",
			color: "Blue"
		},
		{
			_id: "prod2",
			title: "Peak Milk Full Creame",
			price: 8200,
			description: "A comfortable hoodie perfect for chilly weather.",
			image: {
				url: milk
			},
			size: "800g",
			color: "Gray"
		},
		{
			_id: "prod3",
			title: "Indomie Noodles",
			price: 500,
			description: "A stylish cap suitable for outdoor activities.",
			image: {
				url: noodles
			},
			size: "Super pack",
			color: "Black"
		},
		{
			_id: "prod4",
			title: "Gabage",
			price: 3200,
			description: "Lightweight running shoes with excellent grip and comfort.",
			image: {
				url: gabage
			},
			size: "800g",
			color: "Red"
		},
		{
			_id: "prod5",
			title: "Spaghetti",
			price: 950,
			description: "A premium leather wallet with multiple compartments.",
			image: {
				url: spag
			},
			size: "800g",
			color: "Brown"
		},
		{
			_id: "prod5",
			title: "Crate of Egg",
			price: 9540050,
			description: "A premium leather wallet with multiple compartments.",
			image: {
				url: egg
			},
			size: "800g",
			color: "Brown"
		}
	];

	const carts = [
		{
			product: {
				_id: "prod1",
				title: "Milo Refill",
				price: 3200,
				description: "A high-quality t-shirt made from organic cotton, available in multiple sizes and colors.",
				image: {
					url: milo  // Replace with actual image URL
				}
			},
			quantity: 2
		},
		{
			product: {
				_id: "prod2",
				title: "Peak Milk Full Creame",
				price: 8200,
				description: "A comfortable hoodie perfect for chilly weather.",
				image: {
					url: milk  // Replace with actual image URL
				}
			},
			quantity: 1
		}
	];
	
	console.log("cartData", cartData)
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
								<FavouriteBtnSection />
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
							carts={carts}
							cartData={cartData}
							handleAddToCart={handleAddToCart}
							handleRemoveFromCart={handleRemoveFromCart}
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
