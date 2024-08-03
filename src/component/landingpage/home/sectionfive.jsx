
import appleStore from '../../../assets/images/applestore.png'
import playStore from "../../../assets/images/playstore.png"


export default function SectionFive() {


	return ( 
	<>
		<div className="nk-content bg-white ">
			<div className="container-fluid my-auto h-100">
				<div className="nk-content-inner h-100">
					<div className="nk-content-body h-100">
						<div className="nk-block-head nk-block-head-sm mt-4 h-100">
							<div className="nk-block-between h-100">
								<div className='donload-section mx-auto flex-column-reverse flex-md-row bg-paybond h-100'>
									<div className='text-black col-12 mt-3 mmt-md-0 col-md-6'>
										<h2 className='my-4 sec-title text-white'>Download PayBond Mobile App</h2>
										<p className='text-faintwhite'>PayBond offers you seamless access to all your service providers for utilities, 
										bills payments and online transactions. You will enjoy luxury and comfort.</p>
										<div className="d-flex mt-4 column-gap-3" >
											<button className=" fs-4 py-1 py-md-3 store-btn " type="submit">
												<img src={appleStore} alt='' />
												
											</button>
											<button className=" fs-4 py-1 py-md-3 store-btn " type="submit">
												<img src={playStore} alt='' />
											</button>
										</div>
									</div>
									<div className='col-12 col-md-6'>
										<ing src="" alt="" />

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
