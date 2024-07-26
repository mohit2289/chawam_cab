import {HttpClient} from './HTTPClient';

export default class ApiFunction extends HttpClient {
  classInstance;
  
  baseUrl = "";
  
  constructor() {
    super();
    //this.baseUrl = `http://localhost:8080/api/v1`;
	  this.baseUrl = 'https://api.trilokicabs.com/api/v1';
  }

  getInstance = () => {
    if (!this.classInstance) {
      this.classInstance = new ApiFunction();
    }
    return this.classInstance;
  };

  // ** POST **
  post = async (data, uri) => {
    return this.instance.post(`${this.baseUrl}/${uri}`, data);
  };

  // ** GET **
  get = async (uri, param='') => {
    let apiurl = `${this.baseUrl}/${uri}`;
    if(param){
      apiurl = `${this.baseUrl}/${uri}/${param}`;
    }
    return this.instance.get(apiurl);
  };

  // ** PATCH **
  update = async (data, uri) => {
    return this.instance.patch(`${this.baseUrl}/${uri}`, data);
  };
  // ** PATCH **
  put = async (data, uri) => {
    return this.instance.put(`${this.baseUrl}/${uri}`, data);
  };
  // ** DELETE **
  delete = async (data, uri) => {
    return this.instance.delete(`${this.baseUrl}/${uri}`, data);
  };
}
