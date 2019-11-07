import * as Yup from 'yup';

import auth from '../../services/auth';

class AuthController {
  async store(req, res) {
    const schema = Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
    });

    // Valida se os dados são válidos e se foram preenchidos
    if (!(await schema.isValid(req.body))) {
      return res.send(400, { error: 'Erro de validação, confira os dados' });
    }

    const { username } = req.body;
    let { password } = req.body;

    // Converte password para String caso tenha sido fornecido number
    password = String(password);

    try {
      // Acessa a rota de login utilizando a conexão do axios, caso falhe dispara erro
      const { data } = await auth.post('/auth/login', { username, password });

      // Desestruturando dados para retorno
      const { logado, token } = data;

      return res.send(200, { username, logado, token });
    } catch (error) {
      return res.send(401, { error: 'Falha na autenticação' });
    }
  }
}

export default new AuthController();
