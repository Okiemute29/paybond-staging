import myApi from "../common/interceptors/apiinterceptor";
import CryptoJS from 'crypto-js'
import { _logInUser, _logOutUser } from "../../network/network"
const HashPasswordKey = process.env.REACT_APP_BASE_HASH_KEY

const Authservices = {
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

export default Authservices