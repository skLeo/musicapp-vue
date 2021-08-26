import {Get} from '@/axios/request';

export const GET_BANNER = (type, callback) => {
    return Get(`/banner`, {type}, callback);
}