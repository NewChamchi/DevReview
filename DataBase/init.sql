-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: devreview
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `answer` (
  `ans_id` int(11) NOT NULL AUTO_INCREMENT,
  `ques_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `ans_content` varchar(45) NOT NULL,
  `ans_is_auto` tinyint(4) DEFAULT NULL,
  `ans_time` datetime DEFAULT NULL,
  PRIMARY KEY (`ans_id`),
  KEY `user_id_idx` (`user_id`),
  KEY `ques_id_idx` (`ques_id`),
  CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `answer_ibfk_2` FOREIGN KEY (`ques_id`) REFERENCES `question` (`ques_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,1,1,'answerishere',0,'2023-05-25 03:34:12');
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attached_file`
--

DROP TABLE IF EXISTS `attached_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `attached_file` (
  `file_id` int(11) NOT NULL AUTO_INCREMENT,
  `file_extention` varchar(255) DEFAULT NULL,
  `file_address` varchar(255) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `chat_id` int(11) NOT NULL,
  PRIMARY KEY (`file_id`),
  KEY `chatid_idx` (`chat_id`),
  CONSTRAINT `chat_id` FOREIGN KEY (`chat_id`) REFERENCES `chatting` (`chat_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attached_file`
--

LOCK TABLES `attached_file` WRITE;
/*!40000 ALTER TABLE `attached_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `attached_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chatting`
--

DROP TABLE IF EXISTS `chatting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `chatting` (
  `chat_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `chat_content` varchar(45) NOT NULL,
  `chat_time` datetime NOT NULL,
  `chat_type` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `file_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`chat_id`),
  KEY `user_id_idx` (`user_id`),
  KEY `file_id_idx` (`file_id`),
  KEY `group_idd_idx` (`group_id`),
  CONSTRAINT `chatting_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `file_id` FOREIGN KEY (`file_id`) REFERENCES `attached_file` (`file_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `group_idd` FOREIGN KEY (`group_id`) REFERENCES `group` (`group_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chatting`
--

LOCK TABLES `chatting` WRITE;
/*!40000 ALTER TABLE `chatting` DISABLE KEYS */;
/*!40000 ALTER TABLE `chatting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `comment` (
  `comment_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `comment_content` varchar(255) DEFAULT NULL,
  `comment_time` datetime(6) DEFAULT NULL,
  `ans_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `ans_id_idx` (`ans_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `FK2md1vioaqfcau5jr6d9umllva` FOREIGN KEY (`ans_id`) REFERENCES `answer` (`ans_id`),
  CONSTRAINT `FK8kcum44fvpupyw6f5baccx25c` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group`
--

DROP TABLE IF EXISTS `group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `group` (
  `group_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(45) NOT NULL,
  `group_intro` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group`
--

LOCK TABLES `group` WRITE;
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
/*!40000 ALTER TABLE `group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `notice` (
  `notice_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `notice_title` varchar(45) NOT NULL,
  `notice_content` varchar(45) NOT NULL,
  `notice_time` datetime DEFAULT NULL,
  PRIMARY KEY (`notice_id`),
  KEY `group_id_idx` (`group_id`),
  CONSTRAINT `group_id` FOREIGN KEY (`group_id`) REFERENCES `group` (`group_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `post` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_title` varchar(45) NOT NULL,
  `post_content` varchar(45) NOT NULL,
  `group_id` int(11) NOT NULL,
  `post_time` datetime DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `group_id_idx` (`group_id`),
  CONSTRAINT `group_id_idx` FOREIGN KEY (`group_id`) REFERENCES `group` (`group_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_tag`
--

DROP TABLE IF EXISTS `post_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `post_tag` (
  `post_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  `posttag_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`posttag_id`),
  KEY `tag_id_idx` (`tag_id`),
  KEY `tag_id_ix` (`tag_id`),
  KEY `post_idd_idx` (`post_id`),
  CONSTRAINT `post_idd` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tag_id_ix` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`tag_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_tag`
--

LOCK TABLES `post_tag` WRITE;
/*!40000 ALTER TABLE `post_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `question` (
  `ques_id` int(11) NOT NULL AUTO_INCREMENT,
  `ques_title` varchar(45) NOT NULL,
  `user_id` int(11) NOT NULL,
  `ques_content` varchar(45) NOT NULL,
  `ques_time` datetime DEFAULT NULL,
  `ques_hit` int(11) NOT NULL,
  PRIMARY KEY (`ques_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'newpost',1,'newcontent','2023-05-25 03:33:38',2);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_tag`
--

DROP TABLE IF EXISTS `question_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `question_tag` (
  `ques_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  `questag_id` bigint(20) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`questag_id`),
  KEY `question_tag_ibfk_1` (`ques_id`),
  KEY `tag_idd_idx` (`tag_id`),
  CONSTRAINT `question_tag_ibfk_1` FOREIGN KEY (`ques_id`) REFERENCES `question` (`ques_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tag_id` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`tag_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_tag`
--

LOCK TABLES `question_tag` WRITE;
/*!40000 ALTER TABLE `question_tag` DISABLE KEYS */;
INSERT INTO `question_tag` VALUES (1,1,1);
/*!40000 ALTER TABLE `question_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tag` (
  `tag_id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(45) NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'Spring');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `user_email` varchar(45) NOT NULL,
  `user_mic` int(11) DEFAULT NULL,
  `user_audio` int(11) DEFAULT NULL,
  `user_login_id` varchar(45) NOT NULL,
  `user_password` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'kim','kim@gmail.com',1,1,'kim01','kimkim');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_group`
--

DROP TABLE IF EXISTS `user_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_group` (
  `group_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_group_is_block` tinyint(4) NOT NULL DEFAULT '0',
  `usergroup_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`usergroup_id`),
  KEY `user_id_idx` (`user_id`),
  KEY `group_id_ix_idx` (`group_id`),
  CONSTRAINT `group_id_ix` FOREIGN KEY (`group_id`) REFERENCES `group` (`group_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `user_id_ix` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_group`
--

LOCK TABLES `user_group` WRITE;
/*!40000 ALTER TABLE `user_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_group` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-26 22:38:01
