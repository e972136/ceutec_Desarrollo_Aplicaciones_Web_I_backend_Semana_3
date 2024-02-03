import express from 'express';
import {
    postChequera,
    getChequera,
    putChequera,
    delChequera
} from "../controllers/chequeraController.js";


const chequera = express();

chequera.post('',postChequera);
chequera.get('',getChequera);
chequera.put('/:id',putChequera);
chequera.delete('/:id',delChequera);


export {chequera};

