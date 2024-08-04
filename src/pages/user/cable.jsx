
import sidepic from "../../assets/images/cable-img.png"
import dstv from "../../assets/images/dstv.png"
import gotv from "../../assets/images/gotv.png"
import starTime from "../../assets/images/stattime.png"
import dropdown from "../../assets/images/dropdown.svg"
import Spinnar from '../../component/spinnar'
import { useState } from 'react'
import DropDown from '../../helpers/dropdown'
import InputField from "../../component/common/input"


export default function Cable() {
	var loading = false
	const [selectProvider, setSelectProvider] = useState(false)
	const [selectDataPlan, setSelectDataPlan] = useState(false)
	const [picx, setPicx] = useState(null)
	const [name, setName] = useState(null)
	const [data, setData] = useState(null)
	const [formData, setFormData] = useState({
		amount: "",
	})

	const handleClick = (e) => {
		setPicx(e.img);
		setName(e.value);
	};

	const handleDataClick = (e) => {
		setData(e.value);
		setFormData(prv => ({...prv, amount: e.price}))
	};

	const handleInputChange = (e) =>{
		const {name, value} = e.target 
		const rawValue = value.replace(/[^\d]/g, ''); // Remove non-numeric characters
		console.log(rawValue);
		setFormData(prv => ({...prv, [name]: rawValue}))
	}	


	const items = [
		{
			img: dstv,
			value: "DSTV"
		},
		{
			img: gotv,
			value: "GOTV"
		},
		{
			img: starTime,
			value: "StartTimes"
		},
	]

	const dataPlan = [
		{
			value: "DStv Padi @N2,950",
			price: "2950"
		},
		{
			value: "DStv Yanga @N4,200",
			price: "4200"
		},
		{
			value: "DStv Confarm @N7,400",
			price: "7400"
		},
		{
			value: "DStv Compact @N12,500",
			price: "12500"
		}
	]


	return ( 
	<>
		<div className="nk-content ">
			<div className="container-fluid">
				<div className="nk-content-inner">
				<div className="nk-content-body">
					<div className="nk-block-head nk-block-head-sm mt-4">
					<div className="nk-block-between">
						<div className="nk-block-head-content">
							<h4 className="page-title cus-page-title text-paybond">Subscribe Cable TV</h4>
							
						</div>
						{/* .nk-block-head-content */}
					</div>
					{/* .nk-block-between */}
					</div>
					{/* .nk-block */}
					<div className="nk-block">
					<div className="row g-gs">
						<div className={`col-md-6`}>
							<div className='col-md-9'>
								<div className="card shodowles-card bg-transparent">
									<div className="nk-ecwg nk-ecwg2">
									<div className="card-inner p-0">
									<p className='auth-label'>Select Provider</p>
										<div onClick={()=> setSelectProvider(prv => !prv)} className='bg-white cursor-pointer d-flex justify-content-between align-items-center rounded-4 py-2 px-3'>
											<div className="select-item">
												<div className='selected-product-img'>
												{picx && <img src={picx} alt='select-img' />}
												</div>
												{name && <p>{name}</p>}
											</div>
											<div className='dropdown-con'>
												<img src={dropdown} alt='dropdown' />
											</div>
										</div>
									</div>
									{/* .card-inner */}
									</div>
									{/* .nk-ecwg */}
								</div>

								<DropDown 
									show={selectProvider}
									items={items}
									handleClick={handleClick}
									checkMark
									name={name}

								/>

								<div className="card mt-0 shodowles-card bg-transparent">
									<div className="nk-ecwg nk-ecwg2">
									<div className="card-inner p-0">
										<div className='rounded-4 py-2'>										
											<div className="form-group">												
												<InputField 
													label="Smart Card Number"
													name="cardNumber"
													type="number"
													placeholder="Enter Smart Card Number"
													value={formData.cardNumber}
													change={handleInputChange}
												/>
											</div>
										</div>
									</div>
									{/* .card-inner */}
									</div>
									{/* .nk-ecwg */}
								</div>

								
								{
									name && <div className="card mt-0 shodowles-card bg-transparent">
												<div className="nk-ecwg nk-ecwg2">
												<div className="card-inner p-0">
													<p className='auth-label'>Plan/Bouquet</p>
													<div onClick={()=> setSelectDataPlan(prv => !prv)} className='bg-white cursor-pointer d-flex justify-content-between align-items-center rounded-4 py-2 px-3'>
														{
															data === null && <div className='selected-product-img me-2'></div>
														}
														<div className="select-item">
															{data && <p>{data}</p>}
														</div>
														<div className='dropdown-con px-1'>
															<img src={dropdown} alt='dropdown' />
														</div>
													</div>
												</div>
												{/* .card-inner */}
												</div>
												{/* .nk-ecwg */}
											</div>
								}

								<DropDown 
									show={selectDataPlan}
									items={dataPlan}
									handleClick={handleDataClick}
									name={name}

								/>
								<div className="card mt-0 shodowles-card bg-transparent">
									<div className="nk-ecwg nk-ecwg2">
									<div className="card-inner p-0">
										<div className='rounded-4 py-2'>
											<form>										
												<div className="form-group">												
													<InputField 
														label="Amount"
														name="amount"
														type="number"
														placeholder="Enter Amount"
														value={formData.amount}
														change={handleInputChange}
													/>
												</div>
												{/* .form-group */}
												<div className="form-group col-12">
												<button className="auth-btn btn btn-lg btn-primary btn-block">
													{loading ? <Spinnar /> : 'Pay'}
												</button>
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
						<div className="d-none d-md-block col-md-6">
							<div className="card bg-transparent">
								<div className="nk-ecwg nk-ecwg2">
								<div className="card-inner flex-grow-1 d-flex flex-column p-0">
									<div className="col-12 rounded-5 overflow-hidden">
										<img className="product-sidepic" src={sidepic} alt="airtime" />
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
