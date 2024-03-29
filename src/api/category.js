import axios from 'axios';
import { SUCC_CODE, TIMEOUT } from './config';

// 取消前一次请求
const CancelToken = axios.CancelToken;
let cancel;

export const getCategoryContent = (id) => {
    cancel && cancel('取消了前一次的请求！');
    cancel = null;
    return axios.get(`http://www.imooc.com/api/category/content/${id}`, {
        timeout: TIMEOUT,
        cancelToken: new CancelToken(function executor(c) {
            cancel = c;
        })
    }).then(res => {
        if (res.data.code === SUCC_CODE) {
            return res.data.content;
        }
        return new Error('没有成功获取到数据!');
    }).catch(err => {
        if (axios.isCancel(err)) { // 取消前一次的请求
            console.log(err);
        } else {
            // handle error
            console.log(err);
        }
    });
};