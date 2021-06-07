import { Router } from "express";
import loginCtrl from "../controllers/login.controllers";

const router = Router();

router
  .route("/")
  //.get(loginCtrl.compararUsuario)
  .post(loginCtrl.nuevaLogin);


export default router;
