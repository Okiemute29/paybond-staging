import { Link, NavLink } from "react-router-dom";
import _route from "../../constants/routes";


export default function _landingheader() {

	

	return (
		<div className="nk-header nk-header-fixed is-light">
			<div className="container-fluid">
				<div className="nk-header-wrap my-1">
					<nav className="navbar w-100 bg-bondwhite py-3 navbar-expand-lg">
						<div className="container-fluid">
							<Link className="navbar-brand" to="#">
								<img className="logo-dark logo-img" src="/assets/images/logo.svg" srcSet="/assets/images/logo.svg 2x" alt="logo-dark" />
							</Link>
							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
							<ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
								<li className="nav-item">
								<NavLink to={_route._landing_page} className={(isActive) => "nav-link " + (isActive.isActive ? "active text-paybond" : "text-grey")} >Home</NavLink>
								</li>
								<li className="nav-item">
								<NavLink to={_route._about_us} className={(isActive) => "nav-link " + (isActive.isActive ? "active text-paybond" : "text-grey")}>About</NavLink>
								</li>
								<li className="nav-item">
								<NavLink to={_route._contact_us} className={(isActive) => "nav-link " + (isActive.isActive ? "active text-paybond" : "text-grey")} >Contact</NavLink>
								</li>
							</ul>
							<div className="d-flex column-gap-3" >
							<Link to={_route._login} className="btn px-4 border-paybond " type="submit"><span className=" text-paybond">Login</span></Link>
							<Link to={_route._signup} className="btn px-4 border-paybond text-white btn-primary" type="submit">Sign Up</Link>
							</div>
							</div>
						</div>
					</nav>
				</div>{/* .nk-header-wrap */}
			</div>{/* .container-fliud */}
		</div>
	);
}