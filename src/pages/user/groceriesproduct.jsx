
import mtn from "../../assets/images/mtn.png"
import airtel from "../../assets/images/airtel.png"
import glo from "../../assets/images/glo.png"
import ProductDetails from "../../component/groceries/productdetails"
import FavouriteBtnSection from "../../component/groceries/favouritebtnsection"


export default function GroceriesProduct() {






	const product = [
		{
			_id: "prod1",
			title: "Premium T-Shirt",
			price: 3500,
			description: "A high-quality t-shirt made from organic cotton, available in multiple sizes and colors.",
			image: {
				url: mtn
			},
			size: "800g",
			color: "Blue"
		},
		{
			_id: "prod2",
			title: "Classic Hoodie",
			price: 7000,
			description: "A comfortable hoodie perfect for chilly weather.",
			image: {
				url: airtel
			},
			size: "800g",
			color: "Gray"
		},
		{
			_id: "prod3",
			title: "Sports Cap",
			price: 1500,
			description: "A stylish cap suitable for outdoor activities.",
			image: {
				url: glo
			},
			size: "Super pack",
			color: "Black"
		},
		{
			_id: "prod4",
			title: "Running Shoes",
			price: 12000,
			description: "Lightweight running shoes with excellent grip and comfort.",
			image: {
				url: mtn
			},
			size: "800g",
			color: "Red"
		},
		{
			_id: "prod5",
			title: "Leather Wallet",
			price: 4500,
			description: "A premium leather wallet with multiple compartments.",
			image: {
				url: airtel
			},
			size: "800g",
			color: "Brown"
		}
	];

	const carts = [
		{
			product: {
				_id: "prod1",  // This ID should match the product ID
				title: "Premium T-Shirt",
				price: 3500,
				description: "A high-quality t-shirt made from organic cotton, available in multiple sizes and colors.",
				image: {
					url: mtn  // Replace with actual image URL
				}
			},
			quantity: 2
		},
		{
			product: {
				_id: "prod2",
				title: "Classic Hoodie",
				price: 7000,
				description: "A comfortable hoodie perfect for chilly weather.",
				image: {
					url: airtel  // Replace with actual image URL
				}
			},
			quantity: 1
		}
	];

	const select = {
		_id: "prod1",
		title: "Premium T-Shirt",
		price: 3500,
		description: "A high-quality t-shirt made from organic cotton, available in multiple sizes and colors.",
		image: {
			url: mtn
		},
		size: "800g",
		color: "Blue"
	};
	
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
						<ProductDetails 
							products={product}
							carts={carts}
							product={select}
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
