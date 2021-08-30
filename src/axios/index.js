import { Get } from "@/axios/request";

export const GET_BANNER = (type, callback) => {
	return Get(`/banner`, { type }, callback);
};

export const GET_GRAGON_BALL = (param, callback) => {
	return Get("/homepage/dragon/ball", param, callback);
};
