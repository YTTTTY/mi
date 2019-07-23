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

 Date: 23/07/2019 23:47:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`  (
  `userid` int(11) NOT NULL,
  `commodityid` int(11) NOT NULL,
  `choice` int(11) NULL DEFAULT NULL,
  `number` int(11) NULL DEFAULT NULL COMMENT 'number',
  PRIMARY KEY (`userid`, `commodityid`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES (666, 19, 1, 2);

SET FOREIGN_KEY_CHECKS = 1;
