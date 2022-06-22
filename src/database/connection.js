// import sql from 'mssql';
import Sequelize from 'sequelize';
import config from '../config';

export const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass, {
    dialect: 'mssql',
    host: config.dbHost,
    port: config.dbPort,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        options: {
            encrypt: true,
            trustServerCertificate: true,
        }
    }
});

// const dbSettings = {
//     user: 'franc',
//     password: '8713', 
//     // server: 'DESKTOP-DL3IR9K',
//     server: 'localhost',
//     database: 'db1',
//     // port: 1433,
//     options: {
//         encrypt: true, // for azure
//         trustServerCertificate: true, // change to true for local dev / self-signed certs
//     },
// }

// async function getConnection() {
//     try {
//         const pool = await sql.connect(dbSettings);
//         // const result = await pool.request().query('SELECT 1');
//         return pool;        
//         // console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getConnection();
