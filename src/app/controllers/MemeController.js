class MemeController {
  async store(req, res) {
    return res.json({ MESSAGE: 'CRIAR MEME' });
  }

  async index(req, res) {
    return res.json({ MESSAGE: 'BUSCAR MEME' });
  }

  async update(req, res) {
    return res.json({ MESSAGE: 'EDITAR MEME' });
  }

  async delete(req, res) {
    return res.json({ MESSAGE: 'EXCLUIR MEME' });
  }
}

export default new MemeController();
