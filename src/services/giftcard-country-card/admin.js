import myApi from "../common/interceptors/apiinterceptor";
import { _postCountry_Card, _getAllCountry_Card, _upDateCountry_Card, _deleteCountry_Card } from "../../network/network"

const Adminservices = {
  getAllCountryCard: async (id, source) => {
    return await myApi.get(`${_getAllCountry_Card}/${id}`, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  PostCountryCard: async (data, source) => {
    return await myApi.post(`${_postCountry_Card}`, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  UpdateCountryCard: async (data, id, source) => {
    return await myApi.patch(`${_upDateCountry_Card}/${id}`, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  DeleteCountryCard: async (id, source) => {
    return await myApi.delete(`${_deleteCountry_Card}/${id}`, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },


}

export default Adminservices