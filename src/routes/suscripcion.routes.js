import { Router } from "express";
import suscripcionCtrl from "../controllers/suscripcion.controllers";

const router = Router();

router
  .route("/")
  .get(suscripcionCtrl.getPrueba)
  .post(suscripcionCtrl.nuevaSuscripcion);

export default router;
