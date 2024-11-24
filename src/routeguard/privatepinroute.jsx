import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'
import _route from "../constants/routes";
// import { useAuthContext } from "../hooks/auth/useauthcontext";

export default function PrivatePinRoute() {
     const user = useSelector((state) => state.auth.user)
	 console.log(user)
	 console.log((user.pin !== null || user.pin !== undefined))
	 console.log((user.pin === null || user.pin === undefined))
     return (user.pin === null || user.pin === undefined) ? <Navigate to={_route._transaction_pin} /> :  <Outlet />;
}

