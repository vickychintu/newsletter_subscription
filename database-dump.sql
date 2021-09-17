-- MySQL dump 10.13  Distrib 8.0.26, for Linux (x86_64)
--
-- Host: localhost    Database: Zocket_tech
-- ------------------------------------------------------
-- Server version	8.0.26-0ubuntu0.20.04.2

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `email_id` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('Brenden30@yahoo.com','2021-09-15 17:11:37'),('ccmhv@gmail.com','2021-09-15 21:17:53'),('dffdf@hhjj.com','2021-09-15 21:00:13'),('fdjmfdmfgmx@ugyt.com','2021-09-14 15:54:06'),('fffggg@yyy.com','2021-09-15 21:05:54'),('fgfgf@gmail.com','2021-09-15 21:13:36'),('fgfgfgf@ggg.com','2021-09-15 21:04:03'),('fred@hootmail.com','2021-09-15 20:57:19'),('fred@hotmail.com','2021-09-15 20:57:43'),('freee@hee.com','2021-09-15 21:01:53'),('gdxjccfc@hvb.com','2021-09-15 21:03:20'),('kaarthi1312@gmail.com','2021-09-15 19:11:10'),('Lenny_OHara@hotmail.com','2021-09-14 16:38:13'),('Maegan68@yahoo.com','2021-09-15 17:10:47'),('Marjory_Rosenbaum@yahoo.com','2021-09-14 16:36:33'),('nvxxvc@bfds.com','2021-09-15 20:32:46'),('nxxng@fgdh.com','2021-09-15 20:20:15'),('seeenu@hgggh.com','2021-09-15 19:47:55'),('seenu@hggh.com','2021-09-15 19:37:16'),('vbfvdvd@gvghj.com','2021-09-15 21:05:21'),('vdtdhvhtf@gmail.com','2021-09-15 21:14:54'),('vignesh@gmail.com','2021-09-15 17:17:31'),('Wilford.Quitzon53@yahoo.com','2021-09-14 16:37:37'),('wqddwq@gmail.com','2021-09-15 20:33:06');
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

-- Dump completed on 2021-09-16  2:59:29
