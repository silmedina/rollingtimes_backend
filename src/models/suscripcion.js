import mongoose, {Schema} from 'mongoose';

const suscripcionSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
    },
    apellido:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
    },
    localidad:{
        type: String,
        required: true,
        minlength: 4,
        maxlength: 40,
    },
    direccion:{
        type: String,
        required: true,
        minlength: 4,
        maxlength: 40,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 40,
    },
    telefono:{
        type: Number,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 15,
    },
    postal:{
        type: Number,
        required: true,
        minlength: 3,
        maxlength: 15,
    },
});

const Suscripcion = mongoose.model('suscripcion', suscripcionSchema);

export default Suscripcion;