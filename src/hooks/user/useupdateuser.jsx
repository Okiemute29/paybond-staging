import { useEffect, useState, useRef } from "react";
import Adminservices from "../../services/user/auth";
import _route from '../../constants/routes'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from "../../redux/authreducer";

const useUpdateUser = () => {
    const [loading, setloading] = useState(false);
	const user = useSelector((state) => state.auth.user)
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const UpdateUser = async (data) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await Adminservices.UpdateAppUser( data, user._id, source.current.token );
            if(!res) {

				window.NioApp.Toast('An error occured', "warning");
            }else{
                setloading(false);
                if(res.status === 200 || res.status === 201){
					console.log("updated user", res.data.result)
					console.log("user", user)
					const userUpdate = {
						...user,
						fullname: res.data.result.fullname,
						phone_no: res.data.result.phone_no,
						
					}
					console.log("userUpdate", userUpdate)
					window.NioApp.Toast(res.data.message, "success");
                    await dispatch(setUser(userUpdate))
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
					window.NioApp.Toast(error?.response?.data?.message, "warning");
                }else{
					window.NioApp.Toast('An error occured', "warning");
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
 
export default useUpdateUser;