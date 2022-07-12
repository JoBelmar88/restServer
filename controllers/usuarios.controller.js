import { response } from 'express';

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

const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;

    res.json({
        saludo: 'Hello World',
        peticion: 'POST API - CONTROLLER',
        nombre,
        edad
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