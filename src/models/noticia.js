import mongoose, { Schema } from "mongoose";

const noticiaSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    unique: true,
    maxlength: 140,
    default: "",
  },
  subtitulo: { type: String },
  categoria: { type: String },
  texto: { type: String, required: true },
  autor: { type: String, required: true },
  fecha: { type: String },
  imagen: { type: String },
});

const Noticia = mongoose.model("noticia", noticiaSchema);

export default Noticia;
