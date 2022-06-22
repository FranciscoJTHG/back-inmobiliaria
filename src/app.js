import express from "express";
// import morgan from "morgan";
import config from "./config";

const app = express();

/** Settings */
app.set('port', config.port) ;

import UserLogin from "./routes/userLogin.routes";

// app.use(morgan("dev"));
app.use(express.json());

app.use(UserLogin);

export default app