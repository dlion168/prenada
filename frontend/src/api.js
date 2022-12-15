import axios from 'axios';

const instance = axios.create({
  baseURL: `http://10.5.3.179:4000/`,
});

export default instance;