import { useEffect, useState, useRef } from "react";
import Adminservices from "../../services/agent/admin";
import _route from '../../constants/routes'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const useUpdateUser = () => {
    const [loading, setloading] = useState(false);
	const user = useSelector((state) => state.auth.user)
    const [data, setData] = useState([])
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const UpdateUser = async (data, id) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await Adminservices.UpdateAppUser( data, id, source.current.token );
            if(!res) {

				window.NioApp.Toast('An error occured', "warning");
            }else{
                setloading(false);
                if(res.status === 200){
					window.NioApp.Toast(res.data.message, "success");
					setData(res.data.result)
                    return true
                }
                if(res.status === 201){
					console.log(res.data)
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