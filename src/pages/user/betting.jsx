
import sidepic from "../../assets/images/betting-img.png"
import sporty from "../../assets/images/sporty.png"
import mb from "../../assets/images/mb.png"
import xbet from "../../assets/images/xbet.png"
import kingsbet from "../../assets/images/kingsbet.png"
import bet9ja from "../../assets/images/bet9ja.png"
import dropdown from "../../assets/images/dropdown.svg"
import Spinnar from '../../component/spinnar'
import { useState } from 'react'
import DropDown from '../../helpers/dropdown'
import InputField from "../../component/common/input"


export default function Betting() {
	var loading = false
	const [selectProvider, setSelectProvider] = useState(false)
	const [picx, setPicx] = useState(null)
	const [name, setName] = useState(null)
	const [formData, setFormData] = useState({
		amount: "",
		userId: "",
	})

	const handleClick = (e) => {
		setPicx(e.img);
		setName(e.value);
	};

	const handleInputChange = (e) =>{
		const {name, value} = e.target 
		const rawValue = value.replace(/[^\d]/g, ''); 
		setFormData(prv => ({...prv, [name]: rawValue}))
	}	



	const items = [
		{
			img: sporty,
			value: "Sportybet"
		},
		{
			img: mb,
			value: "Merrybet"
		},
		{
			img: bet9ja,
			value: "Bet9ja"
		},
		{
			img: xbet,
			value: "1Xbet"
		},
		{
			img: kingsbet,
			value: "BetKing "
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
					<div className="nk-block-head-content">
						<h4 className="page-title cus-page-title text-paybond">Betting</h4>
						
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
									<p className='auth-label'>Select Betting Provider</p>
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
												label="User ID"
												name="userId"
												type="number"
												placeholder="Enter User ID"
												value={formData.userId}
												change={handleInputChange}
											/>
										</div>
									</div>
								</div>
								{/* .card-inner */}
								</div>
								{/* .nk-ecwg */}
							</div>
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
