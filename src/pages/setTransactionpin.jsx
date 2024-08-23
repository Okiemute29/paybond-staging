import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import _route from '../constants/routes';
import Spinnar from '../component/spinnar'
import OtpInput from 'react-otp-input';
import signUpImg from "../assets/images/signup-img.svg"

export default function SetTransactionPin() {
    const [pin, setPin] = useState("");
    const [confirmPin, setConfirmPin] = useState("");
	var loading = false
	const handleSubmit = async (e)=>{
		e.preventDefault()
		console.log("submited")
	}

	console.log(pin)

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
                  <div className="nk-block nk-block-middle nk-auth-body mb-3">
                    <div className='overflw-scroll overflow-scroll-hidden'>
					<div className="brand-logo auth-brand">
                      <Link to={_route._admin_dashboard} className="logo-link">
                        
                        <p className="auth">Sign Up</p>
                      </Link>
                    </div>
                    <div className="nk-auth-form overflow-scroll-hidden">
                      <div className="nk-block-head">
                        <div className="nk-block-head-content">
                          <h5 className="nk-block-title auth-title">Set Transaction Pin</h5>
                          <div className="nk-block-des">
                            <p className='auth-descript'>
							Do not disclose this transaction pin to anyone.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* .nk-block-head */}
                      <form onSubmit={handleSubmit} className="auth-form ">
						
						<div className='row gy-4 mb-4'>
							<div className="">
								<div className="form-group">
								<div className="otp-cont">
									<OtpInput
										value={pin}
										onChange={setPin}
										numInputs={4}
										separator={<span> </span>}
										renderInput={(inputProps, index) => <input key={index} {...inputProps} />}
										inputStyle={{
										width: '4rem',
										height: '4rem',
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
						<div className='row gy-4 mb-4'>
							<div className="">
								<div className="form-group">
								<label className="form-label auth-label" htmlFor="email">Confirm transaction PIN</label>
								<div className="otp-cont">
									<OtpInput
										value={confirmPin}
										onChange={setConfirmPin}
										numInputs={4}
										separator={<span> </span>}
										renderInput={(inputProps, index) => <input key={index} {...inputProps} />}
										inputStyle={{
										width: '4rem',
										height: '4rem',
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
				  <img className="img-fitting" src={signUpImg} alt='img' />
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
