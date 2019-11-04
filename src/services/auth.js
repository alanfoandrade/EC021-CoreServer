import axios from 'axios';

const auth = axios.create({
  baseURL: 'https://ec021-2019-2-av2-auth.herokuapp.com',
});

export default auth;
