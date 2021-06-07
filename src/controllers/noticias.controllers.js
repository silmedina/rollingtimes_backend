import Noticias from '../models/noticias'
const noticiasCtrl = {};

noticiasCtrl.nuevaNoticia = async (req, res) => {
    try {
      //validaciones
      const noticiaCreada = new Noticias({
        titular: req.body.titular,
        bajada: req.body.bajada,
        cuerpo:req.body.cuerpo,
        imagen: req.body.imagen,
        categoria: req.body.categoria,
        autor: req.body.autor,
        fecha: req.body.fecha
      });
  
      await noticiaCreada.save();
      res.status(201).json({
        mensaje: "La noticia fue creada correctamente",
      });
    } catch (error) {
      if (error && error.code === 11000) {
        res.status(500).send({
          mensaje: "La noticia ya existe",
        });
        return;
      }
      res.status(500).json({
        mensaje: "Error al agregar",
      });
      console.log("error contains", error);
    }
  };
  
  noticiasCtrl.listarNoticias = async (req, res) => {
    try {
      const arregloNoticias = await Noticias.find();
      res.status(200).json(arregloNoticias);
    } catch (error) {
      res.status(404).json({
        mensaje: "No se pudo obtener las categorias",
      });
      console.log(error);
    }
  };
  
  noticiasCtrl.eliminarNoticia = async (req, res) => {
    try {
      await Noticias.findByIdAndDelete(req.params.id);
      res.status(200).json({
        mensaje: "La noticia se elimnino correctamente.",
      }); 
    } catch (error) {
      res.status(404).json({
        mensaje: "Error al eliminar esta noticia.",
      });
      console.log(error);
    }
  };
  
  noticiasCtrl.editarNoticia = async (req, res) => {
    try {
      await Noticias.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        mensaje: "Se edito la noticia correctamente.",
      });
    } catch (error) {
      res.status(404).json({
        mensaje: "Error al editar la noticia.",
      });
      console.log(error);
    }
  };
  
  noticiasCtrl.obtenerNoticia = async (req, res) => {
    try {
      const getNoticia = await Noticias.findById(req.params.id);
      res.status(200).json(getNoticia);
    } catch (error) {
      res.status(404).json({
        mensaje: "Error al obtener la noticia",
      });
      console.log(error);
    }
  };
  
  export default noticiasCtrl;
  