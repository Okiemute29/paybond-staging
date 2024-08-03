import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import _route from '../constants/routes';
import Spinnar from '../component/spinnar'

export default function Login() {
	const [showPassword, setShowPassword] = useState(false)
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
                    <div className=''>
					<div className="brand-logo auth-brand">
                      <Link to={_route._admin_dashboard} className="logo-link">
                        
                        <p className="auth">Login</p>
                      </Link>
                    </div>
                    <div className="nk-auth-form overflow-scroll-hidden">
                      <div className="nk-block-head">
                        <div className="nk-block-head-content">
                          <h5 className="nk-block-title auth-title">Welcome back!</h5>
                          <div className="nk-block-des">
                            <p className='auth-descript'>
							Hey you’re back, fill in your details to get back in 
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* .nk-block-head */}
                      <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                          <div className="form-control-wrap">
							<label className='auth-label'>E-mail</label>
                            <input
                              type="email"
                              name="email"
                              className="form-control form-control-lg auth-field"                              
                              placeholder="e.g paulokoro@gmail.com"
							  value={formData.username}
							  onChange={(e)=> setFormData(prv => ({...prv, username: e.target.value}))}
                              required
                            />
                          </div>
                        </div>
                        {/* .form-group */}
                        <div className="form-group">
                          <div className="form-control-wrap">
                            <div
                              className="form-icon form-icon-right passcode-switch lg"
							  onClick={()=> setShowPassword(prv => !prv)}
                            >
                              <em className={`con-show icon ni ${showPassword ? 'ni ni-eye-off-fill' : 'ni-eye-fill'} `} />
                            </div>
							<label className='auth-label'>Create Password</label>
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
                          <div className="form-label-group">
                            <div className="custom-control custom-checkbox">
                              {/* <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label auth-label"
                                htmlFor="customCheck1"
                              >
                                Remember Me
                              </label> */}
                            </div>
                            <Link
								to={_route._admin_login}
								className="link link-sm text-black"
                            >
                              Forgot Password?
                            </Link>
                          </div>
                        </div>
                        {/* .form-group */}
                        <div className="form-group">
                          <button className="auth-btn btn btn-lg btn-primary btn-block">
                            {loading ? <Spinnar /> : 'Log In'}
                          </button>
                        </div>
                      </form>
                      {/* <div className="form-note-s2 pt-4">
                        Don't have an account? <a href="/signup">Sign Up</a>
                      </div> */}
                    </div>
					</div>
					{/* <div className="nk-block m-5 ">
						<div className="nk-block-between">
							<ul className="nav nav-sm">
							<li className="nav-item">
								<Link className="nav-link text-primary" to="https://perrypays.co/terms-and-conditions/">Terms &amp; Condition</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-primary" to="https://perrypays.co/privacy-policy">Privacy Policy</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link text-primary" href="javascript:void(0)">Help</a>
							</li>
							</ul>
						</div>
						<div className="mt-3">
							<p>© {new Date().getFullYear()} Perrypays. Designed by <a href="https://carburant.io/" target="_blank" className='text-primary'>Carburant Technology</a></p>
						</div>
					</div> */}

                    {/* .nk-block */}
                  </div>
                </div>
                {/* .nk-split-content */}
                <div className="nk-split-content p-0 nk-split-stretch nk-auth-image">
                  <div className="auth-image-container w-100">
                    <img className="img-fitting" src="/assets/images/auth/login-img.svg" />
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
