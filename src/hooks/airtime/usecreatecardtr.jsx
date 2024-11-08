import { useEffect, useState, useRef } from "react";
import Airtimeservices from "../../services/airtime/admin";
import _route from '../../constants/routes'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import usePostPayBill from "./usepostbill";

const useCreateCardTransaction = () => {
    const [loading, setloading] = useState(false);
    const [data, setData] = useState([])
	const {postPayBill, data: billData, loading: billLoading} = usePostPayBill()
	const navigate = useNavigate()
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const createCardTransaction = async (cardData, billData) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await Airtimeservices.createCard(cardData, source.current.token );
console.log("res", res)
            if(!res) {

				window.NioApp.Toast('An error occured', "warning");
            }else{
                setloading(false);
                if(res.status === 200 || res.status === 201){
					// setData(res.data.result)
					const postBillData = {
						...billData,
						transaction_id: res.data.result._id
					}
					await postPayBill(postBillData)
					// window.NioApp.Toast(res.data.message, "success");
                    return true
                }
            }
            
        } catch (error) {
            setloading(false);
            if (axios.isCancel(error)) {
                console.log(error);
            }else{
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

    return {createCardTransaction, data, loading};
}
 
export default useCreateCardTransaction;