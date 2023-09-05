insert into user values
(DEFAULT, 'Shrek', 'El Ogro', 'shrek@gmail.com', '$2a$10$TJxLsHwoFnakhFCE55ukXu7WU8AWg2NaCpvrGKf40fxjAB4UVJDpC', 'user-1690156726211.jpg'),
(DEFAULT, 'Jorge', 'Curioso', 'jorgecurioso@yahoo.com', '$2a$10$RjO41tcLrMuKH57OJ56AtOsHmdyyWbxItqtIxnlt9OBq7Ho/kaRU.', 'user-1690157620808.jpg');

insert into marca values
(DEFAULT, 'Mercedes Benz'),
(DEFAULT, 'Rolex'),
(DEFAULT, 'Sony'),
(DEFAULT, 'Louis Vuitton'),
(DEFAULT, 'Nintendo'),
(DEFAULT, 'Otro');

insert into categoria values
(DEFAULT, 'Arte'),
(DEFAULT, 'Reloj'),
(DEFAULT, 'Reliquia'),
(DEFAULT, 'Mueble'),
(DEFAULT, 'Joyeria'),
(DEFAULT, 'Musica'),
(DEFAULT, 'Otro');

insert into product values
(DEFAULT, 'Busto de mujer joven', 'Busto de mujer joven Paris, otoño 1906. Óleo sobre lienzo. 54 x 42 cm.', 150000, 1, 6, 1, 'product-1690156954077.jpg'),
(DEFAULT, 'Reloj de Bolsillo', 'Reloj de bolsillo (Ernest Magnin, Besançon, ca. 1920)', 80000, 1, 6, 2, 'product-1690157231193.jpg'),
(DEFAULT, 'Auto lamborghini diablo', 'En 1993, Lamborghini lanzó el Diablo VT, el primer Lambo Gran Turismo equipado con tracción en las cuatro ruedas.', 80000000, 1, 6, 3, 'product-1690157493629.jpg'),
(DEFAULT, 'Juego Lego de mesa', 'Juego Lego antiguo-Lego System año 1970.', 70000, 1, 6, 3, 'product-1690157697224.jpg'),
(DEFAULT, 'RARO MANUSCRITO DE LIBRO CRISTIANO COPTO ETIOPÍA GE EZ BIBLIA', 'Rarísimo manuscrito etíope de un libro cristiano copto, cuidadosamente escrito a mano con tinta sobre vitela (o pergamino, un material de piel animal)', 70000, 1, 6, 3, 'product-1690157815738.jpg'),
(DEFAULT, 'Armario triple caoba llama con dos cajones y espejo original', 'Armario  de caoba Vintage triple armario con espejo.', 250000, 1, 6, 4, 'product-1690157891561.jpg'),
(DEFAULT, 'Cartier - Panthère Ruban - 2449 - Mujer - 1980', 'Reloj Cartier - Panthère Ruban Oro Amarillo de 18 Quilates y 12 Diamantes redondos con engaste original de Cartier de 0,03 quilates.', 170000, 1, 6, 2, 'product-1690158066325.jpg'),
(DEFAULT, 'Panini - World Cup España 82 - Set de adhesivos sueltos completo - 1982', 'Panini FIFA World Cup 1982 ESPANA / SPAIN - ¡Colección oficial de Panini para la FIFA World Cup 1982', 40000, 1, 6, 3, 'product-1690159646325.jpg'),
(DEFAULT, 'Lambertus Jacobus Johannes Boers (1903-1981) - The old man', 'Lambertus Jacobus Johannes Boers (1903-1981) - The old man', 340200, 1, 6, 1, 'product-1690159769046.jpg'),
(DEFAULT, 'Figura Companion Kaws Flayed 35cm', 'Figura Companion Kaws Flayed 35cm, increible estado', 30000, 1, 6, 1, 'product-1690171498873.jpg'),
(DEFAULT, 'Mercedes-Benz GLC Coupé: más estilizado, tecnológico y electrificado - 16 Valvulas', 'Nuevo Mercedes-Benz GLC Coupé: más estilizado, tecnológico y electrificado - 16 Valvulas', 75000000, 1, 1, 3, 'product-1690171817918.jpeg'),
(DEFAULT, 'Rolex Daytona', 'Rolex Daytona in Platinum Ice Blue Dial', 500000, 1, 2, 2, 'product-1690171874564.jpeg'),
(DEFAULT, 'Lego Sony Walkman and Cassette', 'Lego Sony Walkman and Cassette - en buen estado', 350000, 1, 3, 7, 'product-1690172016842.jpg'),
(DEFAULT, 'Louis Vuitton Cartera', 'Louis Vuitton Cartera - De cuero, hermosa combinación. En excelente estado', 650000, 1, 4, 5, 'product-1690172175630.jpg'),
(DEFAULT, 'Retro NES AV', 'Retro NES AV | Consolas Retro | En excelente estado', 250000, 1, 5, 7, 'product-1690172318207.jpg');

insert into carrito values 
(DEFAULT, 2, 12, 1, 500000),
(DEFAULT, 2, 9, 1, 340200),
(DEFAULT, 2, 15, 1, 250000);

insert into oferta values 
(DEFAULT, 1),
(DEFAULT, 3),
(DEFAULT, 5),
(DEFAULT, 7),
(DEFAULT, 9),
(DEFAULT, 11),
(DEFAULT, 13);

insert into novedades values 
(DEFAULT, 2),
(DEFAULT, 4),
(DEFAULT, 6),
(DEFAULT, 8),
(DEFAULT, 10),
(DEFAULT, 12),
(DEFAULT, 14),
(DEFAULT, 15);