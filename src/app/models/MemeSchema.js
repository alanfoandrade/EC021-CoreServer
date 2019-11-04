import mongoose from '../../database';

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

export default mongoose.model('Meme', MemeSchema);
