import { AxiosInstance } from "@/axios/instance";
import qs from "qs";

export const Get = (url, params, callback) => {
	return new Promise((resolve, reject) => {
		AxiosInstance.get(url, { params })
			.then((res) => {
				callback ? resolve(callback(res)) : resolve(res);
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
				callback ? resolve(callback(res)) : resolve(res);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
