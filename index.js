import express from 'express';
import { banco } from './routes/apiBancos.js';
//import { chequera } from './routes/apiChequera.js';

const app = express();

const port = 9090;


//middlewares
app.use(express.json());

app.use("/api/banco",banco);

app.listen(port,()=>{
    console.log(`Se escucha en ${port}`);
});