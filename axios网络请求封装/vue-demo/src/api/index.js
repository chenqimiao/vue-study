import axios from "../util/request"
import path from "./path"

const api = {
    getPersonBlog() {
        //return axios.get(path.prefixUrl + path.index)
        // 代理方式解决跨域
        return axios.get(path.index)
    }
}

export default api;

