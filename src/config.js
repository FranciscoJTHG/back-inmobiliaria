import { config } from "dotenv";
config();

// console.log(process.env.PORT);

export default {
    port: process.env.PORT,
    dbName: process.env.DBNAME,
    dbUser: process.env.DBUSER, 
    dbPass: process.env.DBPASS,
    dbHost: process.env.DBHOST,
    dbPort: process.env.DBPORT
}