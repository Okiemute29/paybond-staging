
import { Link } from "react-router-dom";
import sidepic from "../../assets/images/404.svg"
import _route from "../../constants/routes";


export default function Error() {	



	return ( 
	<>
		<div className="nk-content ">
		<div className="container-fluid">
			<div className="nk-content-inner">
			<div className="nk-content-body">
				{/* .nk-block */}
				<div className="nk-block">
				<div className="row g-gs justify-content-center">
					<div className="">
						<div className="card bg-transparent">
							<div className="nk-ecwg nk-ecwg2">
							<div className="card-inner flex-grow-1 d-flex flex-column p-0">
								<div className="col-12 rounded-5 overflow-hidden">
									<img className="" src={sidepic} alt="airtime" />
								</div>
				<div className="nk-block-head nk-block-head-sm mt-4">
				<div className="nk-block-center">
					<div className="nk-block-head-content">
						<h4 className="page-title cus-page-title text-paybond col-12 text-center">Page not found</h4>
						
						<div className="nk-block-des text-soft tb-ff text-center mt-3">
						<Link to={_route._dashboard} className="bg-paybond text-white border-0 rounded-3 py-2 px-5">
						Dashboard
						</Link>
						</div>
					</div>
					{/* .nk-block-head-content */}
				</div>
				{/* .nk-block-between */}
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
