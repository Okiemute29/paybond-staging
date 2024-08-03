import myApi from "../../common/interceptors/apiinterceptor";
import { _getAllCryptoTransaction, _upDateCryptoTransaction, _getAllUnlimitedCryptoTransaction } from "../../../network/network"

const Transactionservices = {
	getAllCryptoTransaction: async (id, source) => {
	  return await myApi.post(`${_getAllCryptoTransaction}`, {user: id}, {
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });
  
	},
	getAllUnlimitedCryptoTransaction: async (source) => {
	  return await myApi.get(`${_getAllUnlimitedCryptoTransaction}`, {
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });
  
	},
	upDateCrytoTransaction: async (data, id, source) => {
		return await myApi.patch(`${_upDateCryptoTransaction}/${id}`, data, {
		cancelToken: source.token,
		}).then(async (res) => {
		return res;
		});

	},


}

export default Transactionservices