import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import _route from '../constants/routes';
import Spinnar from '../component/spinnar'
import OtpInput from 'react-otp-input';

export default function RegisterOtp() {
	var loading = false
    const [OTP, setOTP] = useState("");

	const handleSubmit = async (e)=>{
		e.preventDefault()
		console.log("submited")
	}

	console.log(OTP)

  return (
    <>
      <div className="nk-app-root">
        {/* main @s */}
        <div className="nk-main ">
          <span></span>
          {/* wrap @s */}
          <div className="nk-wrap auth-container nk-wrap-nosidebar">
            {/* content @s */}
            <div className="nk-content ">
              <div className="auth-split nk-split nk-split-page nk-split-md">
                <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container">
                  <div className="nk-block nk-block-middle nk-auth-body ">
                    <div className='w-90'>
					<div className="brand-logo auth-brand">
                      <Link to={_route._admin_dashboard} className="logo-link">
                        
                        <p className="auth">Sign Up</p>
                      </Link>
                    </div>
                    <div className="nk-auth-form overflow-scroll-hidden">
                      <div className="nk-block-head">
                        <div className="nk-block-head-content">
                          <h5 className="nk-block-title auth-title">Enter OTP</h5>
                          <div className="nk-block-des">
                            <p className='auth-descript'>
							Enter 5 digit number sent to email 
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* .nk-block-head */}
                      <form onSubmit={handleSubmit} className="auth-form ">
						
						<div className='row gy-4 mb-4'>
							<div className="col-sm-6">
								<div className="form-group">
								<div className="">
									<OtpInput
										value={OTP}
										onChange={setOTP}
										numInputs={5}
										separator={<span> </span>}
										renderInput={(inputProps, index) => <input key={index} {...inputProps} />}
										inputStyle={{
										width: '5rem',
										height: '5rem',
										margin: '0 0.5rem',
										fontSize: '2rem',
										borderRadius: 4,
										background: '#EDEDED',
										border: '1px solid #D9D9D9'
										}}
									/>
								</div>
								</div>
							</div>
						</div>



                        {/* .form-group */}
                        <div className="form-group col-sm-6">
                          <button className="auth-btn btn btn-lg btn-primary btn-block">
                            {loading ? <Spinnar /> : 'Continue'}
                          </button>
                        </div>
                      </form>
                    </div>
					</div>
                  </div>
                </div>
                {/* .nk-split-content */}
                <div className="nk-split-content p-0 nk-split-stretch nk-auth-image">
                  <div className="auth-image-container w-100">
                    <img className="img-fitting" src="/assets/images/auth/signup-img.svg" />
                  </div>
                </div>
                {/* .nk-split-content */}
              </div>
              {/* .nk-split */}
            </div>
            {/* wrap @e */}
          </div>
          {/* content @e */}
        </div>
        {/* main @e */}
      </div>
    </>
  );
}
