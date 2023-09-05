-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-09-2023 a las 00:20:35
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `antiria_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asesoramiento`
--

CREATE TABLE `asesoramiento` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `asunto` varchar(100) NOT NULL,
  `mensaje` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `asesoramiento`
--

INSERT INTO `asesoramiento` (`id`, `nombre`, `email`, `telefono`, `asunto`, `mensaje`) VALUES
(1, 'Alejo Pequeño', 'alejopequeno25@gmail.com', '01167290574', 'Como comprar?', 'Tengo algunos problemas al comprar, quisiera saber si me pueden ayudar?'),
(2, 'alejo pequeño', 'alejopequeno25@gmail.com', '01167290574', 'Como comprar?', 'gfsdkmdmgksdfmgksfgkmsfg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_prod` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `id_user`, `id_prod`, `cantidad`, `precio`) VALUES
(1, 2, 12, 1, 500000),
(2, 2, 9, 1, 340200),
(3, 2, 15, 1, 250000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`) VALUES
(1, 'Arte'),
(2, 'Reloj'),
(3, 'Reliquia'),
(4, 'Mueble'),
(5, 'Joyeria'),
(6, 'Musica'),
(7, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenesprod`
--

CREATE TABLE `imagenesprod` (
  `id` int(11) NOT NULL,
  `id_prod` int(11) NOT NULL,
  `imagen_prod` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagenesprod`
--

INSERT INTO `imagenesprod` (`id`, `id_prod`, `imagen_prod`) VALUES
(1, 1, 'product-1690156954077.jpg'),
(2, 2, 'product-1690157231193.jpg'),
(3, 3, 'product-1690157493629.jpg'),
(4, 4, 'product-1690157697224.jpg'),
(5, 5, 'product-1690157815738.jpg'),
(6, 6, 'product-1690157891561.jpg'),
(7, 7, 'product-1690158066325.jpg'),
(8, 8, 'product-1690159646325.jpg'),
(9, 9, 'product-1690159769046.jpg'),
(10, 10, 'product-1690171498873.jpg'),
(11, 11, 'product-1690171817918.jpeg'),
(12, 12, 'product-1690171874564.jpeg'),
(13, 13, 'product-1690172016842.jpg'),
(14, 14, 'product-1690172175630.jpg'),
(15, 15, 'product-1690172318207.jpg'),
(16, 20, 'product-1692118664669.jpg'),
(17, 1, 'product-1690156954078.jpg'),
(18, 7, 'product-1690158066326.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`id`, `nombre`) VALUES
(1, 'Mercedes Benz'),
(2, 'Rolex'),
(3, 'Sony'),
(4, 'Louis Vuitton'),
(5, 'Nintendo'),
(6, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `id_prod` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `id_prod`) VALUES
(1, 2),
(2, 4),
(3, 6),
(4, 8),
(5, 10),
(6, 12),
(7, 14),
(8, 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oferta`
--

CREATE TABLE `oferta` (
  `id` int(11) NOT NULL,
  `id_prod` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `oferta`
--

INSERT INTO `oferta` (`id`, `id_prod`) VALUES
(1, 1),
(2, 3),
(3, 5),
(4, 7),
(5, 9),
(6, 11),
(7, 13),
(9, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `precio` float NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_marca` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `nombre`, `descripcion`, `precio`, `id_user`, `id_marca`, `id_categoria`) VALUES
(1, 'Busto de mujer joven', 'Busto de mujer joven Paris, otoño 1906. Óleo sobre lienzo. 54 x 42 cm.', 150000, 1, 6, 1),
(2, 'Reloj de Bolsillo', 'Reloj de bolsillo (Ernest Magnin, Besançon, ca. 1920)', 80000, 1, 6, 2),
(3, 'Auto lamborghini diablo', 'En 1993, Lamborghini lanzó el Diablo VT, el primer Lambo Gran Turismo equipado con tracción en las cuatro ruedas.', 80000000, 1, 6, 3),
(4, 'Juego Lego de mesa', 'Juego Lego antiguo-Lego System año 1970.', 70000, 1, 6, 3),
(5, 'RARO MANUSCRITO DE LIBRO CRISTIANO COPTO ETIOPÍA GE EZ BIBLIA', 'Rarísimo manuscrito etíope de un libro cristiano copto, cuidadosamente escrito a mano con tinta sobre vitela (o pergamino, un material de piel animal)', 70000, 1, 6, 3),
(6, 'Armario triple caoba llama con dos cajones y espejo original', 'Armario  de caoba Vintage triple armario con espejo.', 250000, 1, 6, 4),
(7, 'Cartier - Panthère Ruban - 2449 - Mujer - 1980', 'Reloj Cartier - Panthère Ruban Oro Amarillo de 18 Quilates y 12 Diamantes redondos con engaste original de Cartier de 0,03 quilates.', 170000, 1, 6, 2),
(8, 'Panini - World Cup España 82 - Set de adhesivos sueltos completo - 1982', 'Panini FIFA World Cup 1982 ESPANA / SPAIN - ¡Colección oficial de Panini para la FIFA World Cup 1982', 40000, 1, 6, 3),
(9, 'Lambertus Jacobus Johannes Boers (1903-1981) - The old man', 'Lambertus Jacobus Johannes Boers (1903-1981) - The old man', 340200, 1, 6, 1),
(10, 'Figura Companion Kaws Flayed 35cm', 'Figura Companion Kaws Flayed 35cm, increible estado', 30000, 1, 6, 1),
(11, 'Mercedes-Benz GLC Coupé: más estilizado, tecnológico y electrificado - 16 Valvulas', 'Nuevo Mercedes-Benz GLC Coupé: más estilizado, tecnológico y electrificado - 16 Valvulas', 75000000, 1, 1, 3),
(12, 'Rolex Daytona', 'Rolex Daytona in Platinum Ice Blue Dial', 500000, 1, 2, 2),
(13, 'Lego Sony Walkman and Cassette', 'Lego Sony Walkman and Cassette - en buen estado', 350000, 1, 3, 6),
(14, 'Louis Vuitton Cartera', 'Louis Vuitton Cartera - De cuero, hermosa combinación. En excelente estado', 650000, 1, 4, 5),
(15, 'Retro NES AV', 'Retro NES AV | Consolas Retro | En excelente estado', 250000, 1, 5, 7),
(20, 'Primera edición comic - Iron Man', 'Primera edición comic - Iron Man', 250000, 1, 6, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `avatar` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `nombre`, `apellido`, `email`, `password`, `avatar`) VALUES
(1, 'Shrek', 'El Ogro', 'shrek@gmail.com', '$2a$10$TJxLsHwoFnakhFCE55ukXu7WU8AWg2NaCpvrGKf40fxjAB4UVJDpC', 'user-1690156726211.jpg'),
(2, 'Jorge', 'Curioso', 'jorgecurioso@yahoo.com', '$2a$10$RjO41tcLrMuKH57OJ56AtOsHmdyyWbxItqtIxnlt9OBq7Ho/kaRU.', 'user-1690157620808.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asesoramiento`
--
ALTER TABLE `asesoramiento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_prod` (`id_prod`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imagenesprod`
--
ALTER TABLE `imagenesprod`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_prod` (`id_prod`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_prod` (`id_prod`);

--
-- Indices de la tabla `oferta`
--
ALTER TABLE `oferta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_prod` (`id_prod`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_marca` (`id_marca`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asesoramiento`
--
ALTER TABLE `asesoramiento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `imagenesprod`
--
ALTER TABLE `imagenesprod`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `oferta`
--
ALTER TABLE `oferta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`id_prod`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `imagenesprod`
--
ALTER TABLE `imagenesprod`
  ADD CONSTRAINT `imagenesprod_ibfk_1` FOREIGN KEY (`id_prod`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD CONSTRAINT `novedades_ibfk_1` FOREIGN KEY (`id_prod`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `oferta`
--
ALTER TABLE `oferta`
  ADD CONSTRAINT `oferta_ibfk_1` FOREIGN KEY (`id_prod`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`id_marca`) REFERENCES `marca` (`id`),
  ADD CONSTRAINT `product_ibfk_3` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
