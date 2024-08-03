import ButtonSection from "../buttonsection";




export default function SectionOne() {


	return ( 
	<>
		<div className="nk-content abt-sectionone-bg ">
			<div className="container-fluid my-auto h-100">
				<div className="nk-content-inner h-100">
					<div className="nk-content-body h-100">
						<div className="nk-block-head nk-block-head-sm mt-4 h-100">
							<div className="nk-block-between h-100">
								<div className='landing-section flex-column flex-md-row h-100'>
									<div className='text-black d-flex flex-column align-items-center align-items-md-start  justify-content-center col-12 col-md-6'>
										<h1 className='my-5 sec-title'>We offer the best <br/>Solution for your <br/>Utilities </h1>
										<ButtonSection />
									</div>
									<div className='col-12  mt-5 mt-md-0 col-md-6'>
										{/* <div className='widget-container p-1 p-lg-3  ms-auto'>
											<Card 
												icon={phone}
												text="Airtime"
											/>
											<Card 
												icon={wifi}
												text="Data"
											/>
											<Card 
												icon={electricity}
												text="Electricity"
											/>
											<Card 
												icon={tv}
												text="Cable TV"
											/>
											<Card 
												icon={betting}
												text="Betting"
											/>
											<Card 
												icon={grocery}
												text="Groceries"
											/>
											
										</div> */}

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
