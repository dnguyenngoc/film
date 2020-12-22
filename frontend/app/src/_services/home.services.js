import axios from 'axios';

const BASE_URI = 'http://localhost:8080';

const client = axios.create({
    baseURL: BASE_URI,
    json: true
   });

class HomeService {
    constructor(accessToken) {
      this.accessToken = accessToken;
    }
  
    getPhimLe(page) {
      return this.perform('get', `/api/v1/phimmoi/phim-le/${page}`);
    }
  
    async perform (method, resource, data) {
        return client({
          method,
          url: resource,
          data,
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        }).then(resp => {
          return resp.data ? resp.data : [];
        })
   }
}
  
export default HomeService;