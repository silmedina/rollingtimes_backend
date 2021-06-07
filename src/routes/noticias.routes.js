import { Router } from "express";
import noticiasCtrl from "../controllers/noticias.controllers";

const router = Router();

router
  .route("/")
  .get(noticiasCtrl.listarNoticias)
  .post(noticiasCtrl.nuevaNoticia);

router
  .route("/:id")
  .delete(noticiasCtrl.eliminarNoticia)
  .put(noticiasCtrl.editarNoticia)
  .get(noticiasCtrl.obtenerNoticia);

export default router;