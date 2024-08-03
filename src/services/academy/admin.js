import myApi from "../common/interceptors/apiinterceptor";
import { _postAcademy, _getSingleAcademy, _getAllAcademy, _updateAcademy, _deleteAcademy } from "../../network/network"

const Adminservices = {
  getAllAcademy: async (source) => {
    return await myApi.get(_getAllAcademy, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  PostAcademy: async (data, source) => {
    return await myApi.post(_postAcademy, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  getSingleAcademy: async (id, source) => {
	  return await myApi.get(`${_getSingleAcademy}/${id}`, {
	  cancelToken: source.token,
	  }).then(async (res) => {
	  return res;
	  });

  },
  UpdateAcademy: async (data, id, source) => {
    return await myApi.patch(`${_updateAcademy}/${id}`, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  DeleteAcademy: async (id, source) => {
    return await myApi.delete(`${_deleteAcademy}/${id}`, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },



}

export default Adminservices