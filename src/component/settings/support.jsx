import call from "../../assets/images/cont_call.svg"
import email from "../../assets/images/cont_email.svg"

export default function Support() {
	return (
	  <>
		<div id="help" className="tab-container hidden">
		  <h6 className="mt-4">Help Desk</h6>
		  <p className="setting-sub-title">
			These settings helps you keep your account secure
		  </p>
		  {/* <div className="bg-white px-3 py-4 setting-inner-container flex-column rounded-4 d-flex justify-content-start align-items-start"> */}
		  <div className="bg-white px-3 py-4 setting-inner-container rounded-4 d-flex justify-content-between align-items-center mb-3">
			<div className="w-available d-flex justify-content-start align-items-center paybound-gap-1">
				<div className="support-cont bg-red">
					<img src={email} alt="email" />
				</div>
				<p className="text-black security-title mb-0">help@paybond.com</p>
			  
			</div>
		  </div>
		  <div className="bg-white px-3 py-4 setting-inner-container rounded-4 d-flex justify-content-between align-items-center mb-3">
				<div className="w-available d-flex justify-content-start align-items-center paybound-gap-1">
					<div className="support-cont bg-green">
						<img src={call} alt="call" />
					</div>
					<p className="text-black security-title mb-0">0801 234 5678 901</p>
				
				</div>
			
		  </div>
		</div>
	  </>
	);
  }
  