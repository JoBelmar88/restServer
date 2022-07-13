import { response } from 'express';
import { SchemaUsuarios } from '../models/usuario.js';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';


const usuariosGet = (req, res = response) => {
    const {nombre, edad = 0, limit = 1, page = 1} = req.query;
    
    res.json({
        saludo: 'Hello World',
        peticion: 'GET API - CONTROLLER',
        nombre,
        edad,
        limit,
        page
    });
};

const usuariosPost = async(req, res = response) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json(errors);
    };

    const { correo, nombre, password, rol } = req.body;
    
    const usuario = new SchemaUsuarios({
        nombre,
        correo,
        password,
        rol
    });

    const existeCorreo = await SchemaUsuarios.findOne({ correo });
    if( existeCorreo ){
        return res.status(400).json({
            msg: 'El correo ya está registrado'
        });
    };

    // Verificar correo existente

    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync( password, salt );
    
    await usuario.save();

    console.log(usuario);

    res.json({
        saludo: 'Hello World',
        peticion: 'POST API - CONTROLLER',
        usuario
    });
};


const usuariosPatch = (req, res = response) => {
    res.json({
        saludo: 'Hello World',
        peticion: 'PATCH API - CONTROLLER'
    });
};

const usuariosPut = (req, res = response) => {
    const id = req.params['id'];
    console.log(id);
    res.json({
        saludo: 'Hello World',
        peticion: 'PUT API - CONTROLLER',
        id
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        saludo: 'Hello World',
        peticion: 'DELETE API - CONTROLLER'
    });
};

export {
    usuariosGet,
    usuariosDelete,
    usuariosPut,
    usuariosPatch,
    usuariosPost
}