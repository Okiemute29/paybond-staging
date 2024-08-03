import myApi from "../common/interceptors/apiinterceptor";
import { _postCountryCard, _getAllCountryCard, _getSingleCountryCard, _upDateCountryCard, _deleteCountryCard } from "../../network/network"

const Adminservices = {
  getAllCountry: async (id, source) => {
    return await myApi.get(`${_getAllCountryCard}/${id}`, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  getSingleCountry: async (id, source) => {
    return await myApi.get(`${_getSingleCountryCard}/${id}`, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  PostCountry: async (data, source) => {
    return await myApi.post(`${_postCountryCard}`, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  UpdateCountry: async (data, id, source) => {
    return await myApi.patch(`${_upDateCountryCard}/${id}`, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  DeleteCountry: async (id, source) => {
    return await myApi.delete(`${_deleteCountryCard}/${id}`, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },


}

export default Adminservices