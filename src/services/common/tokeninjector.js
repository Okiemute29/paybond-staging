import CryptoJS from 'crypto-js';

const HashPasswordKey = process.env.REACT_APP_BASE_HASH_KEY;

function addTokentoRequest() {
  let refreshToken = ''
  let token = ''
  if(localStorage.getItem("refreshToken") !== null && localStorage.getItem("authorization") !== null){

  // Get tokens from local storage
  const encryptedRefreshToken = localStorage.getItem("refreshToken").replaceAll('"', '');
  const encryptedToken = localStorage.getItem("authorization").replaceAll('"', '');
 
  // Decrypt tokens before sending 
    var refreshBytes  = CryptoJS.AES.decrypt(encryptedRefreshToken, HashPasswordKey);
    refreshToken = JSON.parse(refreshBytes.toString(CryptoJS.enc.Utf8));
    var tokenBytes  = CryptoJS.AES.decrypt(encryptedToken, HashPasswordKey);
    token = JSON.parse(tokenBytes.toString(CryptoJS.enc.Utf8));

    
  }
  
  // Add tokens to request headers
  if (token && refreshToken) {
	console.log("added token", token)
	console.log("added refreshToken", refreshToken)
    return {
      headers: {
        "Authorization": token,
        "refreshtoken": refreshToken,
		"is-mobile": true
      }
    };
  }

  return {};
}



export default addTokentoRequest;
