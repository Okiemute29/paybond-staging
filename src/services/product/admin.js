import myApi from "../common/interceptors/apiinterceptor";
import { _postProduct, _getAllProduct, _getSingleProduct, _updateProduct, _deleteProduct } from "../../network/network"

const Adminservices = {
  getAllProduct: async (source) => {
    return await myApi.get(_getAllProduct, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  getSingleProduct: async (id, source) => {
    return await myApi.get(`${_getSingleProduct}/${id}`, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  updateProduct: async (data, id, source) => {
    return await myApi.patch(`${_updateProduct}/${id}`, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  PostProduct: async (data, source) => {
    return await myApi.post(_postProduct, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  DeleteProduct: async (id, source) => {
    return await myApi.delete(`${_deleteProduct}/${id}`, {
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