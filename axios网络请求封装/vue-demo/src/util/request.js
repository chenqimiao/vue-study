import axios from "axios"
import querystring from "querystring"

// 文档帮助：https://www.kancloud.cn/yunye/axios/234845/
const errorHandle = (status, info) => {
    switch (status){
        case 400:
            console.error("语义错误");
            break;
        case 401:
            console.error("服务器认证失败");
            break;
        case 404:
            console.error("地址错误");
            break;
        case 500:
            console.error("服务器遇到意外");
            break;
        case 502:
            console.error("服务器无响应");
            break;
        default: 
            console.error(info);
            break;
    }
}

const instance = axios.create({
    // 网络请求的公共配置
    timeout:5000
});


// 拦截器
// 发送数据之前的拦截器
instance.interceptors.request.use(
    config => {
        if(config.methods === "post"){
            config.data = querystring.stringify(config.data)
        }
        config.headers.data.
        return config;
    },

    error => {
        return Promise.reject(error);
    }

)

// 获取数据之前的拦截器

instance.interceptors.response.use(

    response => {
        return response.status === 200 ? Promise.resolve(response) : Promise.reject(response);
    },
    
    error => {
        const { response } = error;
        errorHandle(response.status, response.info);  
    }
    
)

export default instance;