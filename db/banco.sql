-- Active: 1705979042290@@localhost@5432@clase@public
create Table tbl_banco(
    id SERIAL PRIMARY KEY,
    nombre_banco VARCHAR(50),
    numero_cuenta VARCHAR(50)
);

create Table tbl_chequera(
    id SERIAL PRIMARY KEY,
    id_banco integer not null,
    numero_cheque VARCHAR(10),
    a_nombre_de VARCHAR(50),
    monto_cheque DECIMAL(9,2),
    CONSTRAINT fk_banco
      FOREIGN KEY(id_banco) 
	  REFERENCES tbl_banco(id)
);
