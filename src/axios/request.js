import { AxiosInstance } from "@/axios/instance";
import qs from "qs";

export const Get = (url, params, callback) => {
	return new Promise((resolve, reject) => {
		AxiosInstance.get(url, { params })
			.then((res) => {
				if (res.status === 200) {
					callback ? resolve(callback(res.data)) : resolve(res.data);
				} else {
					reject(new Error(res.status));
				}
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const Post = (url, params, callback) => {
	return new Promise((resolve, reject) => {
		AxiosInstance.post(url, qs.stringify(params))
			.then((res) => {
				if (res.status === 200) {
					callback ? resolve(callback(res.data)) : resolve(res.data);
				} else {
					reject(new Error(res.status));
				}
			})
			.catch((error) => {
				reject(error);
			});
	});
};
