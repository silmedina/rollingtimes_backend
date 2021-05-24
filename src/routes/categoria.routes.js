import { Router } from "express";
import categoriaCtrl from "../controllers/categoria.controllers";

const router = Router();

router
  .route("/")
  .get(categoriaCtrl.listarCategorias)
  .post(categoriaCtrl.nuevaCategoria);


  router
  .route("/:id")
  .delete(categoriaCtrl.eliminarCategoria);


  export default router;
