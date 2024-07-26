import axios from 'axios';
export class HttpClient {
   instance
    constructor(baseUrl) {
    this.instance = axios.create({baseURL: baseUrl});
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

   _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this._handleResponse, this._handleError);
  }

   _initializeRequestInterceptor = () => {
    
    this.instance.interceptors.request.use(this._handleRequest, this._handleError)
  }

   _handleRequest =  (config) => {
    // const authToken =  window?.localStorage?.getItem("token")?.replace('"','') || "";
    
    // if(authToken) {
    //   if (config.data instanceof FormData) {
    //     config.headers["Content-Type"] = "multipart/form-data;";
        
    //   } else { 
    //     config.headers["Content-Type"] = "application/json; charset=utf-8";
    //   }
    //   config.headers["Authorization"] = authToken;
        
    // }
    config.headers["Content-Type"] = "application/json; charset=utf-8";

    return config;
  } 

   _handleResponse = ({data}) => data; 

   _handleError = (error) => Promise.reject(error);
}
