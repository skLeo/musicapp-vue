import {Get} from '@/axios/request';

export const GET_BANNER = (type) => {
    const url = `/banner?type=${type}`;

    return Get(url);
}