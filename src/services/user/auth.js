import CryptoJS from 'crypto-js'
import myApi from "../common/interceptors/apiinterceptor";
import { _logInUser, _logOutUser, _updateUser, _signUpUser, _verifyUser, _verifyOTP, _transactionPin } from "../../network/network";
const HashPasswordKey = process.env.REACT_APP_BASE_HASH_KEY

const Authservices = {
	signUp: async (data, source) => {
		return await myApi.post(_signUpUser, data, {
		cancelToken: source.token,
		}).then(async (res) => {
		return res;
		});
	},
	verifyUser: async (data, source) => {
		return await myApi.post(_verifyUser, data, {
		cancelToken: source.token,
		}).then(async (res) => {
		return res;
		});
	},
	verifyOTP: async (data, source) => {
		return await myApi.post(_verifyOTP, data, {
		cancelToken: source.token,
		}).then(async (res) => {
		return res;
		});
	},
	logIn: async (data, source) => {
		return await myApi.post(_logInUser, data, {
		cancelToken: source.token,
		}).then(async (res) => {
		return res;
		});
	},
	getUser: () => {
		const encrptToken = JSON.parse(localStorage.getItem("authorization"));
		var bytes  = CryptoJS.AES.decrypt(encrptToken, HashPasswordKey);
		var token = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
		
		return token
	},
	logOut: async (source) => {
	  return await myApi.get(_logOutUser, {
		cancelToken: source.token,
	  }).then(async (res) => {
		return res;
	  });

	},

	forgotPassword: async (email, source) => {
		return await myApi.post(_signUpUser, email, {
			cancelToken: source.token,
		}).then(async (res) => {
			return res;
		});

	},
	forgotPasswordOtp: async (email, source) => {
		return await myApi.post(_signUpUser, email, {
			cancelToken: source.token,
		}).then(async (res) => {
			return res;
		});

	},
	transactionPin: async (data, source) => {
		return await myApi.patch(_transactionPin, data, {
			cancelToken: source.token,
		}).then(async (res) => {
			return res;
		});

	},
	UpdateAppUser: async (data, id, source) => {
		return await myApi.patch(`${_updateUser}/${id}`, data, {
			cancelToken: source.token,
		}).then(async (res) => {
			return res;
		});

	},

//   setNewPassword: async (password, token, source) => {

//     return await myApi.post(_setnewpassword, { newpassword: password }, {
//       cancelToken: source.token
//     })

//   },


}

export default Authservices