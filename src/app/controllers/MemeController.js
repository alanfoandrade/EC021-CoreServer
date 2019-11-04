import MemeSchema from '../models/MemeSchema';

class MemeController {
  async store(req, res) {
    try {
      return res.json({ ok: 'Meme criado' });
    } catch (error) {
      return res.json({ error: 'Erro ao criar Meme' });
    }
  }

  async index(req, res) {
    try {
      const memes = await MemeSchema.find();

      return res.json(memes);
    } catch (error) {
      return res.json({ error: 'Erro ao buscar Memes' });
    }
  }

  async update(req, res) {
    try {
      return res.json({ ok: 'Meme editado' });
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
