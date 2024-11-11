import { useEffect, useState } from "react";
import Modal from "../../../helpers/modal";
import Spinnar from "../../../helpers/spinnar";
import { SelectItem } from '../../../helpers/selectitem'
import _route from "../../../constants/routes";
import useUpdateOrder from "../../../hooks/orders/useupdateorder";
import emptyState from '../../../assets/images/oops.png'


export default function CryptoTransactionList({data, id, loading}) {
	const [ViewModal, setViewModal] = useState(false)
	const [viewItem, setViewItem] = useState(false)
	const {upDateOrder, data: updateData, loading: upDateLoading} = useUpdateOrder()
	
	const handleClose = ()=>{
		setViewModal(false)
	}

	
	const handleAcceptUpdate= ()=>{
		upDateOrder(id, {status: 'successful'})
	}
	

	const handleDeclineUpdate= ()=>{
		upDateOrder(id, {status: 'rejected'})
	}

	console.log("order List", data)
	return (
    <>
      <div className="table-container px-2 h-100 mx-1 mx-sm-2">
        <div className="nk-tb-list is-separate tab_contaner mt-n2">
         {loading ? (
            <div className="child-container">
              <div className="centered-content">
                <div className="emptystate-container">
                  {/* <div>
									<div> */}
                  <Spinnar />
                  {/* </div>
								</div> */}
                </div>
              </div>
            </div>
          ) : data?.length < 1 ? (
            <div className="child-container">
              <div className="centered-content">
                <div className="emptystate-container">
                  {/* <div>
								<div> */}
                  <img src={emptyState} alt="no item found" />
                  <p>No Transaction</p>
                  {/* </div>
							</div> */}
                </div>
              </div>
            </div>
          ) : (
            data?.map((order, index) => {
              return (
                // <div
                //   key={transaction._id}
                //   className="nk-tb-item nk-tb-item-dash"
                // >
                //   <div
                //     onClick={(e) => {
                //       e.stopPropagation();
                //     }}
                //     className="nk-tb-col nk-tb-col-check"
                //   >
                //   </div>
                //   <div className="nk-tb-col">
                //     {/* <span className="tb-sub">#95954</span> */}
                //     <span className="tb-sub table-name">
                //       <span className="user-avatar sm">
                //         <img
                //           src={transaction?.crypto?.logo.url}
                //           alt="avatar"
                //         />
                //       </span>
                //       {/* <span className="user-info"> */}
                //       <p className="user-name ms-1 text-truncate">
                //         {transaction?.crypto?.name}
                //       </p>
                //       {/* </span> */}
                //     </span>
                //   </div>
                //   <div className="nk-tb-col">
                //     <span className="tb-sub text-truncate">
                //       {transaction?.amount?.crypto}
                //     </span>
                //   </div>
                //   <div className="nk-tb-col tb-col-sm">
                //     <span className="tb-sub text-truncate">
				// 	₦{transaction?.amount?.naira}
                //     </span>
                //   </div>
                //   <div className="nk-tb-col tb-col-sm">
                //     <span className="tb-sub text-truncate">
                //       {transaction?.action}
                //     </span>
                //   </div>
                //   <div className="nk-tb-col tb-col-md">
                //     <span className={`tb-sub text-primary  text-truncate ${transaction?.status?.toLowerCase() === 'successful' ? 'text-success' : transaction?.status?.toLowerCase() === 'rejected' ? 'text-danger' : 'text-warning' } `}>
                //       {transaction?.status}
                //     </span>
                //   </div>
                //   {/* <div className="nk-tb-col">
                //     <span className="tb-lead text-truncate">
                //       {transaction.country}
                //     </span>
                //   </div> */}
                // </div>

				
				<div className="product-details-container bg-white">
					<div style={{ height: "14em"}} className="col-4 product-banner">
						<img className="mt-auto" src={order?.image?.url} alt={order?.name} />
					</div>
					<div className="col-8 px-3 p-details">
						<p className="product-title fs-5 fs-md-4 mt-0 mb-0">{order?.name}</p>
						<p className="product-details-desc">{order?.description}</p>
						<div className="d-flex justify-content-between align-items-center">
						<p className="product-price fs-6 fs-md-5 mb-0">₦{order?.price}</p>
						<div className="quantity quantity-counter d-flex justify-content-center g-col-1 align-items-center">
							
							<p className="mb-0 quantity-value">{order?.quantity}</p>
							
						</div>
						</div>
						<div className="varieties-container">
						{/* <div className="size-container col-md-6">
							<p>Size</p>
							<div className="d-flex justify-content-start g-6 grid align-items-center">
							
							{order?.size?.map((size, index)=>{
								return (
									<span key={index} className="size-btn active_size_button">{size}</span>
									)
							})}
							</div>
						</div> */}
						{/* <div className="color-container w-fit">
							<p>Color</p>
							<div className="d-flex justify-content-start g-6 grid align-items-center">
							{order?.color?.map((size, index)=>{
								return (
										<span key={index} style={{background: `#${size}`}} />
									)
							})}
							</div>
						</div> */}
						</div>
					</div>
				</div>

              );
            })
          )}
        </div>
      </div>

      

      {ViewModal && (
        <Modal handleClose={handleClose} showModal={ViewModal}>
          <div className="modal-body modal-body-lg text-center">
            <div className="nk-modal">
              <em
                style={{
                  background: `url("${viewItem?.crypto?.logo?.url}") `,
                  
                }}
                className="nk-modal-icon icon icon-circle icon-circle-xxl ni  bg-success"
              />
              <h4 className="nk-modal-title">{viewItem.name}</h4>
              <div className="nk-modal-text">
                <div className="caption-text">
                  <strong className="text-black">Crypto Details</strong>
				  <br />
                  Crypto Name:
                  <strong> {viewItem.crypto.name}</strong>
                  <br />
                  Transaction Action:
                  <strong> {viewItem.action}</strong>
                  <br />
                  <strong className="text-black">Amount Details</strong>
				  <br />
                  Amount of Crypto:
                  <strong>{viewItem.amount.crypto} {viewItem.crypto.shortCode}</strong>
                  <br />
                  Amount in Naira:
                  <strong> ₦{viewItem.amount.naira}</strong>
                  <br />
                  Amount in Dollar:
                  <strong> ${viewItem.amount.dollar}</strong>
                  <br />
                </div>
                <div>
                  <small>Proof of payment</small>
                  {/* <p>{viewItem?.recievingAddress?.wallet}</p> */}
                  <div
                    style={{
                      background: `url("${viewItem?.proof_of_payment.url}")`,
                      height: `15rem`,
                      width: `10rem`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
					  backgroundRepeat: 'no-repeat',
                      margin: "0 auto",
                    }}
                  ></div>
                </div>
              </div>
			  <div className="d-flex justify-center buttton-action items-center gab-2">
				<div className="nk-modal-action">
					<button
						onClick={()=> handleDeclineUpdate(viewItem._id)}
						disabled={viewItem.status.toLowerCase() === 'rejected'}
						className="btn btn-lg btn-mw btn-danger"
					>
					{upDateLoading ? <Spinnar /> : 'Decline'}
					</button>
				</div>
				<div className="nk-modal-action">
					<button
						onClick={()=> handleAcceptUpdate(viewItem._id)}
						disabled={viewItem.status.toLowerCase() === 'successful'}
						className="btn btn-lg btn-mw btn-primary"
					>
					{upDateLoading ? <Spinnar /> : 'Approve'}
					</button>
				</div>
			  </div>
            </div>
          </div>
          <div className="modal-footer bg-lighter">
            <div className="text-center w-100">
              {/* <p>
                    Earn upto $25 for each friend your refer!{" "}
                    <a href="javascript:void(0)">Invite friends</a>
                  </p> */}
            </div>
          </div>
        </Modal>
      )}

    </>
  );
}
