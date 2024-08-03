import myApi from "../../common/interceptors/apiinterceptor";
import { _getAllCardTransaction, _upDateCardTransaction, _getAllUnlimitedCardTransaction} from "../../../network/network"

const Transactionservices = {
	getAllCardTransaction: async (id, source) => {
	  return await myApi.post(`${_getAllCardTransaction}`, {user: id}, {
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });
  
	},
	getAllUnLimitedCardTransaction: async (source) => {
	  return await myApi.get(`${_getAllUnlimitedCardTransaction}`, {
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });
  
	},
	upDateCardTransaction: async (data, id, source) => {
		return await myApi.patch(`${_upDateCardTransaction}/${id}`, data, {
		cancelToken: source.token,
		}).then(async (res) => {
		return res;
		});

	},


}

export default Transactionservices