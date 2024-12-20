

export default function SectionFour() {


	return ( 
	<>
		<div className="nk-content bg-white py-5">
			<div className="container-fluid my-auto">
				<div className="nk-content-inner ">
					<div className="nk-content-body ">
						<div className="nk-block-head nk-block-head-sm mt-4">
							<h5 className="nk-block-title my-4 mx-auto auth-title">Frequently Asked Questions (FAQs)</h5>
							<div className=" w-md-80 mt-5 service-gallery gap-4 mx-auto">
							<div className="accordion w-100" id="accordionExample">
								<div className="accordion-item">
									<h2 className="accordion-header">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										What is PayBond?  
									</button>
									</h2>
									<div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<strong>PayBond is a platform for paying bills such as airtime, TV subscriptions, and electricity services, offering convenience and luxury.</strong> 
										{/* <strong>PayBond is a platform for paying bills such as airtime, TV subscriptions, and electricity, and betting services, offering convenience and luxury.</strong>  */}
									</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									Why should I choose PayBond?  
									</button>
									</h2>
									<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<strong>PayBond offers secure payments, automated wallet funding, excellent customer service, ease of use, a user-friendly interface, and competitive commission rates for resellers.</strong> 
									</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
									What services does PayBond support? 
										</button>
									</h2>
									<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<ul>
											<li> Airtime: MTN, Airtel, GLO, 9mobile  
											</li>
											<li>TV: DSTV, GOTV, StarTimes  </li>
											<li>Electricity: BEDC  </li>
											{/* <li>Betting: 1xBet, Kings Bet, Spoty Bet </li> */}
										</ul>
									</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
									How does PayBond ensure secure payments?  

									</button>
									</h2>
									<div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<strong>PayBond uses end-to-end encryption to protect sensitive customer data during transactions.</strong> 
									</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
										Can I track my account activity? 
									</button>
									</h2>
									<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<strong>Yes, you can view balances, transaction history, and retrieve tokens or receipts with a single click.
										</strong>
									</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
									Who can use PayBond?
									</button>
									</h2>
									<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<strong>PayBond is designed for individuals, resellers, and agents who need to make quick and secure payments for services like airtime, utility bills, and more.
										</strong>
									</div>
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
