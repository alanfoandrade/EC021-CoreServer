import * as Yup from 'yup';
import auth from '../../services/auth';

class AuthController {
  async store(req, res) {
    const schema = Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.json({ error: 'Todos campos são obrigatórios' });
    }

    const { username } = req.body;
    let { password } = req.body;

    password = String(password);

    try {
      const { data } = await auth.post('/auth/login', { username, password });

      return res.json({ data });
    } catch (error) {
      return res.json({ error: 'Falha na autenticação' });
    }
  }
}

export default new AuthController();
