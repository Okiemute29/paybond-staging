import { useEffect, useState, useRef } from "react";
import Airtimeservices from "../../services/airtime/admin";
import _route from '../../constants/routes'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const usePostPayBill = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();
    const CancelToken = axios.CancelToken;
    const source = useRef();

    const postPayBill = async (data) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
        }
        
        try {
            setLoading(true);
            setError(null);
            setIsSuccess(false);
            const res = await Airtimeservices.postPayBill(data, source.current.token);

            if (!res) {
                throw new Error('An error occurred');
            }

            if (res.status === 200) {
                setData(res.data.result);
                setIsSuccess(true);
                return { success: true, data: res.data.result };
            }
        } catch (error) {
            setLoading(false);
            setError(error);
            setIsSuccess(false);

            if (axios.isCancel(error)) {
                console.log(error);
                return { success: false, error: 'Request cancelled' };
            }

            if (error.response?.status === 401 && 
                error.response?.data?.message?.toLowerCase() === "jwt expired") {
                navigate(_route._login);
            }

            const errorMessage = error.response?.data?.message || error.message;
            window.NioApp.Toast(errorMessage, "warning");
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        return () => {
            if (source.current != null) source.current.cancel();
        };
    }, []);

    return { postPayBill, data, loading, error, isSuccess };
};
 
export default usePostPayBill;