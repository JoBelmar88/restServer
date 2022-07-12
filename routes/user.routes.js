import { Router } from "express";
import { usuariosGet, usuariosPost, usuariosDelete, usuariosPut, usuariosPatch} from "../controllers/usuarios.controller.js";

const router = Router();

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

export {
    router
}