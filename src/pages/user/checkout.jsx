
import sidepic from "../../assets/images/electricity-img.png"
import aedc from "../../assets/images/AEDC-BRAND.png"
import bedc from "../../assets/images/BEDC.png"
import eedc from "../../assets/images/eedc.png"
import ecedc from "../../assets/images/ecedc.png"
import PHED from "../../assets/images/PHED.png"
import ibedc from "../../assets/images/ibedc.png"
import dropdown from "../../assets/images/dropdown.svg"
import Spinnar from '../../component/spinnar'
import { useState } from 'react'
import DropDown from '../../helpers/dropdown'
import InputField from "../../component/common/input"


export default function CheckOut() {
	var loading = false
	const [selectProvider, setSelectProvider] = useState(false)
	const [picx, setPicx] = useState(null)
	const [name, setName] = useState(null)
	const [formData, setFormData] = useState({
		amount: "",
		meterNumber: "",
		meterType: "prepaid"
	})

	const handleClick = (e) => {
		setPicx(e.img);
		setName(e.value);
	};

	const handleInputChange = (e) =>{
		const {name, value} = e.target 
		const rawValue = value.replace(/[^\d]/g, ''); // Remove non-numeric characters
		console.log(rawValue);
		setFormData(prv => ({...prv, [name]: rawValue}))
	}	



	const items = [
		{
			img: aedc,
			value: "Abuja Electricity"
		},
		{
			img: bedc,
			value: "BEDC Electricity "
		},
		{
			img: eedc,
			value: "Enugu Electricity"
		},
		{
			img: ecedc,
			value: "Eko Electricity "
		},
		{
			img: PHED,
			value: "Port Harcourt Electricity "
		},
		{
			img: ibedc,
			value: "Benin Electricity"
		},
	]


	return ( 
	<>
		<div className="nk-content ">
		<div className="container-fluid">
			<div className="nk-content-inner">
			<div className="nk-content-body">
				<div className="nk-block-head nk-block-head-sm mt-4">
				<div className="nk-block-between">
					{/* .nk-block-head-content */}
						<div className="nk-block-head-content">
							<h4 className="page-title cus-page-title text-paybond">Groceries</h4>
							
						</div>
				</div>
				{/* .nk-block-between */}
				</div>
				{/* .nk-block */}
				<div className="nk-block">
				<div className="row g-gs">
					<div className={`col-md-6`}>
						<div className='col-md-9'>

							<div className="card mt-0 shodowles-card bg-transparent">
								<div className="nk-ecwg nk-ecwg2">
								<div className="card-inner p-0">
									<div className='rounded-4 py-2'>
									<form>								
										<div className="form-group">												
											<InputField 
												label="House Address"
												name="address"
												type="text"
												placeholder="Enter house address"
												value={formData.address}
												change={handleInputChange}
											/>
										</div>									
										<div className="form-group">												
											<InputField 
												label="City"
												name="city"
												type="text"
												placeholder="Enter City"
												value={formData.city}
												change={handleInputChange}
											/>
										</div>								
										<div className="form-group">												
											<InputField 
												label="Phone Number"
												name="number"
												type="tel"
												placeholder="Enter phone number"
												value={formData.city}
												change={handleInputChange}
											/>
										</div>
										<div className="mt-5">
											<p className="text-black fs-6">Delivery Fee: <span className="fw-bold ms-2"> NGN 16,000</span></p>
										</div>
										

									</form>
									</div>
								</div>
								{/* .card-inner */}
								</div>
								{/* .nk-ecwg */}
							</div>
						</div>
					{/* .card */}
					</div>
					{/* .col */}
					<div className="col-md-6">
						<div className="card bg-transparent">
							<div className="nk-ecwg nk-ecwg2">
							<div className="card-inner flex-grow-1 d-flex flex-column ps-4">
								<div  className="col-12 p-4 text-white rounded-5 bg-paybond overflow-hidden ">
									<h4>Order Sumary</h4>
									<div className="py-3 border-b-white d-flex flex-column justify-content-start paybound-gap-2">
										{
											[1,2,3,4,5].map((element, index)=>{
												return (
													
													<div className="fs-5 d-flex justify-content-between align-items-center">
														<p className="mb-0 fw-normal">Millo Refil 800g</p>
														<p className="fw-bold">NGN 3,200</p>
													</div>
												)
											})
										}
									</div>
									<div className="fs-5 border-b-white py-3 d-flex justify-content-between align-items-center">
										<p className="mb-0 fw-bold">Subtotal</p>
										<p className="fw-bold">NGN 16,000</p>
									</div>
									<div className="fs-5 border-b-white py-3 d-flex justify-content-between align-items-center">
										<p className="mb-0 fw-bold">Delivery fee</p>
										<p className="fw-bold">NGN 1,550</p>
									</div>
									<div className="fs-5 border-b-white py-3 d-flex justify-content-between align-items-center">
										<p className="mb-0 fw-bold">Total</p>
										<p className="fw-bold">NGN 17,550</p>
									</div>

									<div className="w-100 d-flex justify-content-center mt-4 align-items-center">
										<button className="w-75  fw-medium complete-btn">
											<span className="text-paybond">Complete Order</span>
										</button>
									</div>

								</div>
							</div>
							{/* .card-inner */}
							</div>
							{/* .nk-ecwg */}
						</div>
					</div>
					{/* .col */}
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
