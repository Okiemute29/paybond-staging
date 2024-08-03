import { useEffect, useState } from "react";
import Modal from "../../helpers/modal";
import Spinnar from "../../helpers/spinnar";
import { SelectItem } from '../../helpers/selectitem'
import { Link, useNavigate } from "react-router-dom";
import _route from "../../constants/routes";
import useGetAllAgent from "../../hooks/staff/usegetagent";
import useDeleteAgent from "../../hooks/staff/usedeleteagent";
import emptyState from '../../assets/images/oops.png'
import Skeleton from "../skeletons/skeleton";
import Profile from "../data/profile";
import TwoCharacterComponent from "../../helpers/twocharactercomponent";


export default function AgentTableList({dashboard, setList}) {
	const {getAllAgent, data, loading} = useGetAllAgent()
	const {deleteAgent, data: deleteData, loading: deleteLoading} = useDeleteAgent()
	const [showDeleteModal, setDeleteModal] = useState(false)
	const [showDeleteAllModal, setDeleteAllModal] = useState(false)
	const {handleSelectAllChecked, handleEachInvoice, selectedItem} = SelectItem()
	const [deleteId, setDeleteId] = useState(null)
	const navigate = useNavigate()
	const handleGetAllAgent = async ()=>{
		await getAllAgent()
	}

	useEffect(()=>{
		handleGetAllAgent()
	}, [deleteData])
	
	const handleClose =()=>{
		setDeleteModal(false)
		setDeleteAllModal(false)
		setDeleteId(null)
	}

	
	useEffect(()=>{
		setList && setList(data.length)
	}, [data])



	const handleDelete = async ()=>{
		console.log(deleteId)
		await deleteAgent(deleteId) && handleClose()
	}

	// const handleAllDelete = async ()=>{
	// 	console.log(selectedItem)
	// 	handleClose()
	// }


	return ( 
	<>
		{dashboard 
		?
		
			loading 
			?
				[1,2,3,4,5].map((element, index)=>{
					return (
						<div key={index} className="agent-list">
							<div  style={{width: '75%'}} className=" nk-activity-item px-0 ">
								<div className="nk-activity-media user-avatar border-0 bg-transparent agent-logo">
									<Skeleton type='avatar' />
								</div>
								<div className="nk-activity-data agent-name">
									<p className="label w-100 text-truncate text-black fw-medium mb-0">
										<Skeleton type='text' />
									</p>
									<span className="time agent-email text-truncate fw-medium"><Skeleton type='text' /></span>
								</div>
							</div>
							<div style={{width: '15%'}}>
								<em className="icon ni ni-chevron-right arrow-size"></em>
							</div>
						</div>
					)
				})
			:
			data.length < 1 ?
			
				<div className='agent-emptystate-container'>
					<img src={emptyState} alt='no item found' />
					<p>No Agent</p>
				</div>
			:
			data.slice(0, 5).map((agent, index) => {
				
				return (
					<Link to={`${_route._admin_agent}/${agent._id}`} key={agent._id} className="agent-list">
						<div  style={{width: '75%'}} className=" nk-activity-item px-0 ">
							<div className="nk-activity-media user-avatar agent-logo">
							{
									agent?.avatar ?
									
									<img
									src={Profile[+agent.avatar - 1].name || ''}
									alt="avatar"
									/>
									:									
									<span><TwoCharacterComponent data={`${agent.firstname} ${agent.lastname}`} /> </span>
								}
							</div>
							<div className="nk-activity-data agent-name">
								<p className="label w-100 text-truncate text-black fw-medium mb-0">
									{`${agent.firstname} ${agent.lastname}`}
								</p>
								<span className="time agent-email text-truncate fw-medium">{agent.username}</span>
							</div>
						</div>
						<div style={{width: '15%'}}>
							<em className="icon ni ni-chevron-right arrow-size"></em>
						</div>
					</Link>
				);
			})
		
		:
			<div className="table-container px-2 h-100 mx-1 mx-sm-2">
				<div className="nk-tb-list is-separate tab_contaner mt-n2">
				<div className="nk-tb-item nk-tb-head nk-tb-head-dash">
					{/* <div class="nk-tb-col"><span>Order No.</span></div> */}
					<div className="nk-tb-col">
						<div className="custom-control custom-control-sm custom-checkbox notext">
							{!data || data.length === 0 &&<>
								<input
									type="checkbox"
									className="custom-control-input selectAll"
									id='all-01'
									onChange={(e) =>handleSelectAllChecked(e)}
									/>
									<label
									className="custom-control-label"
									htmlFor='all-01'
								/>
							</>}
						</div>
					</div>
					<div className="nk-tb-col">
					<span>Full Name</span>
					</div>
					<div className="nk-tb-col">
					<span>Email</span>
					</div>
					<div className="nk-tb-col tb-col-sm">
					<span>Phone Number</span>
					</div>
					<div className="nk-tb-col tb-col-md">
					<span>Status</span>
					</div>
					<div className="nk-tb-col">
					<span>Country</span>
					</div>
					<div className="nk-tb-col nk-tb-col-tools">
					<ul className="nk-tb-actions gx-1">
						<li>
						{/* <div className="drodown me-n1">
							<span
							className="dropdown-toggle btn btn-icon more-cus btn-trigger"
							data-bs-toggle="dropdown"
							>
							<em className="icon ni ni-more-v" />
							<i class="bi bi-three-dots-vertical"></i>
							</span>
							<div className="dropdown-menu dropdown-menu-end">
							<ul className="link-list-opt no-bdr">
								<li className="delete-all-user">
								<span>
									<em className="icon ni ni-trash" />
									<span>Delete Users</span>
								</span>
								</li>
							</ul>
							</div>
						</div> */}
						</li>
					</ul>
					</div>
				</div>

				
				{
					loading 
					?
						[1,2,3,4,5].map((element, index)=>{
							return (
								<div key={index} className="nk-tb-item nk-tb-item-dash">
									<div className="nk-tb-col nk-tb-col-check">
										<div className="custom-control custom-control-sm custom-checkbox notext">
											<Skeleton type='text' />
										</div>
									</div>
									<div className="nk-tb-col">
									<span className="tb-sub table-name">
										
										<div
										className="user-avatar"
										style={{
											background: 'transparent',
											backgroundPosition: "center",
											backgroundSize: "cover",
										}}
										>
											<Skeleton type='avatar' />
										</div>
										<p className="user-name ms-1 w-100 text-truncate">
											<Skeleton type='text' />
										</p>
									</span>
									</div>
									<div className="nk-tb-col">
										<span className="tb-sub text-truncate">
											<Skeleton type='text' />
										</span>
									</div>
									<div className="nk-tb-col tb-col-sm">
										<span className="tb-sub text-truncate">
											<Skeleton type='text' />
										</span>
									</div>
									<div className="nk-tb-col tb-col-md">
									<span className="tb-sub text-primary text-truncate">
										<Skeleton type='text' />
									</span>
									</div>
									<div className="nk-tb-col">
									<span className="tb-lead text-truncate">
										<Skeleton type='text' />
									</span>
									</div>
									<div className="nk-tb-col nk-tb-col-tools">
										<Skeleton type='text' />
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
										<p>No Agent</p>
									{/* </div>
								</div> */}
							</div>
						</div>
					</div>
					:
					data.map((agent, index) => {
						return (
						<Link to={`${_route._admin_agent}/${agent._id}`} key={agent._id} className="nk-tb-item nk-tb-item-dash">
							<div onClick={(e)=> { e.stopPropagation()}} className="nk-tb-col nk-tb-col-check">
							<div className="custom-control custom-control-sm custom-checkbox notext">
								<input
								type="checkbox"
								className="custom-control-input each_invoice"
								id={agent._id}
								onChange={(e) =>handleEachInvoice(e)}
								/>
								<label
								className="custom-control-label"
								htmlFor={agent._id}  
								/>
							</div>
							</div>
							<div className="nk-tb-col">
							{/* <span className="tb-sub">#95954</span> */}
							<span className="tb-sub table-name">
								<span className="user-avatar sm">
								{
									agent?.avatar ?
									
									<img
									src={Profile[+agent.avatar - 1].name || ''}
									alt="avatar"
									/>
									:									
									<span><TwoCharacterComponent data={`${agent.firstname} ${agent.lastname}`} /> </span>
								}
								</span>
								{/* <span className="user-info"> */}
								<p className="user-name ms-1 text-truncate">
								{`${agent.firstname} ${agent.lastname}`}
								</p>
								{/* </span> */}
							</span>
							</div>
							<div className="nk-tb-col">
							<span className="tb-sub text-truncate">
								{agent.username}
							</span>
							</div>
							<div className="nk-tb-col tb-col-sm">
							<span className="tb-sub text-truncate">
								{agent.phone_no}
							</span>
							</div>
							<div className="nk-tb-col tb-col-md">
							<span className="tb-sub text-primary text-truncate">
								{agent.permission}
							</span>
							</div>
							<div className="nk-tb-col">
							<span className="tb-lead text-truncate">
								{agent.country}
							</span>
							</div>
							<div onClick={(e)=> { e.preventDefault();e.stopPropagation()}} className="nk-tb-col nk-tb-col-tools">
							<ul className="nk-tb-actions gx-1">
								<li>
								<div className="drodown me-n1">
									<span
									className="dropdown-toggle btn more-cus btn-icon btn-trigger"
									data-bs-toggle="dropdown"
									>
									<em className="icon ni ni-more-v" />
									</span>
									<div className="dropdown-menu dropdown-menu-end">
									<ul className="link-list-opt no-bdr">
										<li onClick={()=> navigate(`${_route._admin_agent}/${agent._id}`)} data-id={agent._id} className="view-user">
										<span>
											<em className="icon ni ni-eye" />
											<span>View Agent</span>
										</span>
										</li>
										<li onClick={()=> {console.log(agent._id); setDeleteId(agent._id); setDeleteModal(true)}}  data-id={agent._id} className="delete-user">
										<span>
											<em className="icon ni ni-trash" />
											<span>Delete Agent</span>
										</span>
										</li>
									</ul>
									</div>
								</div>
								</li>
							</ul>
							</div>
						</Link>
						);
					})
				}




				
				</div>
			</div>
		}

		
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

		
{/* {showDeleteAllModal && (
		<Modal handleClose={handleClose} showModal={showDeleteModal} >
			<div className="modal-body modal-body-lg">
				<h5 className="title">Confirm Delete</h5>
				<div className="tab-content">
					<div className="tab-pane active" id="personal" role="tabpanel">
						<p>Are you sure you want to delete selected User</p>
					</div>
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
			</div>
		</Modal>
)} */}
	</>

  );
}
