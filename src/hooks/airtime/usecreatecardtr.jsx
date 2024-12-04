import { useEffect, useState, useRef } from "react";
import Airtimeservices from "../../services/airtime/admin";
import _route from '../../constants/routes'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import usePostPayBill from "./usepostbill";
import useCreateCheckOut from "../shop/usecreatecheckout";

const useCreateCardTransaction = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState({
        cardError: null,
        billError: null
    });
    const [isSuccess, setIsSuccess] = useState(false);
    
    const { postPayBill, loading: billLoading } = usePostPayBill();
    const {addToCheckOut, data: checkOutData, loading: checkOutLoading} = useCreateCheckOut();
    const navigate = useNavigate();
    const CancelToken = axios.CancelToken;
    const source = useRef();

    const createCardTransaction = async (cardData, billData, type) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
        }

        try {
            setLoading(true);
            setError({ cardError: null, billError: null });
            setIsSuccess(false);

            // First API call - Create Card Transaction
            const res = await Airtimeservices.createCard(cardData, source.current.token);
            
            if (!res) {
                throw new Error('An error occurred during card transaction');
            }

            if (res.status === 200 || res.status === 201) {
                // Second API call - Post Bill Payment
                const postBillData = {
                    ...billData,
                    transaction_id: res.data.result._id
                };
				var billResponse

				if(type === "grocery"){
					billResponse = await addToCheckOut(postBillData);
				}else{
					billResponse = await postPayBill(postBillData);
				}
                
                if (!billResponse.success) {
                    setError(prev => ({ ...prev, billError: billResponse.error }));
                    setIsSuccess(false);
                    window.NioApp.Toast('payment failed: ' + billResponse.error, "warning");
                    return false;
                }

                setData(billData);
                setIsSuccess(true);
                return true;
            }
        } catch (error) {
            setLoading(false);
            setIsSuccess(false);
            
            if (axios.isCancel(error)) {
                console.log(error);
                return false;
            }

            const errorMessage = error.response?.data?.message || error.message;
            setError(prev => ({ ...prev, cardError: errorMessage }));

            if (error.response?.status === 401 && 
                error.response?.data?.message?.toLowerCase() === "jwt expired") {
                navigate(_route._login);
            }

            window.NioApp.Toast(errorMessage, "warning");
            return false;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        return () => {
            if (source.current != null) source.current.cancel();
        };
    }, []);

    return { 
        createCardTransaction, 
        data, 
        loading: loading || billLoading || checkOutLoading,
        error,
        isSuccess
    };
};

export default useCreateCardTransaction;