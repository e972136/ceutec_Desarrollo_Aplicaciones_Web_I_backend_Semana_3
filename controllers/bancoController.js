import { db } from '../db/conn.js';
/*
    id SERIAL PRIMARY KEY,
    nombre_banco VARCHAR(50),
    numero_cuenta VARCHAR(50)
*/
const postBanco = async (req, res)=>{
    const {nombre_banco,numero_cuenta} = req.body;

    const params = [nombre_banco,numero_cuenta];

    const sql = `insert into tbl_Banco(nombre_banco,numero_cuenta)
                values ($1, $2) returning *
                `;
    const result = await db.query(sql,params);

    res.json(result);

};

const getBanco = async (req, res)=>{
    

    const sql = `select * from tbl_Banco`;
    const result = await db.query(sql);

    res.json(result);

};

const putBanco = async (req, res)=>{
    const {nombre_banco,numero_cuenta}=req.body;
    const {id} = req.params;

    const params =[
        nombre_banco,numero_cuenta,
        id
    ];

    const sql = `update tbl_Banco 
                    set nombre_banco = $1, numero_cuenta = $2 
                    where id = $3 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

const delBanco = async (req, res)=>{
    
    const {id} = req.params;

    const params =[        
        id
    ];

    const sql = `delete from tbl_Banco
                    where id = $1 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

export {
    postBanco,
    getBanco,
    putBanco,
    delBanco
};

