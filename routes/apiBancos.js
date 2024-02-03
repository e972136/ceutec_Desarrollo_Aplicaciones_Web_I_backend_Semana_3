import express from 'express';
import {
    postBanco,
    getBanco,
    putBanco,
    delBanco
} from "../controllers/bancoController.js";


const banco = express();

banco.post('',postBanco);
banco.get('',getBanco);
banco.put('/:id',putBanco);
banco.delete('/:id',delBanco);


export {banco};

