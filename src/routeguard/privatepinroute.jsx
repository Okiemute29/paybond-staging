import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'
import _route from "../constants/routes";
// import { useAuthContext } from "../hooks/auth/useauthcontext";

export default function PrivatePinRoute() {
     const user = useSelector((state) => state.auth.user)
     return user.pin !== null ? <Outlet /> : <Navigate to={_route._transaction_pin} />;
}

