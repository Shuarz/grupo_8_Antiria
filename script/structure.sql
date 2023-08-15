/* CREACION DE TABLAS CON SUS REGISTROS */
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(200) NOT NULL,
    avatar VARCHAR(100) NOT NULL
);

CREATE TABLE marca (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL
);


CREATE TABLE categoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    precio FLOAT NOT NULL,
    id_user INT NOT NULL,
    id_marca INT NOT NULL,
    id_categoria INT NOT NULL,
    imagen_prod VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES user(id),
    FOREIGN KEY (id_marca) REFERENCES marca(id),
    FOREIGN KEY (id_categoria) REFERENCES categoria(id)
);

CREATE TABLE carrito (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_user INT NOT NULL,
    id_prod INT NOT NULL,
    cantidad INT NOT NULL,
    precio FLOAT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES user(id),
    FOREIGN KEY (id_prod) REFERENCES product(id)
);

CREATE TABLE oferta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_prod INT NOT NULL,
    FOREIGN KEY (id_prod) REFERENCES product(id)
);

CREATE TABLE novedades (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_prod INT NOT NULL,
    FOREIGN KEY (id_prod) REFERENCES product(id)
);

CREATE TABLE asesoramiento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    asunto VARCHAR(100) NOT NULL,
    mensaje VARCHAR(500) NOT NULL
);

/* SELECT */
select * from categoria;
select * from carrito;
select * from marca;
select * from product;
select * from oferta;
select * from novedades;
select * from user;
select * from asesoramiento;