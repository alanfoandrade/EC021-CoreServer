// Importação da conexão criada no arquivo index.js da pasta database
import mongoose from '../../database';

// Schema de Memes
const MemeSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    ano: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// nome da tabela no banco
export default mongoose.model('Meme', MemeSchema);
