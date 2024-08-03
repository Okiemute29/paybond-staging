import mtn from "../../../assets/images/mtn.png"
import airtel from "../../../assets/images/airtel.png"
import glo from "../../../assets/images/glo.png"
import mobil from "../../../assets/images/9mobil.png"
import dstv from "../../../assets/images/dstv.png"
import gotv from "../../../assets/images/gotv.png"
import stattime from "../../../assets/images/stattime.png"
import BEDC from "../../../assets/images/BEDC.png"
import AEDC from "../../../assets/images/AEDC-BRAND.png"
import ecedc from "../../../assets/images/ecedc.png"
import eedc from "../../../assets/images/eedc.png"
import PHED from "../../../assets/images/PHED.png"
import ibedc from "../../../assets/images/ibedc.png"
import sporty from "../../../assets/images/sporty.png"
import mb from "../../../assets/images/mb.png"
import bet9ja from "../../../assets/images/bet9ja.png"
import xbet from "../../../assets/images/xbet.png"
import kingsbet from "../../../assets/images/kingsbet.png"
import ServiceProviderCard from "../sectionthree/card";


export default function SectionThree() {


	return ( 
	<>
		<div className="nk-content py-5">
			<div className="container-fluid my-auto">
				<div className="nk-content-inner ">
					<div className="nk-content-body ">
						<div className="nk-block-head nk-block-head-sm mt-4">
							<h5 className="nk-block-title my-4 mx-auto auth-title">Why Choose PayBond</h5>
							<p className="card-text w-75 text-center mx-auto">With our customers in mind, PayBond has forged partnerships that ensures convenience, teaming up with Service Providers within coverage areas for seamless making it seamless service delivery.</p>
							<div className="w-80 mt-5 service-gallery mx-auto">							
							<ServiceProviderCard icon={mtn} background="mtn" />							
							<ServiceProviderCard icon={airtel} background="airtel" />							
							<ServiceProviderCard icon={glo} />							
							<ServiceProviderCard icon={mobil} />							
							<ServiceProviderCard icon={dstv} />							
							<ServiceProviderCard icon={gotv} />							
							<ServiceProviderCard icon={stattime} />							
							<ServiceProviderCard icon={BEDC} />							
							<ServiceProviderCard icon={AEDC} />							
							<ServiceProviderCard icon={eedc} />							
							<ServiceProviderCard icon={ecedc} />							
							<ServiceProviderCard icon={PHED} />							
							<ServiceProviderCard icon={ibedc} background="ibedc" />							
							<ServiceProviderCard icon={sporty} background="sporty" />							
							<ServiceProviderCard icon={mb} />							
							<ServiceProviderCard icon={bet9ja} />							
							<ServiceProviderCard icon={xbet} background="xbet" />							
							<ServiceProviderCard icon={kingsbet} background="kingbet" />



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
