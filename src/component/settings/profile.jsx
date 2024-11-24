import InputField from "../common/input"
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import useUpdateUser from "../../hooks/user/useupdateuser";
import Spinnar from "../../helpers/spinnar";

export default function Profile() {
	const user = useSelector((state) => state.auth.user)
	const {UpdateUser, data, loading} = useUpdateUser()
	const [formData, setFormData] = useState({
	  fullname: "",
	  phone_no: "",
	  username: "",
	});

	
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value)
		const rawValue = value.replace(/[^\d]/g, ''); // Remove non-numeric characters
		console.log(rawValue);
		setFormData((prv) => ({ ...prv, [name]: rawValue }));
	};	
	const handlenameChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value)
		// const rawValue = value.replace(/[^\d]/g, ''); // Remove non-numeric characters
		console.log(value);
		setFormData((prv) => ({ ...prv, [name]: value }));
	};

	  useEffect(()=>{
		setFormData({
			fullname: user?.fullname,
			phone_no: user?.phone_no,
			username: user?.username,
		  })
	  }, [user])

	  const handleSubmitForm = async(e)=>{
		e.preventDefault()
		const upDatedData = {
			fullname: formData.fullname,
			phone_no: formData.phone_no
		}
		await UpdateUser(upDatedData)
	  }

console.log("user-pay", formData)
  return (
	<>
		<div id="profile-setting" className="tab-container">
			<h6 className="mt-4">Personal Information</h6>
			<p className="setting-sub-title">
			What do you want to do today?
			</p>
			<form
			onSubmit={handleSubmitForm}
			className="auth-form px-3 py-4 rounded-4"
			>
			{/* .form-group */}
			<div className="form-group">
				<InputField 
				label="Name"
				name="fullname"
				type="text"
				placeholder="Paul Okoro"
				value={formData.fullname}
				change={handlenameChange}
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
				readOnly
				/>
			</div>
			{/* .form-group */}
			<div className="form-group">
				<InputField 
				label="Phone Number"
				name="phone_no"
				type="tel"
				placeholder="+23481000000"
				value={formData.phone_no}
				change={handleInputChange}
				/>
			</div>
			<div className="mt-4 btn-container">
				<button className="delete-acct-btn w-100 bg-paybond text-white active-btn">
				{loading ? <Spinnar /> : "Save Changes"}
				</button>
			</div>
			</form>
		</div>
	</>
  )
}
