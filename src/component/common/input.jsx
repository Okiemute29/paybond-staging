import { useState } from "react"
import search from "../../assets/images/search-normal.svg"


export default function InputField({label, type, readOnly, name, placeholder, value, inputClass, change }) {
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
				{label && <label className='auth-label'>{label}</label>}
				<input
					type={`${showPassword ? 'text' : type}`}
					name={name}
					className={`form-control form-control-lg auth-field ${inputClass && inputClass}`}                              
					placeholder={placeholder}
					value={value}
					readOnly={readOnly}
					onChange={change}
					required
				/>
			</>
			:
			<>
				{label && <label className='auth-label'>{label}</label>}
				<input
					type={type}
					name={name}
					className={`form-control form-control-lg auth-field ${inputClass && inputClass}`}                              
					placeholder={placeholder}
					value={value}
					readOnly={readOnly}
					onChange={change}
					required
				/>
				{name?.toLowerCase() === "search" && <div className="search-icon" ><img src={search} alt="search" /></div> }
			</>
		}
	</>
  )
}
