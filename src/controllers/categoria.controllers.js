import { restart } from 'nodemon';
import Categoria from '../models/categoria'
const categoriaCtrl = {};

categoriaCtrl.getCategorias = (req, res)=>{
    res.send('Categorias');
}

categoriaCtrl.nuevaCategoria = async (req, res)=>{
    try {
        //validaciones
      const nuevaCategoria = new Categoria({
          nombre : req.body.nombre
      });

      await nuevaCategoria.save();
      res.status(201).json({
          mensaje : 'Categoria creada correctamente'
      })
    
    } catch (error) {
        res.status(500).json({
            mensaje : 'Error al agregar categoria'
        })  
        console.log(error)
    }
}


export default categoriaCtrl;