
import headPhone from '../../../assets/images/headset_mic.png'
import tourchApp from '../../../assets/images/touch_app.png'
import archive from '../../../assets/images/archive.png'
import checkCircle from '../../../assets/images/check_circle.png'
import VerifiedUser from '../../../assets/images/verified_user.png'
import giftCard from '../../../assets/images/card_giftcard.png'


export default function SectionTwo() {


	return ( 
	<>
		<div className="nk-content bg-white py-5">
			<div className="container-fluid my-auto">
				<div className="nk-content-inner ">
					<div className="nk-content-body ">
						<div className="nk-block-head nk-block-head-sm mt-4">
							<h5 className="nk-block-title my-4 auth-title">Why Choose PayBond</h5>
							<div className="row row-cols-1 row-cols-md-3 g-4">
							
							<div className="card shodowles-card">
								<div className="card-inner">
									<div className='card-img-cont'>
										<img src={headPhone}  alt="Effective Customer Service"/>
									</div>
									<h5 className="card-title text-black my-3 fw-semibold">Effective Customer Service</h5>
									{/* <h6 className="card-subtitle mb-2">Card subtitle</h6> */}
									<p className="card-text">Our dedicated team of support is always available to respond to all requests across all channels</p>
									
								</div>
							</div>
							<div className="card shodowles-card">
								<div className="card-inner">
									<div className='card-img-cont'>
										<img src={archive}  alt="Automated Funding"/>
									</div>
									<h5 className="card-title text-black my-3 fw-semibold">Automated Funding</h5>
									{/* <h6 className="card-subtitle mb-2">Card subtitle</h6> */}
									<p className="card-text">Your wallet is swiftly funded immediately payment is received. With PayBond, there are no hassles.</p>
									
								</div>
							</div>
							<div className="card shodowles-card">
								<div className="card-inner">
									<div className='card-img-cont'>
										<img src={VerifiedUser}  alt="Secure Payments"/>
									</div>
									<h5 className="card-title text-black my-3 fw-semibold">Secure Payments</h5>
									{/* <h6 className="card-subtitle mb-2">Card subtitle</h6> */}
									<p className="card-text">Payments across all our platforms are end-to-end secure, assuring the security and safety of sensitive customer data.</p>
									
								</div>
							</div>
							<div className="card shodowles-card">
								<div className="card-inner">
									<div className='card-img-cont'>
										<img src={checkCircle}  alt="Ease"/>
									</div>
									<h5 className="card-title text-black my-3 fw-semibold">Ease</h5>
									{/* <h6 className="card-subtitle mb-2">Card subtitle</h6> */}
									<p className="card-text">Our self-service option makes it easy for you to perform simple transaction in simple steps.</p>
									
								</div>
							</div>
							<div className="card shodowles-card">
								<div className="card-inner">
									<div className='card-img-cont'>
										<img src={tourchApp}  alt="Friendly Interface"/>
									</div>
									<h5 className="card-title text-black my-3 fw-semibold">Friendly Interface</h5>
									{/* <h6 className="card-subtitle mb-2">Card subtitle</h6> */}
									<p className="card-text">Keep track of all your account balances in one view, check history, retrieve token/receipt with a single click!</p>
									
								</div>
							</div>
							<div className="card shodowles-card">
								<div className="card-inner">
									<div className='card-img-cont'>
										<img src={giftCard}  alt="Competitive Commission Rate"/>
									</div>
									<h5 className="card-title text-black my-3 fw-semibold">Competitive Commission Rate</h5>
									{/* <h6 className="card-subtitle mb-2">Card subtitle</h6> */}
									<p className="card-text">We offer market friendly rates that is attractive to resellers and agents.</p>
									
								</div>
							</div>


							</div>
								
						{/* .nk-block-between */}
						</div>
						{/* .nk-block */}
					</div>
				</div>
			</div>
		</div>


	</>

  );
}
