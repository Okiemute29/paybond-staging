import myApi from "../common/interceptors/apiinterceptor";
import { _postQuiz, _getSingleQuiz, _getAllQuiz, _updateQuiz, _deleteQuiz } from "../../network/network"

const Adminservices = {
  getAllQuiz: async (id, source) => {
    return await myApi.get(`${_getAllQuiz}/${id}`, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  PostQuiz: async (data, source) => {
    return await myApi.post(_postQuiz, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  getSingleQuiz: async (id, source) => {
	  return await myApi.get(`${_getSingleQuiz}/${id}`, {
	  cancelToken: source.token,
	  }).then(async (res) => {
	  return res;
	  });

  },
  UpdateQuiz: async (data, id, source) => {
    return await myApi.patch(`${_updateQuiz}/${id}`, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  DeleteQuiz: async (id, source) => {
    return await myApi.delete(`${_deleteQuiz}/${id}`, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },



}

export default Adminservices