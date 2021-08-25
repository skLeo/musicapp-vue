import axios from "axios";

export const getBanner = (type) => {
	return axios.get(`http://localhost:3000/banner?type=${type}`);
};
