import { Router } from "express";
import categoriaCtrl from "../controllers/categoria.controllers";

const router = Router();

router
  .route("/")
  .get(categoriaCtrl.listarCategorias)
  .post(categoriaCtrl.nuevaCategoria);

export default router;
