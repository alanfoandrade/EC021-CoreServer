import axios from 'axios';

const auth = axios.create({
  baseURL: `${process.env.AXIOS_BASE_URL}`,
});

export default auth;
