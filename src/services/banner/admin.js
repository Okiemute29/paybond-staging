import myApi from "../common/interceptors/apiinterceptor";
import { _postBanner, _getAllBanner, _getSingleBanner, _updateBanner, _deleteBanner } from "../../network/network"

const Adminservices = {
  getAllBanner: async (source) => {
    return await myApi.get(_getAllBanner, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  PostBanner: async (data, source) => {
    return await myApi.post(_postBanner, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  getSingleBanner: async (id, source) => {
    return await myApi.get(`${_getSingleBanner}/${id}`, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  updateBanner: async (data, id, source) => {
    return await myApi.patch(`${_updateBanner}/${id}`, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });
  },
  DeleteBanner: async (id, source) => {
    return await myApi.delete(`${_deleteBanner}/${id}`, {
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