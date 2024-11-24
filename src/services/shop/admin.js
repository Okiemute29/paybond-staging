import { _getAllShopItems, _addToCart, _getCart, _removeFromCart, _dropFromCart, _getState, _getFav, _addToFavourite, _removeFromFav } from "../../network/network"
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
	getState: async (source) => {	  		
		return await myApi.get(_getState, {
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
	},
	getFromCart: async ( source) => {	  		
		return await myApi.get(_getCart, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	},
	removeFromCart: async ( data, source) => {	  		
		return await myApi.delete(`${_removeFromCart}/${data}`, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	},
	dropFromCart: async ( data, source) => {	  		
		return await myApi.delete(_dropFromCart, {
			cancelToken: source.token,
			data: data,
		  }).then(async (res) => {
			return res;
		  });
	},
	getFromFavourite: async ( source) => {	  		
		return await myApi.get(_getFav, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	},
	addToFavourite: async ( data, source) => {	  		
		return await myApi.post(_addToFavourite, data, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	},
	removeFromFavourite: async ( data, source) => {	  		
		return await myApi.delete(`${_removeFromFav}/${data}`, {
			cancelToken: source.token,
		  }).then(async (res) => {
			return res;
		  });
	},

}

export default Airtimeservices