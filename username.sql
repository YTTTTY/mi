/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3307
 Source Server Type    : MySQL
 Source Server Version : 50714
 Source Host           : localhost:3307
 Source Schema         : mi

 Target Server Type    : MySQL
 Target Server Version : 50714
 File Encoding         : 65001

 Date: 23/07/2019 23:47:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for username
-- ----------------------------
DROP TABLE IF EXISTS `username`;
CREATE TABLE `username`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 668 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of username
-- ----------------------------
INSERT INTO `username` VALUES (666, '123', '13112688275');
INSERT INTO `username` VALUES (667, 'qq123456789', '13112688276');

SET FOREIGN_KEY_CHECKS = 1;
