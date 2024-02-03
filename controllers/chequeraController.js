import { db } from '../db/conn.js';

const postChequera = async (req, res)=>{
    const {numero_cheque,id_banco,a_nombre_de,monto_cheque} = req.body;

    const params = [numero_cheque,id_banco,a_nombre_de,monto_cheque];

    const sql = `insert into tbl_chequera(numero_cheque,id_banco,a_nombre_de,monto_cheque)
                values ($1, $2, $3, $4) returning *
                `;
    const result = await db.query(sql,params);

    res.json(result);

};

const getChequera = async (req, res)=>{
    

    const sql = `select  c.numero_cheque,b.nombre_banco,b.numero_cuenta,c.a_nombre_de,c.monto_cheque
                    from tbl_chequera c
                    inner join tbl_banco b on (b.id = c.id_banco)`;
    const result = await db.query(sql);

    res.json(result);

};

const putChequera = async (req, res)=>{
    const {numero_cheque,a_nombre_de,monto_cheque}=req.body;
    const {id} = req.params;

    const params =[
        numero_cheque,a_nombre_de,monto_cheque,
        id
    ];

    const sql = `update tbl_chequera 
                    set numero_cheque = $1, a_nombre_de = $2 , monto_cheque = $3
                    where id = $4 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

const delChequera = async (req, res)=>{
    
    const {id} = req.params;

    const params =[        
        id
    ];

    const sql = `delete from tbl_chequera
                    where id = $1 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

export {
    postChequera,
    getChequera,
    putChequera,
    delChequera
};

