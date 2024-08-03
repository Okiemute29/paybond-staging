import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import _route from "../../constants/routes";
import appleStore from '../../assets/images/applestore.png'
import playStore from "../../assets/images/playstore.png"
import email from "../../assets/images/email.svg"
import instagram from "../../assets/images/insta.svg"
import twitter from "../../assets/images/twitter.svg"
import facebook from "../../assets/images/facebook.svg"
import youtube from "../../assets/images/youtube.svg"


export default function _footer({notlanding}) {
	console.log(notlanding)
	return (
		<div className={`nk-footer px-0 ${notlanding && "pt-0 bg-transparent"}`}>
			<div className="px-3 container-fluid">
				<div className="nk-footer-wrap">
				<div className={`container py-4 py-md-5 px-4 px-md-3 text-body-secondary ${notlanding ? "d-none" : ""} `}>
				<div className="row">
					<div className="col-lg-3 mb-3">
					<a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
					<img src={logo} alt="paybond" />
					</a>
					<ul className="list-unstyled small">
						<li className="text-faintwhite mb-2 text-faintwhite">22 Mabiaku Road,<br /> 
							GRA, Warri,<br />
							Delta-State,<br />
							Nigeria
						</li>
						<li className="text-faintwhite mb-2 social-container">
							<span className="social-widget">
								<img src={email} alt="email" />
							</span>
							<span className="social-widget">
								<img src={instagram} alt="email" />
							</span>
							<span className="social-widget">
								<img src={twitter} alt="email" />
							</span>
							<span className="social-widget">
								<img src={facebook} alt="email" />
							</span>
							<span className="social-widget">
								<img src={youtube} alt="email" />
							</span>

						</li>
					</ul>
					</div>
					<div className="col-6 col-lg-2 offset-lg-1 mb-3">
					<h5 className="text-green">Products</h5>
					<ul className="list-unstyled">
					<li className="text-faintwhite mb-2"><Link to={_route._landing_page}>Airtime</Link></li>
					<li className="text-faintwhite mb-2"><Link to={_route._landing_page}>Data</Link></li>
					<li className="text-faintwhite mb-2"><Link to={_route._landing_page}>Electricity</Link></li>
					<li className="text-faintwhite mb-2"><Link to={_route._landing_page}>Cable TV</Link></li>
					<li className="text-faintwhite mb-2"><Link to={_route._landing_page}>Groceries</Link></li>
					<li className="text-faintwhite mb-2"><Link to={_route._landing_page}>Airtime</Link></li>
					</ul>
					</div>
					<div className="col-6 col-lg-2 mb-3">
					<h5 className="text-green">Legal</h5>
					<ul className="list-unstyled">
					<li className="text-faintwhite mb-2"><Link to={_route._landing_page}>Privacy Policy</Link></li>
					<li className="text-faintwhite mb-2"><Link to={_route._landing_page}>Terms & Conditions</Link></li>
					</ul>
					</div>
					<div className="col-6 col-lg-2 mb-3">
					<h5 className="text-green">Company</h5>
					<ul className="list-unstyled">
					<li className="text-faintwhite mb-2"><Link to={_route._landing_page}>Home</Link></li>
					<li className="text-faintwhite mb-2"><Link to={_route._landing_page}>About</Link></li>
					<li className="text-faintwhite mb-2"><Link to={_route._landing_page}>Contact</Link></li>
					</ul>
					</div>
					<div className="col-6 col-lg-2 mb-3">
					<h6 className="text-white">Download PayBond Mobile App</h6>
					<ul className="list-unstyled">
						<li className="mb-2 mt-3">
							<button className=" fs-4  py-1 store-btn " type="submit">
								<img src={appleStore} alt='' />				
							</button>
						</li>
						<li className="mb-2 mt-3">
							<button className=" fs-4  py-1 store-btn " type="submit">
								<img src={playStore} alt='' />				
							</button>
						</li>
					</ul>
					</div>
				</div>
				</div>

				</div>
			</div>
			<div className={`nk-footer-copyright ${notlanding && "text-footer"}`}> © {new Date().getFullYear()}. PayBond All rights rerseved 
				 {/* <a href="https://carburant.io" target="_blank">Carburant.io</a> */}
			</div>
		</div>
	);
}
