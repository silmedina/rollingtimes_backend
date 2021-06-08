import mongoose, {Schema} from 'mongoose'

const noticiaSchema = new Schema({
    titular:{
        type: String,
        required: true,
        unique: true,
        // maxlength: 50,
        // minlength: 7
    },
    bajada:{
        type: String,
        required: true,
        unique: true,
        // maxlength: 250,
        // minlength:10
    },
    
    cuerpo:{
        type: String,
        // required: true,
        // unique: true,
        // maxlength: 600,
        // minlength:90
    },

    // imagen:{},
    categoria:{
        type: String,
        // required: true,
        // unique: true,
    },
    autor:{
        type: String,
    },
    fecha:{
        type: String,
    }
});

const Noticia = mongoose.model('noticia', noticiaSchema);

export default Noticia;