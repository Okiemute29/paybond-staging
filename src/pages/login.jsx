import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import _route from '../constants/routes';
import Spinnar from '../component/spinnar'
import InputField from '../component/common/input';
import loginImg from "../assets/images/login-img.svg"

export default function Login() {
	var loading = false
	const [formData, setFormData] = useState({
		username: '',
		password: ''
	})

	const handleSubmit = async (e)=>{
		e.preventDefault()
		console.log("submited")
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

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
							<InputField 
								label="E-mail"
								name="username"
								type="email"
								placeholder="e.g paulokoro@gmail.com"
								value={formData.username}
								change={handleInputChange}
							/>
                          </div>
                        </div>
                        {/* .form-group */}
                        <div className="form-group">
                          <div className="form-control-wrap">
							<InputField 
								label="Create Password"
								name="password"
								type="password"
								placeholder="Create a 4 digit password"
								value={formData.password}
								change={handleInputChange}
							/>
							
							
                          </div>
                          <div className="form-label-group">
                            <div className="custom-control custom-checkbox">
                            </div>
                            <Link
								to="#"
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
                      <div className="form-note-s2 pt-4 text-black">
						Don't have an account? <Link to={_route._signup} className='text-paybond'  >Sign Up</Link>
                      </div>
                    </div>
					</div>

                    {/* .nk-block */}
                  </div>
                </div>
                {/* .nk-split-content */}
                <div className="nk-split-content p-0 nk-split-stretch nk-auth-image">
                  <div className="auth-image-container w-100">
                    <img className="img-fitting" src={loginImg} alt='login-img' />
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
