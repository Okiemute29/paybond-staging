import { useEffect, useState, useRef } from "react";
import AuthService from "../../services/user/auth";
import { useDispatch } from 'react-redux'
import { setUser } from "../../redux/authreducer"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import _route from "../../constants/routes";

const useTransactionPin = () => {
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch()
	const navigate = useNavigate()
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const transactionPin = async (data) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await AuthService.transactionPin(data, source.current);
            if(!res) {
				window.NioApp.Toast('An error occured', "warning");
            }else{
                setloading(false);
                if(res.status === 200 || res.status === 201){
                    await dispatch(setUser(res.data.result))
					window.NioApp.Toast(res.data.message, "success");
                    navigate(_route._dashboard)
                }
            }
            
        } catch (error) {
            setloading(false);
            if (axios.isCancel(error)) {
				console.log("Request canceled:", error.message);
            } else {
				const message = error?.response?.data?.message || error.message;
				console.error("Error:", error);
				window.NioApp.Toast(message, "warning");
            }
        }
       
    }
    
    useEffect(()=>{
        return () =>{ 
            if (source.current != null) source.current.cancel()
        }
    }, [])

    return {transactionPin, loading};
}
 
export default useTransactionPin;

