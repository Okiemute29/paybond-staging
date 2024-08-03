import CryptoJS from 'crypto-js';

const HashPasswordKey = process.env.REACT_APP_BASE_HASH_KEY;

function interCeptTokenFromResponse(res) {
  if (res?.refreshToken) {
    const { refreshToken, token } = res;
    // Encrypt tokens before storing robert 
    var encrptToken = CryptoJS.AES.encrypt(JSON.stringify(token), HashPasswordKey).toString();
    var encrptRefreshToken = CryptoJS.AES.encrypt(JSON.stringify(refreshToken), HashPasswordKey).toString();

    // Set tokens to local storage
    localStorage.setItem('refreshToken', JSON.stringify(encrptRefreshToken));
    localStorage.setItem('authorization', JSON.stringify(encrptToken));
  }
}

export default interCeptTokenFromResponse;
