import myApi from "../common/interceptors/apiinterceptor";
import { _getAllSetting, _updateSetting, _postSetting, _deleteSetting } from "../../network/network"

const Adminservices = {
	postSetting: async (data, source) => {
	  return await myApi.post(_postSetting, data, {
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });
  
	},
	getAllSetting: async (source) => {
	  return await myApi.get(_getAllSetting, {
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });
  
	},
	UpdateSetting: async (data, source) => {
	  return await myApi.patch(`${_updateSetting}`, data, {
	//   headers: {
	// 	  'Content-Type': 'multipart/form-data',
	// 	  },
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });
  
	},
	deleteSetting: async (id, source) => {
		return await myApi.delete(`${_deleteSetting}/${id}`, {
		cancelToken: source.token,
		}).then(async (res) => {
		return res;
		});

	},



}

export default Adminservices