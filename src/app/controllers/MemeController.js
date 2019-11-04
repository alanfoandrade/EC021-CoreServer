import * as Yup from 'yup';
import MemeSchema from '../models/MemeSchema';

class MemeController {
  async index(req, res) {
    try {
      const memes = await MemeSchema.find();

      // eslint-disable-next-line eqeqeq
      if (memes == '') return res.json({ error: 'Nenhum Meme encontrado' });

      return res.json(memes);
    } catch (error) {
      return res.json({ error: 'Erro ao buscar Memes' });
    }
  }

  async find(req, res) {
    try {
      const { memeid } = req.params;
      const meme = await MemeSchema.findById(memeid);

      if (!meme) return res.json({ error: 'Meme não encontrado' });

      return res.json(meme);
    } catch (error) {
      return res.json({ error: 'Erro ao buscar Meme' });
    }
  }

  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        titulo: Yup.string().required(),
        descricao: Yup.string().required(),
        ano: Yup.number().required(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.json({ error: 'Erro de validação, confira os dados' });
      }
      const meme = await MemeSchema.create(req.body);

      return res.json(meme);
    } catch (error) {
      return res.json({ error: 'Erro ao criar Meme' });
    }
  }

  async update(req, res) {
    try {
      const meme = await MemeSchema.create(req.body);

      return res.json(meme);
    } catch (error) {
      return res.json({ error: 'Erro ao editar Meme' });
    }
  }

  async delete(req, res) {
    try {
      return res.json({ ok: 'Meme excluído' });
    } catch (error) {
      return res.json({ error: 'Erro ao excluir Meme' });
    }
  }
}

export default new MemeController();
