import InputField from "../common/input"
import { useState } from "react";

export default function Profile() {
	const [formData, setFormData] = useState({
	  name: "",
	  phone: "",
	  username: "",
	  avatar: "",
	});

	
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const rawValue = value.replace(/[^\d]/g, ''); // Remove non-numeric characters
		console.log(rawValue);
		setFormData((prv) => ({ ...prv, [name]: rawValue }));
	  };


  return (
	<>
		<div id="profile-setting" className="tab-container">
			<h6 className="mt-4">Personal Information</h6>
			<p className="setting-sub-title">
			What do you want to do today?
			</p>
			<form
			action="/settings"
			method="post"
			className="auth-form px-3 py-4 rounded-4"
			>
			{/* .form-group */}
			<div className="form-group">
				<InputField 
				label="Name"
				name="name"
				type="text"
				placeholder="Paul Okoro"
				value={formData.name}
				change={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<InputField 
				label="Email"
				name="username"
				type="email"
				placeholder="iampaulokoro@gmail.com"
				value={formData.username}
				change={handleInputChange}
				/>
			</div>
			{/* .form-group */}
			<div className="form-group">
				<InputField 
				label="Phone Number"
				name="phone"
				type="tel"
				placeholder="+23481000000"
				value={formData.phone}
				change={handleInputChange}
				/>
			</div>
			<div className="mt-4 btn-container">
				<button className="delete-acct-btn w-100 bg-paybond text-white active-btn">
				Save Changes
				</button>
			</div>
			</form>
		</div>
	</>
  )
}
