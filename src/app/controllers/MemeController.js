import * as Yup from 'yup';

import MemeSchema from '../models/MemeSchema';

class MemeController {
  async index(req, res) {
    try {
      // Lista todos Memes cadastrados, dispara erro caso falhe
      const memes = await MemeSchema.find();

      // eslint-disable-next-line eqeqeq
      if (memes.length === 0)
        return res.send(400, { error: 'Nenhum Meme encontrado' });

      return res.send(200, memes);
    } catch (error) {
      return res.send(400, { error: 'Erro ao buscar Memes' });
    }
  }

  async show(req, res) {
    try {
      // Exibe Meme por id, dispara erro caso falhe
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

      // Valida se os dados são válidos e se foram preenchidos
      if (!(await schema.isValid(req.body))) {
        return res.send(400, { error: 'Erro de validação, confira os dados' });
      }
      // Cria novo Meme utilizando o mongoose e buscando todos dados do body, dispara erro se falhar
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

      // Valida se os dados são válidos e se foram preenchidos
      if (!(await schema.isValid(req.body))) {
        return res.send(400, { error: 'Erro de validação, confira os dados' });
      }

      // Busca por id e atualiza Meme utilizando o mongoose e buscando dados do body, dispara erro se falhar
      const meme = await MemeSchema.findByIdAndUpdate(
        req.params.memeid,
        {
          ...req.body,
        },
        { new: true }
      );

      if (!meme) return res.send(404, { error: 'Meme não encontrado' });

      return res.send(200, meme);
    } catch (error) {
      return res.send(400, { error: 'Erro ao editar Meme' });
    }
  }

  async delete(req, res) {
    try {
      // Busca meme por id e remove, dispara erro se falhar
      const meme = await MemeSchema.findByIdAndRemove(req.body.id);

      if (!meme) return res.send(404, { error: 'Meme não encontrado' });

      return res.send(204);
    } catch (error) {
      return res.send(400, { error: 'Erro ao excluir Meme' });
    }
  }
}

export default new MemeController();
