import axios from "axios";

export const AxiosInstance = axios.create({
	baseURL: "http://localhost:3000",
	timeout: 5000,
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
});

AxiosInstance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

AxiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);
