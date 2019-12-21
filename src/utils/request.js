// 数据请求封装文件

import axios from 'axios'
// axios.defaults.baseURL = 'https://localhost:5000'; // baseURL  后端地址
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; // 权限认证
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 表示为post请求统一设置请求头
// axios.defaults.headers.post['Content-Type'] = 'application/json'; // 表示为post请求统一设置请求头


const request = ({
  url,
  params,
  headers,
  data,
  baseURL,
  method = "GET" // get GET  Get
}) => { //参数就是axios的配置
  return new Promise((resolve,reject) => {
    switch ( method.toUpperCase() ) {
      case 'GET':
        // axios.get()
        axios({
          url,
          method,
          baseURL: baseURL? baseURL : '',
          params
        }).then( res => resolve( res ))
          .catch( err => reject( err ))
        break;
      case 'POST':
        axios({
          url,
          method,
          data, 
          baseURL:  baseURL? baseURL : '',
          headers: {}
        }).then( res => resolve( res ))
          .catch( err => reject( err ))
        break;
    
      default:     // 默认来解决put/delete请求
          axios({
            url,
            method,
            baseURL: baseURL? baseURL : '',
            params,
            data
          }).then( res => resolve( res ))
            .catch( err => reject( err ))
        break;
    }
  })
  
}

export default request