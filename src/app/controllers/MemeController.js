import * as Yup from 'yup';

import MemeSchema from '../models/MemeSchema';

class MemeController {
  async index(req, res) {
    try {
      const memes = await MemeSchema.find();

      // eslint-disable-next-line eqeqeq
      if (memes == '')
        return res.send(204, { error: 'Nenhum Meme encontrado' });

      return res.send(200, memes);
    } catch (error) {
      return res.send(400, { error: 'Erro ao buscar Memes' });
    }
  }

  async show(req, res) {
    try {
      const { memeid } = req.params;

      const meme = await MemeSchema.findById(memeid);

      if (!meme) return res.send(404, { error: 'Meme não encontrado' });

      return res.send(200, meme);
    } catch (error) {
      return res.send(400, { error: 'Erro ao buscar Meme' });
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
        return res.send(400, { error: 'Erro de validação, confira os dados' });
      }
      const meme = await MemeSchema.create(req.body);

      return res.send(201, meme);
    } catch (error) {
      return res.send(400, { error: 'Erro ao criar Meme' });
    }
  }

  async update(req, res) {
    try {
      const schema = Yup.object().shape({
        titulo: Yup.string(),
        descricao: Yup.string(),
        ano: Yup.number(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.send(400, { error: 'Erro de validação, confira os dados' });
      }

      const meme = await MemeSchema.findByIdAndUpdate(
        req.params.memeid,
        {
          ...req.body,
        },
        { new: true }
      );

      return res.send(200, meme);
    } catch (error) {
      return res.send(400, { error: 'Erro ao editar Meme' });
    }
  }

  async delete(req, res) {
    try {
      const meme = await MemeSchema.findByIdAndRemove(req.body.id);

      if (!meme) return res.send(404, 'Meme não encontrado');

      return res.send(200, { ok: 'Meme excluído' });
    } catch (error) {
      return res.send(400, { error: 'Erro ao excluir Meme' });
    }
  }
}

export default new MemeController();
