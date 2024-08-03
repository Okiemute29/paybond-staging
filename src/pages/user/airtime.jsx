import './admin.css'
import sidepic from "../../assets/images/airtime-img.png"
import mtn from "../../assets/images/mtn.png"
import airtel from "../../assets/images/airtel.png"
import glo from "../../assets/images/glo.png"
import mobile from "../../assets/images/9mobil.png"
import check from "../../assets/images/check-green.png"
import dropdown from "../../assets/images/dropdown.svg"
import nigeria from "../../assets/images/nigeria.png"
import Spinnar from '../../component/spinnar'
import { useState } from 'react'


export default function Airtime() {
	var loading = false
	const [selectProvider, setSelectProvider] = useState(false)
	const [picx, setPicx] = useState(null)
	const [name, setName] = useState(null)

	const handleClick = (e) => {
		const parentDiv = e.currentTarget;
		const imgSrc = parentDiv.querySelector('.selected-product-img img').src;
		const paragraphText = parentDiv.querySelector('.select-item p').textContent;
		setPicx(imgSrc);
		setName(paragraphText);
	  };


	return ( 
	<>
		<div className="nk-content ">
		<div className="container-fluid">
			<div className="nk-content-inner">
			<div className="nk-content-body">
				<div className="nk-block-head nk-block-head-sm mt-4">
				<div className="nk-block-between">
					<div className="nk-block-head-content">
						<h4 className="page-title cus-page-title text-paybond">Buy Airtime</h4>
						
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
									<div onClick={()=> setSelectProvider(prv => !prv)} className='bg-white cursor-pointer d-flex justify-content-between align-items-center rounded-4 py-2 px-3'>
										<div className="select-item">
											<div className='selected-product-img'>
											<img src={picx || mtn} alt='select-img' />
											</div>
											<p>{name || "MTN"}</p>
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
							<div className={`card shodowles-card px-2 py-4 ${selectProvider ? "" : " d-none"}`}>
								<div className="nk-ecwg nk-ecwg2">
								<div className="card-inner network-providers-con p-0">
									<div onClick={handleClick} className='cursor-pointer network-providers d-flex justify-content-between align-items-center rounded-4 py-2 px-3'>
										<div className="select-item">
											<div className='selected-product-img'>
											<img src={mtn} alt='select-img' className="provider-logo" />
											</div>
											<p>MTN</p>
										</div>
										<div className='product-check'>
											{name?.toLowerCase() === "mtn" && <img src={check} alt='dropdown' />}
										</div>
									</div>
									<div onClick={handleClick} className='cursor-pointer network-providers d-flex justify-content-between align-items-center rounded-4 py-2 px-3'>
										<div className="select-item">
											<div className='selected-product-img'>
											<img src={airtel} alt='select-img' className="provider-logo" />
											</div>
											<p>AIRTEL</p>
										</div>
										<div className='product-check'>
										{name?.toLowerCase() === "airtel" && <img src={check} alt='dropdown' />}
										</div>
									</div>
									<div onClick={handleClick} className='cursor-pointer network-providers d-flex justify-content-between align-items-center rounded-4 py-2 px-3'>
										<div className="select-item">
											<div className='selected-product-img'>
											<img src={glo} alt='select-img' className="provider-logo" />
											</div>
											<p>GLO</p>
										</div>
										<div className='product-check'>
										{name?.toLowerCase() === "glo" && <img src={check} alt='dropdown' />}
										</div>
									</div>
									<div onClick={handleClick} className='cursor-pointer network-providers d-flex justify-content-between align-items-center rounded-4 py-2 px-3'>
										<div className="select-item">
											<div className='selected-product-img'>
											<img src={mobile} alt='select-img' className="provider-logo" />
											</div>
											<p>9 MOBILE</p>
										</div>
										<div className='product-check'>
										{name?.toLowerCase() === "9 mobile" && <img src={check} alt='dropdown' />}
										</div>
									</div>
								</div>
								{/* .card-inner */}
								</div>
								{/* .nk-ecwg */}
							</div>
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
							<div className="card shodowles-card bg-transparent">
								<div className="nk-ecwg nk-ecwg2">
								<div className="card-inner p-0">
									<div className='bg-white product-amount-con rounded-4 py-2 px-3'>
										<div className='price-tablet'>
											N50
										</div>
										<div className='price-tablet'>
											N100
										</div>
										<div className='price-tablet'>
											N200
										</div>
										<div className='price-tablet'>
											N500
										</div>
										<div className='price-tablet'>
											N1,000
										</div>
										<div className='price-tablet'>
											N1,500
										</div>
										<div className='price-tablet'>
											N2,000
										</div>
										<div className='price-tablet'>
											N50,000
										</div>
										
									</div>
								</div>
								{/* .card-inner */}
								</div>
								{/* .nk-ecwg */}
							</div>
							<div className="card shodowles-card bg-transparent">
								<div className="nk-ecwg nk-ecwg2">
								<div className="card-inner p-0">
									<div className='rounded-4 py-2 px-3'>
										<form>										
											<div className="form-group">
												<label className="form-label auth-label" htmlFor="name">Amount</label>
												<div className="form-control-wrap">
													<input 
														type="text" 
														className="form-control form-control-lg auth-field" 
														id="name" 
														placeholder="Enter Amount"
														required 
													/>
												</div>
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
