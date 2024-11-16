import { useEffect, useState, useRef } from "react";
import Transactionservices from "../../services/orders/admin";
import _route from '../../constants/routes'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useGetAllOrder = () => {
    const [loading, setloading] = useState(false);
    const [data, setData] = useState([])
	const navigate = useNavigate()
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const getAllOrder = async () => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await Transactionservices.getAllOrder(source.current.token );

            if(!res) {
				window.NioApp.Toast('An error occured', "warning");
            }else{
				setloading(false)
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
					if(error?.response?.status === 401){
						if(error?.response?.data?.message?.toLowerCase() === "jwt expired"){
							navigate(_route._login)
						}
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

    return {getAllOrder, data, loading};
}
 
export default useGetAllOrder;