import { _billTransaction } from "../../network/network"
import axios from "axios";
import myApi from "../common/interceptors/apiinterceptor";

const Airtimeservices = {
	getAllOrder: async (source) => {	  		
		return await myApi.get(_billTransaction, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	}

}

export default Airtimeservices