import { Router } from "express";
import noticiaCtrl from "../controllers/noticia.controllers";

const router = Router();

router
  .route("/")
  .get(noticiaCtrl.listarNoticias)
  .post(noticiaCtrl.nuevaNoticia);

router
  .route("/:id")
  .delete(noticiaCtrl.eliminarNoticia)
  .put(noticiaCtrl.editarNoticia)
  .get(noticiaCtrl.obtenerNoticia);

export default router;
