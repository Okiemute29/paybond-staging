import myApi from "../../common/interceptors/apiinterceptor";
import { _getAllPerryPointTransaction, _upDatePerryPointTransaction, _getAllUnlimitedPerryPointTransaction } from "../../../network/network"

const Transactionservices = {
	getAllPerryPointTransaction: async (id, source) => {
	  return await myApi.post(`${_getAllPerryPointTransaction}`, {user: id}, {
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });
  
	},
	getAllUnlimitedPerryPointTransaction: async (source) => {
	  return await myApi.get(`${_getAllUnlimitedPerryPointTransaction}`, {
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });
  
	},
	upDatePerryPointTransaction: async (data, id, source) => {
		return await myApi.patch(`${_upDatePerryPointTransaction}/${id}`, data, {
		cancelToken: source.token,
		}).then(async (res) => {
		return res;
		});

	},


}

export default Transactionservices