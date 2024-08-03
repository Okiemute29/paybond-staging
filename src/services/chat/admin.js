import myApi from "../common/interceptors/apiinterceptor";
import { _getAllChat } from "../../network/network"

const Adminservices = {
	getAllChat: async (data, source) => {
	  return await myApi.get(_getAllChat, {
		params: data,
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });
  
	},


}

export default Adminservices