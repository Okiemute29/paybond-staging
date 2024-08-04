import { useState } from "react"
export default function InputField({label, type, name, placeholder, value, change }) {
	const [showPassword, setShowPassword] = useState(false)
  return (
	<>
	  
		{ type === "password" ?
			<>
			<div
			className="form-icon form-icon-right passcode-switch lg"
			onClick={()=> setShowPassword(prv => !prv)}
			>
			<em className={`con-show icon ni ${showPassword ? 'ni ni-eye-off-fill' : 'ni-eye-fill'} `} />
			</div>
				<label className='auth-label'>{label}</label>
				<input
					type={`${showPassword ? 'text' : type}`}
					name={name}
					className="form-control form-control-lg auth-field"                              
					placeholder={placeholder}
					value={value}
					onChange={change}
					required
				/>
			</>
			:
			<>
				<label className='auth-label'>{label}</label>
				<input
					type={type}
					name={name}
					className="form-control form-control-lg auth-field"                              
					placeholder={placeholder}
					value={value}
					onChange={change}
					required
				/>
			</>
		}
	</>
  )
}
