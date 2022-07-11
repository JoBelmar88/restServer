import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.json({
        saludo: 'Hello World',
        peticion: 'GET API'
    });
});

router.put('/', (req, res) => {
    res.status(201).json({
        saludo: 'Hello World',
        peticion: 'PUT API'
    });
});

router.delete('/', (req, res) => {
    res.json({
        saludo: 'Hello World',
        peticion: 'DELETE API'
    });
});

router.post('/', (req, res) => {
    res.json({
        saludo: 'Hello World',
        peticion: 'POST API'
    });
});

export {
    router
}