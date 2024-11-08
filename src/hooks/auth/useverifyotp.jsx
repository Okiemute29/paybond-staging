import { useEffect, useState, useRef } from "react";
import AuthService from "../../services/user/auth";
import { useDispatch } from 'react-redux'
import { setUser } from "../../redux/authreducer"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import _route from "../../constants/routes";
import useSignUpUser from "./usesignup";

const useVerifyOTP = () => {
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch()
	const navigate = useNavigate()
	const {signUpUser, loading: signupLoading} = useSignUpUser()
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const verifyOTP = async (data) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
			setloading(true);
			const signupData = JSON.parse(localStorage.getItem("paybondsignup"));
			const otpData = {
				email: signupData.username,
				otp: data
			}
			console.log("otpData", otpData)
            const res = await AuthService.verifyOTP(otpData, source.current );
			console.log("signup res", res)

            if(!res) {
				window.NioApp.Toast('An error occured', "warning");
            }else{
                if(res.status === 200 || res.status === 201){
					// window.NioApp.Toast(res.data.message, "success");
					await signUpUser()
                }
                setloading(false);
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

    return {verifyOTP, loading};
}
 
export default useVerifyOTP;