import { useEffect, useState, useRef } from "react";
import Adminservices from "../../services/agent/admin";
import _route from '../../constants/routes'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const usePostAgent = () => {
    const [loading, setloading] = useState(false);
    const [data, setData] = useState(null)
	const navigate = useNavigate()
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const postAgent = async (data) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await Adminservices.postAgent(data, source.current.token );

            if(!res) {

				window.NioApp.Toast('An error occured', "warning");
            }else{
                setloading(false);
                if(res.status === 200){
					setData(res.data.result)
					// window.NioApp.Toast(res.data.message, "success");
                    return true
                }
                if(res.status === 201){
					console.log(res.data)
					setData(res.data.result)
					// window.NioApp.Toast(res.data.message, "success");
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
                    console.log(error)
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

    return {postAgent, data, loading};
}
 
export default usePostAgent;