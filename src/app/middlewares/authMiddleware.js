import * as Yup from 'yup';

import auth from '../../services/auth';

export default async (req, res, next) => {
  const schema = Yup.object().shape({
    token: Yup.string().required(),
  });

  if (!(await schema.isValid(req.headers))) {
    return res.send(403, { error: 'Erro de validação, faça login novamente' });
  }
  const { token } = req.headers;

  const axiosConfig = {
    headers: {
      token,
    },
  };

  try {
    await auth.post('/auth/validateToken', null, axiosConfig);

    return next();
  } catch (error) {
    return res.send(403, {
      error: 'Erro de autenticação, faça login novamente',
    });
  }
};
