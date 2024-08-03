import myApi from "../common/interceptors/apiinterceptor";
import { _postOrder, _getAllOrder, _upDateOrder, _deleteOrder, _getSingleOrder } from "../../network/network"

const Adminservices = {
  getAllOrder: async (source) => {
    return await myApi.get(_getAllOrder, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  getSingleOrder: async (id, user, source) => {
	  return await myApi.post(`${_getSingleOrder}/${id}`, {user: user}, {
	  cancelToken: source.token,
	  }).then(async (res) => {
	  return res;
	  });

  },
  PostOrder: async (data, source) => {
    return await myApi.post(_postOrder, data, {
	
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  UpdateOrder: async (data, id, source) => {
    return await myApi.patch(`${_upDateOrder}/${id}`, data, {
	
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  DeleteOrder: async (id, source) => {
    return await myApi.delete(`${_deleteOrder}/${id}`, {
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