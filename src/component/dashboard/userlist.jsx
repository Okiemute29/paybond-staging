import { useEffect, useState } from "react";
import Modal from "../../helpers/modal";
import Spinnar from "../../helpers/spinnar";
import { SelectItem } from '../../helpers/selectitem'
import { Link, useNavigate } from "react-router-dom";
import _route from "../../constants/routes";
import emptyState from '../../assets/images/oops.png'
// import useGetAllOrder from '../../hooks/orders/usegetorder';
import Skeleton from "../skeletons/skeleton";
import Profile from "../data/profile";
import TwoCharacterComponent from "../../helpers/twocharactercomponent";

export default function UserTableList({dashboard}) {
	const options = { month: 'long', year: 'numeric', day: 'numeric' };
	const [showDeleteModal, setDeleteModal] = useState(false)
	const [showDeleteAllModal, setDeleteAllModal] = useState(false)
	const {handleSelectAllChecked, handleEachInvoice, selectedItem} = SelectItem()
	const [deleteId, setDeleteId] = useState(null)
	const navigate = useNavigate()
	const data = []
	const loading = false
	// const {getAllOrder, data, loading} = useGetAllOrder()
	const deleteLoading = false


	const handleGetAllAgent = async ()=>{
		// await getAllOrder()
	}

	useEffect(()=>{
		handleGetAllAgent()
	}, [])
	
	const handleClose =()=>{
		setDeleteModal(false)
		setDeleteAllModal(false)
		setDeleteId(null)
	}

	const handleDelete = async ()=>{
		console.log(deleteId)
		handleClose()
	}

	const handleAllDelete = async ()=>{
		console.log(selectedItem)
		handleClose()
	}
console.log(Profile.filter(item => item.id === 2)[0]?.name)
	return ( 
	<>
		
		<div className="nk-tb-list nk-tb-ulist trans-table">
        <div className="nk-tb-item nk-tb-head table-header">
          <div className="nk-tb-col tb-inner-tx">
            <span className="sub-text">
              <strong>Name</strong>
            </span>
          </div>
          <div className="nk-tb-col tb-col-mb tb-inner-tx">
            <span className="sub-text">
              <strong>Total Amount</strong>
            </span>
          </div>
          <div className="nk-tb-col tb-col-md tb-inner-tx">
            <span className="sub-text">
              <strong>Payment Method</strong>
            </span>
          </div>
          <div className="nk-tb-col tb-col-lg tb-inner-tx">
            <span className="sub-text">
              <strong>Date</strong>
            </span>
          </div>
          <div className="nk-tb-col tb-col-lg tb-inner-tx">
            <span className="sub-text">
              <strong>Status</strong>
            </span>
          </div>
          <div className="nk-tb-col nk-tb-col-tools text-right tb-inner-tx">
            <div>
              <span className="sub-text" />
            </div>
          </div>
        </div>

		{
			loading 
			?
				[1,2,3,4,5].map(()=>{
					return (
						
						<div className="nk-tb-item table-content">
						<div className="nk-tb-col no-border">
						  <div className="user-card">
							<div
							  className="user-avatar"
							><Skeleton type='avatar'/></div>
							<div className="user-info">
							  <span className="tb-lead">
								<Skeleton type='text' />
							  </span>
							</div>
							<input type="text" defaultValue="BTC" hidden />
						  </div>
						</div>
						<div className="nk-tb-col tb-col-mb no-border">
						  <span className="tb-amount">
							<Skeleton type='text' />
						  </span>
						</div>
						<div className="nk-tb-col tb-col-md no-border">
						  <span><Skeleton type='text' /></span>
						</div>
						<div className="nk-tb-col tb-col-lg no-border">
						  <span><Skeleton type='text' /></span>
						</div>
						<div className="nk-tb-col tb-col-md">
							<span className={`tb-sub text-primary  text-truncate ${crypto?.status?.toLowerCase() === 'successful' ? 'text-success' : crypto.status?.toLowerCase() === 'processing' ? 'text-warning' : 'text-danger' } `}>
								<Skeleton type='text' />
							</span>
						</div>
						<div className="nk-tb-col nk-tb-col-tools no-border">
							<div className="dropdown">
								<Skeleton type='text' />
							</div>
			
						</div>
					  </div>
					)
				})
			:
			data.length < 1 ?
			
			<div className='child-container'>
				<div className='centered-content'>
					<div className='emptystate-container'>
						{/* <div>
							<div> */}
								<img src={emptyState} alt='no item found' />
								<p>No Order</p>
							{/* </div>
						</div> */}
					</div>
				</div>
			</div>
			:
			[...data]?.reverse().slice(0, 5).map((crypto, index) =>{
				return (
					<div key={index} className="nk-tb-item table-content">
						<div className="nk-tb-col no-border">
						<div className="user-card">
							<div
							className="user-avatar">
								{
									crypto?.user?.avatar ?
									
									<img
									src={Profile[+crypto?.user?.avatar - 1].name || ''}
									alt="avatar"
									/>
									:									
									<span><TwoCharacterComponent data={`${crypto?.user?.firstname} ${crypto?.user?.lastname}`} /> </span>
								}
							</div>
							<div className="user-info">
							<span className="tb-lead">
								{crypto?.user?.firstname} {crypto?.user?.lastname} 
							</span>
							</div>
							<input type="text" defaultValue="BTC" hidden />
						</div>
						</div>
						<div className="nk-tb-col tb-col-mb no-border">
						<span className="tb-amount">
						<span className="currency">₦</span>{crypto?.total_amount} 
						</span>
						</div>
						<div className="nk-tb-col tb-col-md no-border">
						<span>{crypto?.payment_method}</span>
						</div>
						<div className="nk-tb-col tb-col-lg no-border">
						<span>{`${(new Date(crypto?.createdAt))?.toLocaleDateString('en-US', options)}`}</span>
						</div>
						<div className="nk-tb-col tb-col-md">
							<span className={`tb-sub text-primary  text-truncate ${crypto?.status?.toLowerCase() === 'successful' ? 'text-success' : crypto.status?.toLowerCase() === 'processing' ? 'text-warning' : 'text-danger' } `}>
								{crypto?.status}
							</span>
						</div>
						<div className="nk-tb-col nk-tb-col-tools no-border">
							<div className="dropdown">
								<a className="text-soft dropdown-toggle btn btn-icon btn-trigger" data-bs-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
								<div className="dropdown-menu dropdown-menu-right ">
									<ul className="link-list-opt no-bdr">
										<li><Link to={`${_route._admin_orders}/${crypto?._id}/${crypto?.user?._id}`}><em className="icon ni ni-eye" /><span>View Order</span></Link></li>
										{/* <li onClick={()=> {setEditCrypto(crypto); setEditAddModal(true)}}><a href="javascript:void(0)"><em className="icon ni ni-edit" /><span>Edit Crypto</span></a></li>
										<li onClick={()=> {setDeleteId(crypto?._id); setDeleteModal(true)}}><a href="javascript:void(0)"><em className="icon ni ni-trash" /><span>Delete Crypto</span></a></li> */}
									</ul>
								</div>
							</div>

						</div>
					</div>
				);
			})
		}
        




      </div>

		
{showDeleteModal && (
		<Modal handleClose={handleClose} showModal={showDeleteModal} >
			<div className="modal-body modal-body-lg">
				<h5 className="title">Confirm Delete</h5>
				<div className="tab-content">
					<div className="tab-pane active" id="personal" role="tabpanel">
						<p>Are you sure you want to delete User</p>
					</div>
					{/* .tab-pane */}
				</div>
				<div className="col-12 mt-4">
					<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
						<li>
							<div
								onClick={()=> handleDelete()}
								className="btn btn-lg btn-primary"
							>
								{
									deleteLoading ? <Spinnar /> : 'Delete Admin'
								}
								
							</div>
						</li>
						<li>
							<div
								onClick={()=> handleClose()}
								className="clipboard-init link link-light"
							>
								Cancel
							</div>
						</li>
					</ul>
				</div>
				{/* .tab-content */}
			</div>
		</Modal>
)}

		
{showDeleteAllModal && (
		<Modal handleClose={handleClose} showModal={showDeleteModal} >
			<div className="modal-body modal-body-lg">
				<h5 className="title">Confirm Delete</h5>
				<div className="tab-content">
					<div className="tab-pane active" id="personal" role="tabpanel">
						<p>Are you sure you want to delete selected User</p>
					</div>
					{/* .tab-pane */}
				</div>
				<div className="col-12 mt-4">
					<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
						<li>
							<div
								onClick={()=> handleAllDelete()}
								className="btn btn-lg btn-primary"
							>
								{
									deleteLoading ? <Spinnar /> : 'Delete Admin'
								}
								
							</div>
						</li>
						<li>
							<div
								onClick={()=> handleClose()}
								className="clipboard-init link link-light"
							>
								Cancel
							</div>
						</li>
					</ul>
				</div>
				{/* .tab-content */}
			</div>
		</Modal>
)}
	</>

  );
}
