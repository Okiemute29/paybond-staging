import { useEffect, useState, useRef } from "react";
import AuthService from "../../services/user/auth";
import { useDispatch } from 'react-redux'
import { setUser } from "../../redux/authreducer"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import _route from "../../constants/routes";

const useSignUpUser = () => {
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch()
	const navigate = useNavigate()
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const verifyEmail = async (data) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await AuthService.verifyUser({email: data.username}, source.current );
			console.log("signup res", res)

            if(!res) {
				window.NioApp.Toast('An error occured', "warning");
            }else{
                setloading(false);
                if(res.status === 200 || res.status === 201){
					window.NioApp.Toast(res.data.message, "success");
                    localStorage.setItem("paybondsignup", JSON.stringify(data));
                    navigate(_route._register_otp)
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

    return {verifyEmail, loading};
}
 
export default useSignUpUser;