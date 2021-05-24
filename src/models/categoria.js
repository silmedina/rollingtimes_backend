import mongoose, {Schema} from 'mongoose'

const categoriaSchema = new Schema({
    nombre: {
        type: String, 
        required: true,
        unique: true,
        maxlength: 150
    }
});

const Categoria = mongoose.model('categoria', categoriaSchema);

export default Categoria;