import conected from '../../../assets/images/who-we-are.png'


export default function SectionTwo() {


	return ( 
	<>
		<div className="nk-content bg-white">
			<div className='contact-section my-5 flex-column flex-md-row '>
				
			<div className="container-fluid my-auto h-100">
				<div className="nk-content-inner h-100">
					<div className="nk-content-body h-100">
						<div className="nk-block-head nk-block-head-sm mt-4 h-100">
							<div className="nk-block-between h-100">
								<div className='landing-section align-items-start flex-column flex-md-row h-100'>
									<div className='text-black d-flex flex-column align-items-center align-items-md-end pe-md-5 justify-content-center col-12 col-md-6'>
										<div className='connect-img rounded-5 overflow-hidden col-12 col-md-9'>
											<img src={conected} alt="stay updated" />

										</div>
									</div>
									<div className='col-12  mt-5 mt-md-0 col-md-6'>
							<h5 className="nk-block-title mb-5 auth-title">Who we are</h5>
							<p className="card-text mx-auto">PayBond is a reliable, safe and secure platform that allows you make payments both local and international with ease and convenience, partnering with major vendors and service providers in the country to ensure that you enjoy a seamless purchase experience. Whether you’re buying on our mobile app or website, you can be rest assured of doing it conveniently and reliably.</p>
											
											

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
								
		</div>


	</>

  );
}
