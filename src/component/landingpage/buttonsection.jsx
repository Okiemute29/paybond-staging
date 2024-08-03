
import { Link } from 'react-router-dom'
import _route from '../../constants/routes'

export default function ButtonSection() {
  return (
	<>
		<div className="d-flex column-gap-3" >
			<Link to={_route._login} className="btn fs-4 px-5 py-3 border-paybond " type="submit"><span className="  text-paybond">Login</span></Link>
			<Link to={_route._signup} className="btn fs-4 px-5 py-3 border-paybond text-white btn-primary" type="submit">Sign Up</Link>
		</div>
	</>
  )
}
