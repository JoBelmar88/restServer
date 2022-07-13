import { Router } from "express";
import { check } from "express-validator";
import { usuariosGet, usuariosPost, usuariosDelete, usuariosPut, usuariosPatch} from "../controllers/usuarios.controller.js";

const router = Router();

router.get('/', usuariosGet);

router.post('/', [
    check('correo', 'El correo no es válido').isEmail(),
], usuariosPost);

router.delete('/', usuariosDelete);

router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

export {
    router
}