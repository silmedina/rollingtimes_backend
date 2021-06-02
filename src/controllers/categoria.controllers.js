import Categoria from "../models/categoria";
const categoriaCtrl = {};

categoriaCtrl.nuevaCategoria = async (req, res) => {
  try {
    //validaciones
    const nuevaCategoria = new Categoria({
      nombre: req.body.nombre,
    });

    await nuevaCategoria.save();
    res.status(201).json({
      mensaje: "Categoria creada correctamente",
    });
  } catch (error) {
    if (error && error.code === 11000) {
      res.status(500).send({
        mensaje: "Categoria ya existe",
      });
      return;
    }
    res.status(500).json({
      mensaje: "Error al agregar categoria",
    });
    console.log("error contains", error);
  }
};

categoriaCtrl.listarCategorias = async (req, res) => {
  try {
    const arregloCategorias = await Categoria.find();
    res.status(200).json(arregloCategorias);
  } catch (error) {
    res.status(404).json({
      mensaje: "No se pudo obtener las categorias",
    });
    console.log(error);
  }
};

categoriaCtrl.eliminarCategoria = async (req, res) => {
  try {
    await Categoria.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "Se elimnino la categoria correctamente",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al eliminar la categoria",
    });
    console.log(error);
  }
};

categoriaCtrl.editarCategoria = async (req, res) => {
  try {
    await Categoria.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "Se edito la categoria correctamente",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al editar la categoria",
    });
    console.log(error);
  }
};

categoriaCtrl.obtenerCategoria = async (req, res) => {
  try {
    const categoriaBuscada = await Categoria.findById(req.params.id);
    res.status(200).json(categoriaBuscada);
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al obtener la categoria",
    });
    console.log(error);
  }
};

export default categoriaCtrl;
