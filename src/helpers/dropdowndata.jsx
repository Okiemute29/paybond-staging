import React from 'react'
import check from "../assets/images/check-green.png"
import Spinnar from '../component/spinnar'

export default function DropDown({show, items, formatNumber, handleClick, loading, checkMark, selectedProvider}) {
  return (
	<>
	  
		<div className={`card shodowles-card px-2 py-4 ${show ? "" : " d-none"}`}>
			<div className="nk-ecwg nk-ecwg2">
			<div className="card-inner network-providers-con overflow-scroll-hidden p-0">
				
				{
					loading 
					? 
						<Spinnar />
					:
						items?.map((item, index)=> {
							return (
								<div key={index} onClick={() => handleClick(item)} className='cursor-pointer network-providers d-flex justify-content-between align-items-center rounded-4 py-2 px-3'>
									<div className="select-item">
										{item.logo && <div className='selected-product-img'>
											<img src={item.logo} alt='select-img' className="provider-logo" />
										</div>
										}
										<p>{`${item?.biller_name} ${(item?.amount && item?.amount!== 0) ? `(${formatNumber(item?.amount)})` : ""}`}</p>
									</div>
									{
									
									checkMark && <div className='product-check'>
													{selectedProvider?.name?.toLowerCase() === item?.name?.toLowerCase() && <img src={check} alt='dropdown' />}
												</div>
									}
								</div>
							)
						})
				}
				
				
			</div>
			{/* .card-inner */}
			</div>
			{/* .nk-ecwg */}
		</div>


	</>
  )
}
