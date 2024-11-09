
import mtn from "../../assets/images/mtn.png"
import milo from "../../assets/images/milo.png"
import milk from "../../assets/images/milk.png"
import noodles from "../../assets/images/noodles.png"
import gabage from "../../assets/images/gabage.png"
import spag from "../../assets/images/spag.png"
import egg from "../../assets/images/egg.png"
import deleteIcon from "../../assets/images/delete.svg";
import { useState } from 'react'
import InputField from "../../component/common/input"
import FavouriteBtnSection from "../../component/groceries/favouritebtnsection"
import CartBtn from "../../component/groceries/cartbtn";
import { Link } from "react-router-dom";
import _route from "../../constants/routes";


export default function Category() {
	const [formData, setFormData] = useState({
		amount: "",
	})



	const handleInputChange = (e) =>{
		const {name, value} = e.target 
		const rawValue = value.replace(/[^\d]/g, ''); // Remove non-numeric characters
		console.log(rawValue);
		setFormData(prv => ({...prv, [name]: rawValue}))
	}	


	const carts = [
		{
			product: {
				_id: "prod1",
				title: "Milo Refill",
				price: 3200,
				description: "A high-quality t-shirt made from organic cotton, available in multiple sizes and colors.",
				image: {
					url: milo  // Replace with actual image URL
				},
				size: "800g",
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
				},
				size: "800g",
			},
			quantity: 1
		},
		{
			product: {
				_id: "prod5",
				title: "Spaghetti",
				price: 950,
				description: "A premium leather wallet with multiple compartments.",
				image: {
					url: spag
				},
				size: "800g",
			},
			quantity: 1
		},
		{
			product: {
				_id: "prod5",
				title: "Crate of Egg",
				price: 9540050,
				description: "A premium leather wallet with multiple compartments.",
				image: {
					url: egg
				},
				size: "800g",
			},
			quantity: 1
		}
	];



	
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
					<h4 className="page-title cus-page-title text-paybond text-center w-100 mb-4">Shopping cart</h4>
					
						<div className="d-flex justify-content-between cart-table align-items-start mt-3 w-100">
							<div className="col-5">												
								<p>Product Description</p>
							</div>
							<div className="col-2">											
								<p>Price</p>
							</div>
							<div className="col-3">											
								<p>Quantity</p>
							</div>
							<div className="col-2">											
								<p>Total</p>
							</div>
						</div>				
						
						<div className="p-0 m-0">
							{
								carts.map((product, index)=>{
									return (
										<div key={index} className="d-flex justify-content-between cart-table py-4 align-items-start  w-100">
											<div className="col-5">												
												<div className="d-flex flex-column flex-md-row p-0 product-details-container">
													<div className="shopping-cart">
														<img className="mt-auto" src={product.product.image.url} alt="product" />
													</div>
													<div className="col-12 col-md-8 mt-2 mt-md-0 ms-md-3 px-1 rounded-3 p-details d-flex flex-column">
														<p className="text-black fs-6  mt-0 mb-0">{product.product.title}</p>
														<p className="product-size mb-0">{product.product.size}</p>
														<div className="delete-cont fs-6 mt-auto mb-0">
															<img src={deleteIcon} alt="delete" />
														</div>
													</div>
												</div>
											</div>
											<div className="col-2 text-black fw-bolder fs-5">NGN {product.product.price}</div>
											<div className="col-3">
												<div className=" button-h w-75">
													<CartBtn />

												</div>
											</div>
											<div className="col-2 text-black fw-bolder fs-5">NGN 3,200</div>
										</div>
									)
								})
							}
						</div>


						<div className="d-flex justify-content-between py-4 align-items-start  w-100">
							<div className="w-35">
								<p className="mb-1">Add a note to your order</p>
								<textarea row="5" className="w-100 p-2"></textarea>

							</div>
							<div className="w-35 text-end">
								<p className="text-black fs-5">Subtotal: <span className="fw-bold"> NGN 16,000</span></p>
								<Link to={_route._checkout} className="checkout-btn bg-paybond">Checkout</Link>
							</div>
						</div>
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
