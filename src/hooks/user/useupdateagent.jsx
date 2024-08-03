import { useEffect, useState, useRef } from "react";
import Adminservices from "../../services/agent/admin";
import _route from '../../constants/routes'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from "../../redux/authreducer";
import { useNavigate } from "react-router-dom";

const useUpdateAgent = () => {
    const [loading, setloading] = useState(false);
	const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const [data, setData] = useState([])
	const navigate = useNavigate()
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const UpdateUser = async (data, id) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await Adminservices.UpdateUser( data, id, source.current.token );
            if(!res) {

				window.NioApp.Toast('An error occured', "warning");
            }else{
                setloading(false);
                if(res.status === 200){
					const userUpdate = {
						...user,
						lastname: res.data.result.lastname,
						firstname: res.data.result.firstname,
						phone_no: res.data.result.phone_no ,
						address: res.data.result.address ,
						country: res.data.result.country ,
						state: res.data.result.state ,
						city: res.data.result.city ,
					}
					window.NioApp.Toast(res.data.message, "success");
                    await dispatch(setUser(userUpdate))
                    localStorage.setItem("user", JSON.stringify(userUpdate));
					window.NioApp.Toast(res.data.message, "success");
					setData(res.data.result)
                    return true
                }
                if(res.status === 201){
					console.log(res.data)
					const userUpdate = {
						...user,
						lastname: res.data.result.lastname,
						firstname: res.data.result.firstname,
						phone_no: res.data.result.phone_no ,
						address: res.data.result.address ,
						country: res.data.result.country ,
						state: res.data.result.state ,
						city: res.data.result.city ,
					}
					window.NioApp.Toast(res.data.message, "success");
					console.log(userUpdate)
                    await dispatch(setUser({userUpdate}))
                    localStorage.setItem("user", JSON.stringify({userUpdate}));
					window.NioApp.Toast(res.data.message, "success");
					setData(res.data.result)
                    return true
                }
            }
            
        } catch (error) {
            setloading(false);
            if (axios.isCancel(error)) {
                console.log(error);
            } else {
                if(error.response){
                    console.log(error)
					if(error?.response?.data?.status === 401){
						navigate(_route._admin_login)
					}
					window.NioApp.Toast(error?.response?.data?.message, "warning");
                }else{
					window.NioApp.Toast(error?.response?.data?.message, "warning");
                }
            }
        }
       
    }
    
    useEffect(()=>{
        return () =>{ 
            if (source.current != null) source.current.cancel()
        }
    }, [])

    return {UpdateUser, data, loading};
}
 
export default useUpdateAgent;