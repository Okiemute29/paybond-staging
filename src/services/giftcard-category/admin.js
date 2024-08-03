import myApi from "../common/interceptors/apiinterceptor";
import { _postCategoryCard, _getAllCategoryCard, _getSingleCategoryCard, _upDateCategoryCard, _deleteCategoryCard } from "../../network/network"

const Adminservices = {
  getAllCard: async (source) => {
    return await myApi.get(_getAllCategoryCard, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  getSingleCard: async (id, source) => {
    return await myApi.get(`${_getSingleCategoryCard}/${id}`, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  PostCard: async (data, source) => {
    return await myApi.post(_postCategoryCard, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  UpdateCard: async (data, id, source) => {
    return await myApi.patch(`${_upDateCategoryCard}/${id}`, data, {
	headers: {
		'Content-Type': 'multipart/form-data',
		},
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  DeleteCard: async (id, source) => {
    return await myApi.delete(`${_deleteCategoryCard}/${id}`, {
      cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },


}

export default Adminservices