import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import {router} from '../routes/user.routes.js'

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
        this.listen();
    };

    routes() {
        
        this.app.use('/api/usuarios', router);
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
    };
};

export {
    Server
}
