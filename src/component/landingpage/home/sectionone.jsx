
import phone from '../../../assets/images/phone_in_talk.svg'
import wifi from '../../../assets/images/wifi.svg'
import electricity from '../../../assets/images/electricity.svg'
import tv from '../../../assets/images/tv.svg'
import betting from '../../../assets/images/sports_soccer.svg'
import grocery from '../../../assets/images/local_grocery_store.svg'
import Card from '../sectionone/card';
import ButtonSection from '../buttonsection'
import _route from '../../../constants/routes'


export default function SectionOne() {


	return ( 
	<>
		<div className="nk-content sectionone-bg ">
			<div className="container-fluid my-auto h-100">
				<div className="nk-content-inner h-100">
					<div className="nk-content-body h-100">
						<div className="nk-block-head nk-block-head-sm mt-4 h-100">
							<div className="nk-block-between h-100">
								<div className='landing-section flex-column flex-md-row h-100'>
									<div className='text-black d-flex flex-column align-items-center align-items-md-start  justify-content-center col-12 col-md-6'>
										<h1 className='my-5 sec-title'>Pay bills, Enjoy <br/> Luxury, all at <br/><span className='text-paybond'> your Convenience</span></h1>
										<ButtonSection />
									</div>
									<div className='col-12  mt-5 mt-md-0 col-md-6'>
										<div className='widget-container p-1 p-lg-3  ms-auto'>
											<Card 
												icon={phone}
												text="Airtime"
												route={_route._airtime}
											/>
											<Card 
												icon={wifi}
												text="Data"
												route={_route._data}
											/>
											<Card 
												icon={electricity}
												text="Electricity"
												route={_route._electricity}
											/>
											<Card 
												icon={tv}
												text="Cable TV"
												route={_route._cable}
											/>
											<Card 
												icon={betting}
												text="Betting"
												route={_route._betting}
											/>
											<Card 
												icon={grocery}
												text="Groceries"
												route={_route._groceries}
											/>
											
										</div>

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
