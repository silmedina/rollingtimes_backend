import mongoose, {Schema} from 'mongoose'

const usuarioSchema = new Schema({
    nombreUsuario: {
        type: String, 
        required: true,
        unique: true,
        maxlength: 40
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20
    }
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;