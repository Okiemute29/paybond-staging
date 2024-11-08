import DashboardAnalysis from "../../component/cards/dashboardanalysis";
import { Link } from "react-router-dom";
import _route from "../../constants/routes";
import './admin.css'
import OrderTableList from "../../component/dashboard/userlist";
import phone from '../../assets/images/phone_in_talk.svg'
import wifi from '../../assets/images/wifi.svg'
import electricity from '../../assets/images/electricity.svg'
import tv from '../../assets/images/tv.svg'
import betting from '../../assets/images/sports_soccer.svg'
import grocery from '../../assets/images/local_grocery_store.svg'
import Card from '../../component/landingpage/sectionone/card';
import { useSelector } from 'react-redux'


export default function Dashboard() {
	const user = useSelector((state) => state.auth.user)


	return ( 
	<>
		<div className="nk-content ">
		<div className="container-fluid">
			<div className="nk-content-inner">
			<div className="nk-content-body">
				<div className="nk-block-head nk-block-head-sm mb-4 mt-4">
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
				<div className="row bg-white dashboard-card-analysis pb-5 g-gs">
					
					<DashboardAnalysis
						title="Total User Wallet Balance"
						value="10,361,457"
						wallet
						// accept=" 6,512,224.384"
						// decline='33,611,719'
					/>
					<DashboardAnalysis
						title="Total Groceries Transactions"
						value="12,932,900"
						// accept="1,663,230"
						// decline='1,423,550'
					/>
					<DashboardAnalysis
						title="Total Paybills Transaction"
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
					<div className={`col-md-6`}>
						<div style={{maxWidth: 'none'}} className='widget-container p-0'>
							<Card 
								icon={phone}
								text="Airtime"
								route={_route._airtime}
								dashboard
							/>
							<Card 
								icon={wifi}
								text="Data"
								route={_route._data}
								dashboard
							/>
							<Card 
								icon={electricity}
								text="Electricity"
								route={_route._electricity}
								dashboard
							/>
							<Card 
								icon={tv}
								text="Cable TV"
								route={_route._cable}
								dashboard
							/>
							<Card 
								icon={betting}
								text="Betting"
								route={_route._betting}
								dashboard
							/>
							<Card 
								icon={grocery}
								text="Groceries"
								route={_route._groceries}
								dashboard
							/>
							
						</div>
					{/* .card */}
					</div>
					<div className={`col-md-6`}>
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
