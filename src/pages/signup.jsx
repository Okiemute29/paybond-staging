import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import _route from '../constants/routes';
import Spinnar from '../component/spinnar'

export default function SignUp() {
	const [showPassword, setShowPassword] = useState(false)
	var loading = false
	const [formData, setFormData] = useState({
		name: '',
		number: '',
		username: '',
		password: '',
		confirmPassword: ''
	})

	const handleSubmit = async (e)=>{
		e.preventDefault()
		console.log("submited")
	}

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
                          <h5 className="nk-block-title auth-title">Welcome to PayBond</h5>
                          <div className="nk-block-des">
                            <p className='auth-descript'>
							Complete the sign up to get started
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* .nk-block-head */}
                      <form onSubmit={handleSubmit} className="auth-form ">
						
						<div className='row gy-4 mb-4'>
							<div className="col-sm-6">
								<div className="form-group">
								<label className="form-label auth-label" htmlFor="name">Full Name</label>
								<div className="form-control-wrap">
									<input 
										type="text" 
										className="form-control form-control-lg auth-field" 
										id="name" 
										placeholder="e.g Paul Okoro"
										value={formData.name}
										onChange={(e)=> setFormData(prv => ({...prv, name: e.target.value}))}
										required 
									/>
								</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
								<label className="form-label auth-label" htmlFor="tel">Phone Number</label>
								<div className="form-control-wrap">									
									<input 
										type="tel"
										className="form-control form-control-lg auth-field" 
										id="tel" 
										placeholder="e.g 0801 234 5678 901"
										value={formData.number}
										onChange={(e)=> setFormData(prv => ({...prv, number: e.target.value}))}
										required 
									/>
								</div>
								</div>
							</div>
						</div>
						<div className='row gy-4 mb-4'>
							<div className="col-sm-6">
								<div className="form-group">
								<label className="form-label auth-label" htmlFor="email">E-mail</label>
								<div className="form-control-wrap">
									<input 
										type="email" 
										className="form-control form-control-lg auth-field" 
										id="email" 
										placeholder="e.g Paul Okoro" 
										value={formData.username}
										onChange={(e)=> setFormData(prv => ({...prv, username: e.target.value}))}
										required
									/>
								</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group ">
								<label className="form-label auth-label" htmlFor="password">Create Password</label>
								<div className="form-control-wrap">	
								<div
									className="form-icon form-icon-right passcode-switch lg"
									onClick={()=> setShowPassword(prv => !prv)}
								>
									<em className={`con-show icon ni ${showPassword ? 'ni ni-eye-off-fill' : 'ni-eye-fill'} `} />
								</div>								
									<input
										type={`${showPassword ? 'text' : 'password'}`}
										name="password"
										className="form-control form-control-lg auth-field" 
										id="password" 
										placeholder="Create a 4 digit password" 
										value={formData.password}
										onChange={(e)=> setFormData(prv => ({...prv, password: e.target.value}))}
										required
									/>
								</div>
								</div>
							</div>
						</div>
						<div className='row gy-4 mb-4'>
							<div className="col-sm-6">
								<div className="form-group">
								<label className="form-label auth-label" htmlFor="password">Confirm Password</label>
								<div className="form-control-wrap">		
								<div
									className="form-icon form-icon-right passcode-switch lg"
									onClick={()=> setShowPassword(prv => !prv)}
								>
									<em className={`con-show icon ni ${showPassword ? 'ni ni-eye-off-fill' : 'ni-eye-fill'} `} />
								</div>							
									<input
										type={`${showPassword ? 'text' : 'password'}`}
										name="password"
										className="form-control form-control-lg auth-field" 
										id="password" 
										placeholder="confirm your 4 digit password" 
										value={formData.confirmPassword}
										onChange={(e)=> setFormData(prv => ({...prv, confirmPassword: e.target.value}))}
										required
									/>
								</div>
								</div>
							</div>
						</div>
						<div className="form-note-s2 mb-4 text-black">
							By signing up, you agree to the<Link to={_route._admin_login} > Terms of Service </Link> and <Link to={_route._admin_login} >Privacy Policy </Link>
						</div>




                        {/* .form-group */}
                        <div className="form-group col-sm-6">
                          <button className="auth-btn btn btn-lg btn-primary btn-block">
                            {loading ? <Spinnar /> : 'Sign Up'}
                          </button>
                        </div>
                      </form>
                      <div className="form-note-s2 pt-4 text-black">
						Already have and account? <Link to={_route._admin_login} >Log In</Link>
                      </div>
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
