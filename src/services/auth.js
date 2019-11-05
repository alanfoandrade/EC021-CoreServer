import axios from 'axios';

// Configura conexão do axios com o servidor de autenticação
const auth = axios.create({
  baseURL: `${process.env.AXIOS_BASE_URL}`,
});

export default auth;
