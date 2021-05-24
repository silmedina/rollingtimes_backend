import { restart } from 'nodemon';
import Categoria from '../models/categoria'
const categoriaCtrl = {};

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

categoriaCtrl.listarCategorias = async (req, res)=>{
    try {
     const arregloCategorias = await Categoria.find();
     res.status(200).json(arregloCategorias);
    } catch (error) {
        res.status(404).json({
            mensaje : 'No se pudo obtener las categorias'
        })  
        console.log(error);
    }
}



export default categoriaCtrl;