import { _billCategory, _billfromCategory, _verifybill, _paybill, _createCard } from "../../network/network"
import axios from "axios";
import myApi from "../common/interceptors/apiinterceptor";

const Airtimeservices = {
	getBillCategory: async (data, source) => {	  		
		return await myApi.get(`${_billCategory}/${data}`, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	},
	getBillFromCategory: async (data, source) => {	  		
		return await myApi.get(`${_billfromCategory}/${data}`, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	},
	postVerifyBill: async (data, source) => {	  		
		return await myApi.post(_verifybill, data, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	},
	postPayBill: async (data, source) => {	  		
		return await myApi.post(_paybill, data, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	},
	createCard: async (data, source) => {	  		
		return await myApi.post(_createCard, data, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	},

}

export default Airtimeservices