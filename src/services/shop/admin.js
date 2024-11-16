import { _getAllShopItems, _addToCart } from "../../network/network"
import axios from "axios";
import myApi from "../common/interceptors/apiinterceptor";

const Airtimeservices = {
	getAllShop: async (source) => {	  		
		return await myApi.get(_getAllShopItems, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	},
	addToCart: async ( data, source) => {	  		
		return await myApi.post(_addToCart, data, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	}

}

export default Airtimeservices