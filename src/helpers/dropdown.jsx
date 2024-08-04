import React from 'react'
import check from "../assets/images/check-green.png"

export default function DropDown({show, items, handleClick, checkMark, name}) {
  return (
	<>
	  
		<div className={`card shodowles-card px-2 py-4 ${show ? "" : " d-none"}`}>
			<div className="nk-ecwg nk-ecwg2">
			<div className="card-inner network-providers-con overflow-scroll-hidden p-0">
				
				{
					items?.map((item, index)=> {
						return (
							<div key={index} onClick={() => handleClick(item)} className='cursor-pointer network-providers d-flex justify-content-between align-items-center rounded-4 py-2 px-3'>
								<div className="select-item">
									{item.img && <div className='selected-product-img'>
										<img src={item.img} alt='select-img' className="provider-logo" />
									</div>
									}
									<p>{item?.value}</p>
								</div>
								{
								
								checkMark && <div className='product-check'>
												{name?.toLowerCase() === item?.value?.toLowerCase() && <img src={check} alt='dropdown' />}
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
