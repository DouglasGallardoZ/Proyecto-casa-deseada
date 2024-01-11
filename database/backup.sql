-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: casa_deseada
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `door_types`
--

CREATE database casa_deseada;

use casa_deseada;

DROP TABLE IF EXISTS `door_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `door_types` (
  `door_type_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` double(5,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`door_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `door_types`
--

LOCK TABLES `door_types` WRITE;
/*!40000 ALTER TABLE `door_types` DISABLE KEYS */;
INSERT INTO `door_types` VALUES (1,'Seguridad normal',20.00,'2023-03-02 00:10:13','2023-03-02 00:10:13'),(2,'Seguridad multilock',45.00,'2023-03-02 00:10:31','2023-03-02 00:10:31');
/*!40000 ALTER TABLE `door_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faucet_types`
--

DROP TABLE IF EXISTS `faucet_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faucet_types` (
  `faucet_type_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` double(5,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`faucet_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faucet_types`
--

LOCK TABLES `faucet_types` WRITE;
/*!40000 ALTER TABLE `faucet_types` DISABLE KEYS */;
INSERT INTO `faucet_types` VALUES (1,'Grifería americana',30.00,'2023-03-02 00:11:00','2023-03-02 00:11:00'),(2,'Grifería italiana',50.00,'2023-03-02 00:11:25','2023-03-02 00:11:25');
/*!40000 ALTER TABLE `faucet_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `floor_types`
--

DROP TABLE IF EXISTS `floor_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `floor_types` (
  `floor_type_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` double(5,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`floor_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `floor_types`
--

LOCK TABLES `floor_types` WRITE;
/*!40000 ALTER TABLE `floor_types` DISABLE KEYS */;
INSERT INTO `floor_types` VALUES (1,'Piso de porcelanato',50.00,'2023-03-02 00:08:57','2023-03-02 00:08:57'),(2,'Piso de marmol',65.00,'2023-03-02 00:09:17','2023-03-02 00:09:17'),(3,'Piso de marmol premium',900.00,'2023-03-02 00:09:17','2023-03-02 00:09:17');
/*!40000 ALTER TABLE `floor_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `house_images`
--

DROP TABLE IF EXISTS `house_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `house_images` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `image_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `house_id` int NOT NULL,
  PRIMARY KEY (`image_id`),
  KEY `fk_house_images_houses` (`house_id`),
  CONSTRAINT `fk_house_images_houses` FOREIGN KEY (`house_id`) REFERENCES `houses` (`house_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `house_images`
--

LOCK TABLES `house_images` WRITE;
/*!40000 ALTER TABLE `house_images` DISABLE KEYS */;
INSERT INTO `house_images` VALUES (1,'resources/Esmeralda/esmeralda_1.jpeg','2023-02-05 07:15:00','2023-02-05 07:15:00',1),(2,'resources/Esmeralda/esmeralda_2.jpeg','2023-02-05 07:15:00','2023-02-05 07:15:00',1),(3,'resources/Europa/europa_1.jpeg','2023-02-05 07:15:00','2023-02-05 07:15:00',2),(4,'resources/Europa/europa_2.jpeg','2023-02-05 07:15:00','2023-02-05 07:15:00',2),(5,'resources/Platino/platino_1.jpeg','2023-02-05 07:15:00','2023-02-05 07:15:00',3),(6,'resources/Platino/platino_2.jpeg','2023-02-05 07:15:00','2023-02-05 07:15:00',3),(7,'resources/Primavera/primavera_1.jpeg','2023-02-05 07:15:00','2023-02-05 07:15:00',4),(8,'resources/Primavera/primavera_2.jpeg','2023-02-05 07:15:00','2023-02-05 07:15:00',4);
/*!40000 ALTER TABLE `house_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `houses`
--

DROP TABLE IF EXISTS `houses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `houses` (
  `house_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `square_meters` int NOT NULL,
  `rooms_number` int NOT NULL,
  `floors_number` int NOT NULL,
  `bathrooms_number` int NOT NULL,
  `price` double(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`house_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `houses`
--

LOCK TABLES `houses` WRITE;
/*!40000 ALTER TABLE `houses` DISABLE KEYS */;
INSERT INTO `houses` VALUES (1,'Casa Esmeralda',85,2,1,1,60000.00,'2023-02-05 07:14:03','2023-02-05 07:14:03'),(2,'Casa Europa',90,3,2,2,70000.00,'2023-02-05 07:14:03','2023-02-05 07:14:03'),(3,'Casa Platino',115,3,2,3,80000.00,'2023-02-05 07:14:03','2023-02-05 07:14:03'),(4,'Casa Primavera',140,3,2,3,90000.00,'2023-02-05 07:14:03','2023-02-05 07:14:03');
/*!40000 ALTER TABLE `houses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proformas`
--

DROP TABLE IF EXISTS `proformas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proformas` (
  `proforma_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `house_id` int NOT NULL,
  `floor_type_id` int NOT NULL,
  `door_type_id` int NOT NULL,
  `faucet_type_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`proforma_id`),
  KEY `fk_proformas_user` (`user_id`),
  KEY `fk_proformas_house` (`house_id`),
  KEY `fk_proformas_floor_types` (`floor_type_id`),
  KEY `fk_proformas_door_types` (`door_type_id`),
  KEY `fk_proformas_faucet_types` (`faucet_type_id`),
  CONSTRAINT `fk_proformas_door_types` FOREIGN KEY (`door_type_id`) REFERENCES `door_types` (`door_type_id`),
  CONSTRAINT `fk_proformas_faucet_types` FOREIGN KEY (`faucet_type_id`) REFERENCES `faucet_types` (`faucet_type_id`),
  CONSTRAINT `fk_proformas_floor_types` FOREIGN KEY (`floor_type_id`) REFERENCES `floor_types` (`floor_type_id`),
  CONSTRAINT `fk_proformas_house` FOREIGN KEY (`house_id`) REFERENCES `houses` (`house_id`),
  CONSTRAINT `fk_proformas_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proformas`
--

LOCK TABLES `proformas` WRITE;
/*!40000 ALTER TABLE `proformas` DISABLE KEYS */;
INSERT INTO `proformas` VALUES (1,1,1,1,1,2,'2023-11-12 07:31:39','2023-11-12 07:32:18');
/*!40000 ALTER TABLE `proformas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(10) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(60) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `dni` (`dni`),
  UNIQUE KEY `phone_number` (`phone_number`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'0927587006','Douglas','Gallardo','0989997750','douglas@gmail.com','Miprimeracontraseña2023','2023-11-12 07:27:58','2023-11-12 07:27:58');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-07  2:16:24
