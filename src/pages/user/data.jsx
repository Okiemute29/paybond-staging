
import sidepic from "../../assets/images/airtime-img.png"
import mtn from "../../assets/images/mtn.png"
import airtel from "../../assets/images/airtel.png"
import glo from "../../assets/images/glo.png"
import mobile from "../../assets/images/9mobil.png"
import dropdown from "../../assets/images/dropdown.svg"
import nigeria from "../../assets/images/nigeria.png"
import Spinnar from '../../component/spinnar'
import { useState } from 'react'
import DropDown from '../../helpers/dropdown'
import InputField from "../../component/common/input"


export default function Data() {
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
			img: mtn,
			value: "MTN"
		},
		{
			img: airtel,
			value: "AIRTEL"
		},
		{
			img: glo,
			value: "GLO"
		},
		{
			img: mobile,
			value: "9 MOBILE"
		},
	]

	const dataPlan = [
		{
			value: "MTN 100MG - Daily @N100",
			price: "200"
		},
		{
			value: "MTN 200MG - 3Days @N200",
			price: "200"
		},
		{
			value: "MTN 1.2GB + Youtube Data - Monthly @N1,000",
			price: "1000"
		},
		{
			value: "MTN 4GB - Monthly @N2,400",
			price: "2400"
		},
		{
			value: "MTN 350MB - Weekly @N350",
			price: "350"
		},
		{
			value: "MTN 200MG - 3Days @N200",
			price: "200"
		},
		{
			value: "MTN 1.2GB + Youtube Data - Monthly @N1,000",
			price: "1000"
		},
		{
			value: "MTN 4GB - Monthly @N2,400",
			price: "2400"
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
							<h4 className="page-title cus-page-title text-paybond">Buy Data</h4>
							
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

								<div className="card shodowles-card bg-transparent">
									<div className="nk-ecwg nk-ecwg2">
									<div className="card-inner p-0">
										<div className='bg-white d-flex justify-content-between align-items-center rounded-4 py-2 px-3'>
											<div className="select-item">
												<div className='d-flex justify-content-start product-number align-items-center'>
													<div className='selected-product-img me-2'>
														<img src={nigeria} alt='select-img' />
													</div>
													+234
												</div>
												<input className='border-0' type='tel' placeholder='' value="8039835234" />
											</div>
											{/* <div className='dropdown-con'>
												<img src={dropdown} alt='dropdown' />
											</div> */}
										</div>
									</div>
									{/* .card-inner */}
									</div>
									{/* .nk-ecwg */}
								</div>

								
								{
									name && <div className="card shodowles-card bg-transparent">
												<div className="nk-ecwg nk-ecwg2">
												<div className="card-inner p-0">
													<p className='auth-label'>Data Bundle</p>
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
