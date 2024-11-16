import React from 'react'

export default function SideModal({handleClose, showModal, myStyle, children}) {
  return (
	<>
	  
		<div 
			style={{ display: "none" }} 
			className={`modal-backdrop fade ${showModal && 'show'}`}>

		</div>
		<div
			className={`modal fade  ${showModal && 'show'}`}
			style={{ display: "none" }}
			onClick={()=> {handleClose()}}
		>
			<div
			style={{height: '100vh', marginTop: 0, marginRight: 0,}}
			className={`modal-dialog modal-dialog-centered ${myStyle ? myStyle : "modal-lg"}`}
			onClick={(e)=> e.stopPropagation()}
			>
			<div 
				style={{height: '100vh', background: 'white'}}
				className="modal-content css-1mm56ja css-1mmja p-3 overflow-scroll-hidden overflow-scroll"
			>
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
