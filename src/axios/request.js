import {AxiosInstance} from '@/axios/instance';

export const Get = (url) => {
    return new Promise((resolve, reject) => {
        AxiosInstance.get(url).then(res => {
            if (res.status === 200) {
                resolve(res.data)
            } else {
                reject(new Error(res.status))
            }
        }).catch(error => {
            reject(error)
        })
    })
}