import React from 'react'
import Spinnar from '../component/spinnar'

export default function LoadingModal() {
  return (
	<>
	  
	  <div className={`modal-backdrop fade show`}></div>
		<div
			className={`modal fadeshow`}
			style={{ display: "block" }}
		>
			<div
			className="modal-dialog modal-dialog-centered modal-lg bg-transparent d-flex flex-column justify-content-center align-items-center text-white"
			>
			
			<Spinnar />
			<p className=" mt-3">Loading...</p>
			{/* .modal-content */}
			</div>
			{/* .modal-dialog */}
		</div>
	</>
  )
}
