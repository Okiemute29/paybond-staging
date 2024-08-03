import React from 'react'

export default function Modal({handleClose, showModal, children}) {
  return (
	<>
	  
	  <div className={`modal-backdrop fade ${showModal && 'show'}`}></div>
		<div
			className={`modal fade  ${showModal && 'show'}`}
			style={{ display: "block" }}
			onClick={()=> {handleClose()}}
		>
			<div
			className="modal-dialog modal-dialog-centered modal-md"
			onClick={(e)=> e.stopPropagation()}
			>
			<div className="modal-content ">
				<div onClick={()=> handleClose()}  className="close" data-bs-dismiss="modal">
				<em className="icon ni ni-cross-sm" />
				</div>
				{children}
				{/* .modal-body */}
			</div>
			{/* .modal-content */}
			</div>
			{/* .modal-dialog */}
		</div>
	</>
  )
}
