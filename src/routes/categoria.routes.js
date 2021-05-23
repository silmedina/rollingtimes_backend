import {Router} from 'express'
import categoriaCtrl from '../controllers/categoria.controllers'

const router = Router();

router.route('/').get(categoriaCtrl.getCategorias);

export default router;