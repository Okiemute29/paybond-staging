import axios from "axios";
import interCeptTokenFromResponse from "../tokeninterceptor";
import addTokentoRequest from "../tokeninjector";

const myApi = axios.create();

myApi?.interceptors?.response?.use(
    response => {
        interCeptTokenFromResponse(response?.data?.result);
        return response;
    },
    error => {
        return Promise.reject(error);
    } 
);


myApi?.interceptors?.request?.use(
    config => {
      const tokenConfig = addTokentoRequest();
      return {
        ...config,
        ...tokenConfig
      };
    },
    error => {
      return Promise.reject(error);
    }
  );
  


export default myApi;