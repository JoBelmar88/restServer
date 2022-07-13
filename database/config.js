import mongoose from 'mongoose';

const dbConnection = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/super-cafe');

        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error al levantar la base de datos');
    }
}

export {
    dbConnection
}