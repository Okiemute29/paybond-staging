import React, { useState } from 'react'
import conected from '../../../assets/images/stay-connected.png'
import Spinnar from '../../spinnar'


export default function SectionSix() {
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
		<div className="nk-content p-0">
			<div className='contact-section flex-column flex-md-row '>
				
				<div className='connect-img  col-12 col-md-6'>
					<img src={conected} alt="stay updated" />

				</div>
				<div className='px-5 col-12 d-flex py-5 col-md-6'>
                    <div className="nk-auth-form w-80 my-auto w-lg-50  overflow-scroll-hidden">
                      <div className="nk-block-head pb-0">
                        <div className="nk-block-head-content">
							<h6 className="nk-block-title my-4 fs-3 auth-title">Stay Update with PayBond</h6>
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
                        {/* .form-group */}
                        <div className="form-group">
                          <button className="auth-btn btn btn-lg btn-primary btn-block">
                            {loading ? <Spinnar /> : 'Subscribe'}
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


	</>

  );
}
