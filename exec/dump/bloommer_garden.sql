-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: j8a205.p.ssafy.io    Database: bloommer
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `garden`
--

DROP TABLE IF EXISTS `garden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `garden` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) DEFAULT NULL,
  `modified_date` datetime(6) DEFAULT NULL,
  `deadline` datetime(6) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `type` int DEFAULT NULL,
  `uid` bigint DEFAULT NULL,
  `mid` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcx743rpt5yh4aptp39ri88g1q` (`uid`),
  KEY `FK6lv4nfmdde6choyncf6ic3njk` (`mid`),
  CONSTRAINT `FK6lv4nfmdde6choyncf6ic3njk` FOREIGN KEY (`mid`) REFERENCES `music` (`id`),
  CONSTRAINT `FKcx743rpt5yh4aptp39ri88g1q` FOREIGN KEY (`uid`) REFERENCES `member` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `garden`
--

LOCK TABLES `garden` WRITE;
/*!40000 ALTER TABLE `garden` DISABLE KEYS */;
INSERT INTO `garden` VALUES (1,'2023-04-06 17:24:24.429316','2023-04-06 17:24:24.429316','2023-04-30 23:59:59.000000',NULL,0,1,NULL),(2,'2023-04-06 17:35:04.192499','2023-04-06 17:35:04.192499','2023-04-30 23:59:59.000000',NULL,0,2,NULL),(4,'2023-04-06 17:39:05.990031','2023-04-06 17:39:05.990031','2023-04-30 23:59:59.000000',NULL,0,4,NULL),(5,'2023-04-06 17:40:43.288839','2023-04-06 17:40:43.288839','2023-04-30 23:59:59.000000',NULL,0,5,NULL),(6,'2023-04-06 17:53:17.040500','2023-04-06 17:53:17.040500','2023-04-30 23:59:59.000000',NULL,0,6,NULL),(7,'2023-04-06 17:53:32.459653','2023-04-06 17:53:32.459653','2023-04-30 23:59:59.000000',NULL,0,7,NULL),(8,'2023-04-06 19:55:15.334081','2023-04-06 19:55:15.334081','2023-04-30 23:59:59.000000',NULL,0,9,NULL),(10,'2023-04-06 20:02:49.401833','2023-04-06 20:02:49.401833','2023-04-30 23:59:59.000000',NULL,0,12,NULL),(11,'2023-04-06 20:06:24.344902','2023-04-06 20:06:24.344902','2023-04-30 23:59:59.000000',NULL,0,13,NULL),(13,'2023-03-18 00:00:00.000000','2023-03-20 00:00:00.000000','2023-03-31 00:00:00.000000',NULL,0,6,NULL),(14,'2023-04-06 21:59:28.128068','2023-04-06 21:59:28.128068','2023-04-30 23:59:59.000000',NULL,2,15,NULL),(15,'2023-04-06 22:10:43.663637','2023-04-06 22:10:43.663637','2023-04-30 23:59:59.000000',NULL,0,16,NULL),(16,'2023-03-15 00:00:00.000000','2023-03-15 00:00:00.000000','2023-03-31 23:59:59.000000',NULL,0,4,NULL),(17,'2023-04-07 00:53:19.062474','2023-04-07 00:53:19.062474','2023-04-30 23:59:59.000000',NULL,1,17,NULL),(18,'2023-04-07 01:58:29.888551','2023-04-07 01:58:29.888551','2023-04-30 23:59:59.000000',NULL,0,19,NULL);
/*!40000 ALTER TABLE `garden` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-07  3:19:21
