import myApi from "../common/interceptors/apiinterceptor";
import { _getAllAgent, _getAllUser, _updateAgent, _UpdateUser, _getSingleAgent, _postAgent, _getSingleUser, _deleteAgent } from "../../network/network"

const Adminservices = {
	postAgent: async (data, source) => {
	  return await myApi.post(_postAgent, data, {
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });
  
	},
	getAllAgent: async (source) => {
	  return await myApi.get(_getAllAgent, {
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });
  
	},
	UpdateUser: async (data, id, source) => {
	  return await myApi.patch(`${_updateAgent}/${id}`, data,  {
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });
  
	},
	getSingleAgent: async (id, source) => {
		return await myApi.get(`${_getSingleAgent}/${id}`, {
		cancelToken: source.token,
		}).then(async (res) => {
		return res;
		});

	},
	deleteAgent: async (id, source) => {
		return await myApi.delete(`${_deleteAgent}/${id}`, {
		cancelToken: source.token,
		}).then(async (res) => {
		return res;
		});

	},
	getAllUser: async (source) => {
		return await myApi.get(_getAllUser, {
		cancelToken: source.token,
		}).then(async (res) => {
		return res;
		});

	},
	UpdateAppUser: async (data, id, source) => {
		return await myApi.patch(`${_UpdateUser}/${id}`, data,  {
			cancelToken: source.token,
		}).then(async (res) => {
			return res;
		});

		},
	getSingleUser: async (id, source) => {
		return await myApi.get(`${_getSingleUser}/${id}`, {
		cancelToken: source.token,
		}).then(async (res) => {
		return res;
		});

	},

//   forgotPassword: async (email, source) => {
//     return await myApi.post(_forgotPassword, { username: email }, {
//       cancelToken: source.token
//     })

//   },

//   forgotPasswordOtp: async (email, otp, source) => {
//     return await myApi.post(_forgotPasswordOtp, { username: email, otp: otp }, {
//       cancelToken: source.token
//     })

//   },

//   setNewPassword: async (password, token, source) => {

//     return await myApi.post(_setnewpassword, { newpassword: password }, {
//       cancelToken: source.token
//     })

//   },


}

export default Adminservices