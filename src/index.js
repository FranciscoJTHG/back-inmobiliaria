import app from './app';
import {sequelize} from './database/connection';
import config from "../src/config";

// app.listen(4000);

/** Modelos */
// import './models/UserLogin';
// import './models/Vivienda';
// import './models/Parroquia';
// import './models/Municipio';
// import './models/Estado';

async function main() {
    try {
        await sequelize.sync({force: false});
        app.listen(config.port);
    } catch (error) {
        console.error('Error: ', error);
    }
}

main();