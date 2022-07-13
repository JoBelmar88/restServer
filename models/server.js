import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { router } from '../routes/user.routes.js';
import { dbConnection } from '../database/config.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        // Conectar a Base de Datos
        this.conectarDb();
        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
        this.listen();
    };

    async conectarDb(){
        await dbConnection();
    }

    routes() {
        this.app.use(this.usuariosPath, router);
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    };

    middlewares() {
        // Cors: protege el servidor
        this.app.use(cors());

        // Directorio público
        this.app.use(express.static('public'));

        // Lectura y parseo del body
        this.app.use(express.json());

    };
};

export {
    Server
}
