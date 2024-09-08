import email from "../../../assets/images/cont_email.svg"
import call from "../../../assets/images/cont_call.svg"
import location from "../../../assets/images/cont_location.svg"
import React, { useState } from 'react'
import Spinnar from '../../spinnar'

export default function SectionTwo() {
	var loading = false
	const [formData, setFormData] = useState({
		username: '',
		password: ''
	})

	const handleSubmit = async (e)=>{
		e.preventDefault()
		console.log("submited")
	}

  

  return (
    <>
      <div className="nk-content">
        <div className="contact-section my-5 flex-column flex-md-row ">
          <div className="container-fluid my-auto h-100">
            <div className="nk-content-inner h-100">
              <div className="nk-content-body h-100">
                <div className="nk-block-head nk-block-head-sm mt-4 h-100">
                  <div className="nk-block-between h-100">
                    <div className="landing-section align-items-end flex-column flex-md-row h-100">
                      <div className="col-12 p-3 mt-5 mt-md-0 col-md-6">
                        <h5 className="nk-block-title mb-5 auth-title">
                          Get in Touch, Seamless Support Awaits!
                        </h5>
                        <ul className="list-unstyled">
							<li className="text-black d-flex justify-content-start align-item-center mb-2">
								<span className="social-widget me-1 bg-paybond-green">
									<img src={email} alt="email" />
								</span>
								help@paybond.com
							</li>
							<li className="text-black d-flex justify-content-start align-item-center mb-2">
								<span className="social-widget me-1 bg-paybond-green">
									<img src={call} alt="email" />
								</span>
								0801 234 5678 901
							</li>
							<li className="text-black d-flex justify-content-start align-item-center mb-2">
								<span className="social-widget me-1 bg-paybond-green">
									<img src={location} alt="email" />
								</span>
								22 Mabiaku Road, GRA, Warri, Delta-State, Nigeria
							</li>
						</ul>

                      </div>
                      <div className="col-12 p-3 mt-5 mt-md-0 col-md-6">
						<div className="contact-form-container">
							
							<div className="nk-auth-form my-auto overflow-scroll-hidden">
								<div className="nk-block-head pb-0">
									<div className="nk-block-head-content">
										<h6 className="nk-block-title my-4 fs-3 text-center text-black">Feedback Form</h6>
									</div>
								</div>
								{/* .nk-block-head */}
								<form onSubmit={handleSubmit} className="auth-form">
									<div className="form-group">
										<div className="form-control-wrap">
											<label className='auth-label'>Email Address</label>
											<input
											type="text"
											name="name"
											className="form-control form-control-lg auth-field"                              
											placeholder="Enter your full name"
											value={formData.username}
											onChange={(e)=> setFormData(prv => ({...prv, username: e.target.value}))}
											required
											/>
										</div>
									</div>
									{/* .form-group */}
									<div className="form-group">
										<div className="form-control-wrap">
											
											<label className='auth-label'>Email Address</label>
											<input
											type='email'
											name="email"
											className="form-control form-control-lg auth-field"
											id="password"
											placeholder="Enter your email address"
											value={formData.password}
											onChange={(e)=> setFormData(prv => ({...prv, password: e.target.value}))}
											required
											/>
										</div>
									</div>
									<div className="form-group">
										<div className="form-control-wrap">
											
											<label className='auth-label'>Your Message</label>
											<textarea
											name="message"
											className="form-control form-control-lg auth-field"
											id="message"
											placeholder="Enter your message"
											value={formData.password}
											onChange={(e)=> setFormData(prv => ({...prv, password: e.target.value}))}
											required
											/>
										</div>
									</div>
									{/* .form-group */}
									<div className="form-group">
									<button className="auth-btn btn btn-lg btn-primary btn-block">
										{loading ? <Spinnar /> : 'Send Message'}
									</button>
									</div>
								</form>
								{/* <div className="form-note-s2 pt-4">
									Don't have an account? <a href="/signup">Sign Up</a>
								</div> */}
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
      </div>
    </>
  );
}
