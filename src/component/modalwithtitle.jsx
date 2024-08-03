import React from 'react'

export default function ModalMd({handleClose, showModal, header, children}) {
  return (
	<>
	  
	  <div className={`modal-backdrop fade ${showModal && 'show'}`}></div>
		<div
			className={`modal fade  ${showModal && 'show'}`}
			style={{ display: "block" }}
			onClick={()=> {handleClose()}}
		>
			<div
			className="modal-dialog "
			onClick={(e)=> e.stopPropagation()}
			>
			<div className="modal-content tb-ff">
				<span
					onClick={()=> handleClose()}
				className="close"
				>
				<em className="icon ni ni-cross" />
				</span>
				<div className="modal-header">
				<h5 className="modal-title tb-ff">{header}</h5>
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
