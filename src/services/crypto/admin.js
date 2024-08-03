import myApi from "../common/interceptors/apiinterceptor";
import { _postCrypto, _getAllCrypto, _upDateCrypto, _deleteCrypto } from "../../network/network"

const Adminservices = {
  getAllCrypto: async (source) => {
    return await myApi.get(_getAllCrypto, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  PostCrypto: async (data, source) => {
    return await myApi.post(_postCrypto, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  UpdateCrypto: async (data, id, source) => {
    return await myApi.patch(`${_upDateCrypto}/${id}`, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  DeleteCrypto: async (id, source) => {
    return await myApi.delete(`${_deleteCrypto}/${id}`, {
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