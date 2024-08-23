import { Link } from "react-router-dom"


export default function Card ({icon, text, route}) {
  return (
	<>
	<div className="col-6 col-lg-4 p-3">
		<Link to={route} className='widget'>
			<img src={icon} alt={text} />
			<p>{text}</p>
		</Link>
	</div>
	  
	</>
  )
}

 
