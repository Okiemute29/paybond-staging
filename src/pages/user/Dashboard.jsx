import DashboardAnalysis from "../../component/cards/dashboardanalysis";
import { Link } from "react-router-dom";
import _route from "../../constants/routes";
import './admin.css'
import OrderTableList from "../../component/dashboard/userlist";
import AgentTableList from "../../component/agent/agenttablelist";
import { useSelector } from 'react-redux'


export default function Dashboard() {
	const user = useSelector((state) => state.auth.user)


	return ( 
	<>
		<div className="nk-content ">
		<div className="container-fluid">
			<div className="nk-content-inner">
			<div className="nk-content-body">
				<div className="nk-block-head nk-block-head-sm mt-4">
				<div className="nk-block-between">
					<div className="nk-block-head-content">
					<h4 className="page-title cus-page-title">Overview</h4>
					<div className="nk-block-des">
						<p>An overview of your account, Enjoy the experience.</p>
					</div>
					</div>
					{/* .nk-block-head-content */}
				</div>
				{/* .nk-block-between */}
				</div>
				{/* .nk-block-head */}
				<div className="nk-block">
				<div className="row g-gs">
					<DashboardAnalysis
						title="Total Approved Crypto Transactions"
						value="10,361,457"
						accept=" 6,512,224.384"
						decline='33,611,719'
					/>
					<DashboardAnalysis
						title="Total Approved Giftcard Transactions"
						value="12,932,900"
						accept="1,663,230"
						decline='1,423,550'
					/>
					<DashboardAnalysis
						title="Total User Wallet Balance"
						value="889,768"
						// increase="5"
						// width='3'
					/>
					{/* <DashboardAnalysis
					title="Basic Users"
					value="100"
					increase="-5"
					width='3'
					/> */}
				</div>
				{/* .row */}
				</div>
				{/* .nk-block */}
				<div className="nk-block">
				<div className="row g-gs">
					<div className={`col-md-12`}>
					<div className="card h-100">
						<div className="nk-ecwg nk-ecwg2">
						<div className="card-inner pe-0 ps-0">
							<div className="card-title-group mt-n1 mb-2 pe-3 pe-sm-4 ps-3 ps-sm-4">
							<div className="card-title">
								<h6 className="title card-title text-black">Orders</h6>
							</div>
							<Link to={_route._admin_orders} className="mb-0 text-primary">View All </Link>
							</div>
							<OrderTableList dashboard />
						</div>
						{/* .card-inner */}
						</div>
						{/* .nk-ecwg */}
					</div>
					{/* .card */}
					</div>
					{/* .col */}
					<div className="col-md-4">
						<div className="card h-100">
							<div className="nk-ecwg nk-ecwg2">
							<div className="card-inner flex-grow-1 d-flex flex-column pe-0 ps-0">
								<div className="card-title-group mt-n1 mb-2 pe-3 pe-sm-4 ps-3 ps-sm-4">
								<div className="card-title">
									<h6 className="title card-title text-black">
									Agents List
									</h6>
								</div>
								<Link to={_route._admin_agent} className="mb-0 text-primary">View All </Link>
								
								</div>
								<div className="mt-n2 flex-grow-1  px-3 px-sm-4">
									<AgentTableList dashboard />
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
