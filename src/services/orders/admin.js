import { _billTransaction, _groceriesTransaction } from "../../network/network"
import myApi from "../common/interceptors/apiinterceptor";

const Airtimeservices = {
	getAllOrder: async (source) => {	  		
		return await myApi.get(_billTransaction, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	},
	getAllGroceriesOrder: async (source) => {	  		
		return await myApi.post(_groceriesTransaction, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	}

}

export default Airtimeservices