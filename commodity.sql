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

 Date: 23/07/2019 23:47:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for commodity
-- ----------------------------
DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity`  (
  `id` int(1) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `images` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` int(255) NULL DEFAULT NULL,
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `product` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `productcon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `childimg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `stock` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 129 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of commodity
-- ----------------------------
INSERT INTO `commodity` VALUES (1, '小米8', 'mi1.png', '小米1', 665, '1999', 'now', NULL, 'mic1.jpg|fen1.jpg|fen2.jpg|fen3.jpg', 5);
INSERT INTO `commodity` VALUES (2, '小米6', 'mi2.png', '小米2', 862, '1999', 'now', NULL, 'mic2.jpg|fen4.jpg|fen5.jpg|fen6.jpg', 7);
INSERT INTO `commodity` VALUES (3, '小米3', 'mi3.png', '小米3', 1059, '1999', 'now', NULL, 'mic3.jpg|fen7.jpg|fen8.jpg|fen9.jpg', 9);
INSERT INTO `commodity` VALUES (4, '小米4', 'mi4.png', '小米4', 1256, '1999', 'now', NULL, 'mic4.jpg|fen10.jpg|fen11.jpg|fen12.jpg', 11);
INSERT INTO `commodity` VALUES (5, '小米4限量版', 'mi5.png', '小米5', 1453, '1999', 'saleoff', '8折', 'mic5.jpg|fen13.jpg|fen14.jpg|fen15.jpg', 13);
INSERT INTO `commodity` VALUES (6, '小米6', 'mi6.png', '小米6', 1650, '1999', 'now', NULL, 'mic6.jpg|fen16.jpg|fen17.jpg|fen18.jpg', 15);
INSERT INTO `commodity` VALUES (7, '红米7', 'mi7.png', '小米7', 1847, '1999', 'now', NULL, 'mic7.jpg|fen19.jpg|fen20.jpg|fen21.jpg', 13);
INSERT INTO `commodity` VALUES (8, '红米8', 'mi8.png', '小米8', 564, '1999', 'saleoff', '6折', 'mic8.jpg|fen22.jpg|fen23.jpg|fen24.jpg', 11);
INSERT INTO `commodity` VALUES (9, '红米9', 'mi9.png', '小米9', 600, '1999', 'now', NULL, 'mic9.jpg|fen25.jpg|fen26.jpg|fen27.jpg', 9);
INSERT INTO `commodity` VALUES (10, '红米10', 'mi10.png', '小米10', 636, '1999', 'now', NULL, 'mic10.jpg|fen28.jpg|fen29.jpg|fen30.jpg', 7);
INSERT INTO `commodity` VALUES (11, '小米笔记本11', 'mi11.png', '小米11', 672, '1999', 'now', NULL, 'mic11.jpg|fen28.jpg|fen29.jpg|fen30.jpg', 5);
INSERT INTO `commodity` VALUES (12, '小米笔记本12', 'mi12.png', '小米12', 708, '1999', 'now', NULL, 'mic12.jpg', 6);
INSERT INTO `commodity` VALUES (13, '小米笔记本13', 'mi13.png', '小米13', 744, '1999', 'now', NULL, 'mic13.jpg|fen31.jpg|fen32.jpg|fen33.jpg', 7);
INSERT INTO `commodity` VALUES (14, '小米笔记本14', 'mi14.png', '小米14', 780, '1999', 'saleoff', '6折', 'mic14.jpg', 8);
INSERT INTO `commodity` VALUES (15, '小米笔记本15', 'mi15.png', '小米15', 816, '1999', 'now', NULL, 'mic15.jpg|fen34.jpg|fen35.jpg', 9);
INSERT INTO `commodity` VALUES (16, '小米平板16', 'mi16.png', '小米16', 852, '1999', 'now', NULL, 'mic16.jpg|fen36.jpg|fen37.jpg|fen38.jpg', 10);
INSERT INTO `commodity` VALUES (17, '小米摄像头', 'mi17.png', '小米17', 888, '1999', 'saleoff', '6折', 'mic17.jpg|fen40.jpg', 11);
INSERT INTO `commodity` VALUES (18, '小米蓝牙耳机', 'mi18.png', '小米18', 924, '1999', 'now', NULL, 'mic18.jpg|fen41.jpg|fen42.jpg|fen43.jpg', 12);
INSERT INTO `commodity` VALUES (19, '小米音响', 'mi19.png', '小米19', 960, '1999', 'now', NULL, 'mic19.jpg', 16);
INSERT INTO `commodity` VALUES (20, '小米充电宝', 'mi20.png', '小米20', 996, '1999', 'now', NULL, 'mic20.jpg|fen44.jpg', 11);
INSERT INTO `commodity` VALUES (21, '小米音响', 'mi19.png', '小米19', 960, '1999', 'now', NULL, 'mic19.jpg', 16);
INSERT INTO `commodity` VALUES (22, '小米8', 'mi1.png', '小米1', 665, '1999', 'now', NULL, 'mic1.jpg|fen1.jpg|fen2.jpg|fen3.jpg', 5);
INSERT INTO `commodity` VALUES (23, '小米6', 'mi2.png', '小米2', 862, '1999', 'now', NULL, 'mic2.jpg|fen4.jpg|fen5.jpg|fen6.jpg', 7);
INSERT INTO `commodity` VALUES (24, '小米3', 'mi3.png', '小米3', 1059, '1999', 'now', NULL, 'mic3.jpg|fen7.jpg|fen8.jpg|fen9.jpg', 9);
INSERT INTO `commodity` VALUES (25, '小米4', 'mi4.png', '小米4', 1256, '1999', 'now', NULL, 'mic4.jpg|fen10.jpg|fen11.jpg|fen12.jpg', 11);
INSERT INTO `commodity` VALUES (26, '小米4限量版', 'mi5.png', '小米5', 1453, '1999', 'saleoff', '8折', 'mic5.jpg|fen13.jpg|fen14.jpg|fen15.jpg', 13);
INSERT INTO `commodity` VALUES (27, '小米6', 'mi6.png', '小米6', 1650, '1999', 'now', NULL, 'mic6.jpg|fen16.jpg|fen17.jpg|fen18.jpg', 15);
INSERT INTO `commodity` VALUES (28, '红米7', 'mi7.png', '小米7', 1847, '1999', 'now', NULL, 'mic7.jpg|fen19.jpg|fen20.jpg|fen21.jpg', 13);
INSERT INTO `commodity` VALUES (29, '红米8', 'mi8.png', '小米8', 564, '1999', 'saleoff', '6折', 'mic8.jpg|fen22.jpg|fen23.jpg|fen24.jpg', 11);
INSERT INTO `commodity` VALUES (30, '红米9', 'mi9.png', '小米9', 600, '1999', 'now', NULL, 'mic9.jpg|fen25.jpg|fen26.jpg|fen27.jpg', 9);
INSERT INTO `commodity` VALUES (31, '红米10', 'mi10.png', '小米10', 636, '1999', 'now', NULL, 'mic10.jpg|fen28.jpg|fen29.jpg|fen30.jpg', 7);
INSERT INTO `commodity` VALUES (32, '小米笔记本11', 'mi11.png', '小米11', 672, '1999', 'now', NULL, 'mic11.jpg|fen28.jpg|fen29.jpg|fen30.jpg', 5);
INSERT INTO `commodity` VALUES (33, '小米笔记本12', 'mi12.png', '小米12', 708, '1999', 'now', NULL, 'mic12.jpg', 6);
INSERT INTO `commodity` VALUES (34, '小米笔记本13', 'mi13.png', '小米13', 744, '1999', 'now', NULL, 'mic13.jpg|fen31.jpg|fen32.jpg|fen33.jpg', 7);
INSERT INTO `commodity` VALUES (35, '小米笔记本14', 'mi14.png', '小米14', 780, '1999', 'saleoff', '6折', 'mic14.jpg', 8);
INSERT INTO `commodity` VALUES (36, '小米笔记本15', 'mi15.png', '小米15', 816, '1999', 'now', NULL, 'mic15.jpg|fen34.jpg|fen35.jpg', 9);
INSERT INTO `commodity` VALUES (37, '小米平板16', 'mi16.png', '小米16', 852, '1999', 'now', NULL, 'mic16.jpg|fen36.jpg|fen37.jpg|fen38.jpg', 10);
INSERT INTO `commodity` VALUES (38, '小米摄像头', 'mi17.png', '小米17', 888, '1999', 'saleoff', '6折', 'mic17.jpg|fen40.jpg', 11);
INSERT INTO `commodity` VALUES (39, '小米蓝牙耳机', 'mi18.png', '小米18', 924, '1999', 'now', NULL, 'mic18.jpg|fen41.jpg|fen42.jpg|fen43.jpg', 12);
INSERT INTO `commodity` VALUES (40, '小米音响', 'mi19.png', '小米19', 960, '1999', 'now', NULL, 'mic19.jpg', 16);
INSERT INTO `commodity` VALUES (41, '小米充电宝', 'mi20.png', '小米20', 996, '1999', 'now', NULL, 'mic20.jpg|fen44.jpg', 11);
INSERT INTO `commodity` VALUES (42, '红米10', 'mi10.png', '小米10', 636, '1999', 'now', NULL, 'mic10.jpg|fen28.jpg|fen29.jpg|fen30.jpg', 7);
INSERT INTO `commodity` VALUES (43, '小米笔记本11', 'mi11.png', '小米11', 672, '1999', 'now', NULL, 'mic11.jpg|fen28.jpg|fen29.jpg|fen30.jpg', 5);
INSERT INTO `commodity` VALUES (44, '小米笔记本12', 'mi12.png', '小米12', 708, '1999', 'now', NULL, 'mic12.jpg', 6);
INSERT INTO `commodity` VALUES (45, '小米笔记本13', 'mi13.png', '小米13', 744, '1999', 'now', NULL, 'mic13.jpg|fen31.jpg|fen32.jpg|fen33.jpg', 7);
INSERT INTO `commodity` VALUES (46, '小米笔记本14', 'mi14.png', '小米14', 780, '1999', 'saleoff', '6折', 'mic14.jpg', 8);
INSERT INTO `commodity` VALUES (47, '小米笔记本15', 'mi15.png', '小米15', 816, '1999', 'now', NULL, 'mic15.jpg|fen34.jpg|fen35.jpg', 9);
INSERT INTO `commodity` VALUES (48, '小米平板16', 'mi16.png', '小米16', 852, '1999', 'now', NULL, 'mic16.jpg|fen36.jpg|fen37.jpg|fen38.jpg', 10);
INSERT INTO `commodity` VALUES (49, '小米摄像头', 'mi17.png', '小米17', 888, '1999', 'saleoff', '6折', 'mic17.jpg|fen40.jpg', 11);
INSERT INTO `commodity` VALUES (50, '小米蓝牙耳机', 'mi18.png', '小米18', 924, '1999', 'now', NULL, 'mic18.jpg|fen41.jpg|fen42.jpg|fen43.jpg', 12);
INSERT INTO `commodity` VALUES (51, '小米音响', 'mi19.png', '小米19', 960, '1999', 'now', NULL, 'mic19.jpg', 16);
INSERT INTO `commodity` VALUES (52, '小米充电宝', 'mi20.png', '小米20', 996, '1999', 'now', NULL, 'mic20.jpg|fen44.jpg', 11);
INSERT INTO `commodity` VALUES (53, '小米音响', 'mi19.png', '小米19', 960, '1999', 'now', NULL, 'mic19.jpg', 16);
INSERT INTO `commodity` VALUES (54, '小米8', 'mi1.png', '小米1', 665, '1999', 'now', NULL, 'mic1.jpg|fen1.jpg|fen2.jpg|fen3.jpg', 5);
INSERT INTO `commodity` VALUES (55, '小米6', 'mi2.png', '小米2', 862, '1999', 'now', NULL, 'mic2.jpg|fen4.jpg|fen5.jpg|fen6.jpg', 7);
INSERT INTO `commodity` VALUES (56, '小米3', 'mi3.png', '小米3', 1059, '1999', 'now', NULL, 'mic3.jpg|fen7.jpg|fen8.jpg|fen9.jpg', 9);
INSERT INTO `commodity` VALUES (57, '小米4', 'mi4.png', '小米4', 1256, '1999', 'now', NULL, 'mic4.jpg|fen10.jpg|fen11.jpg|fen12.jpg', 11);
INSERT INTO `commodity` VALUES (58, '小米4限量版', 'mi5.png', '小米5', 1453, '1999', 'saleoff', '8折', 'mic5.jpg|fen13.jpg|fen14.jpg|fen15.jpg', 13);
INSERT INTO `commodity` VALUES (59, '小米6', 'mi6.png', '小米6', 1650, '1999', 'now', NULL, 'mic6.jpg|fen16.jpg|fen17.jpg|fen18.jpg', 15);
INSERT INTO `commodity` VALUES (60, '红米7', 'mi7.png', '小米7', 1847, '1999', 'now', NULL, 'mic7.jpg|fen19.jpg|fen20.jpg|fen21.jpg', 13);
INSERT INTO `commodity` VALUES (61, '红米8', 'mi8.png', '小米8', 564, '1999', 'saleoff', '6折', 'mic8.jpg|fen22.jpg|fen23.jpg|fen24.jpg', 11);
INSERT INTO `commodity` VALUES (62, '小米8', 'mi1.png', '小米1', 665, '1999', 'now', NULL, 'mic1.jpg|fen1.jpg|fen2.jpg|fen3.jpg', 5);
INSERT INTO `commodity` VALUES (63, '小米6', 'mi2.png', '小米2', 862, '1999', 'now', NULL, 'mic2.jpg|fen4.jpg|fen5.jpg|fen6.jpg', 7);
INSERT INTO `commodity` VALUES (64, '小米3', 'mi3.png', '小米3', 1059, '1999', 'now', NULL, 'mic3.jpg|fen7.jpg|fen8.jpg|fen9.jpg', 9);
INSERT INTO `commodity` VALUES (65, '小米4', 'mi4.png', '小米4', 1256, '1999', 'now', NULL, 'mic4.jpg|fen10.jpg|fen11.jpg|fen12.jpg', 11);
INSERT INTO `commodity` VALUES (66, '小米4限量版', 'mi5.png', '小米5', 1453, '1999', 'saleoff', '8折', 'mic5.jpg|fen13.jpg|fen14.jpg|fen15.jpg', 13);
INSERT INTO `commodity` VALUES (67, '小米6', 'mi6.png', '小米6', 1650, '1999', 'now', NULL, 'mic6.jpg|fen16.jpg|fen17.jpg|fen18.jpg', 15);
INSERT INTO `commodity` VALUES (68, '红米7', 'mi7.png', '小米7', 1847, '1999', 'now', NULL, 'mic7.jpg|fen19.jpg|fen20.jpg|fen21.jpg', 13);
INSERT INTO `commodity` VALUES (69, '红米8', 'mi8.png', '小米8', 564, '1999', 'saleoff', '6折', 'mic8.jpg|fen22.jpg|fen23.jpg|fen24.jpg', 11);
INSERT INTO `commodity` VALUES (70, '红米9', 'mi9.png', '小米9', 600, '1999', 'now', NULL, 'mic9.jpg|fen25.jpg|fen26.jpg|fen27.jpg', 9);
INSERT INTO `commodity` VALUES (71, '红米10', 'mi10.png', '小米10', 636, '1999', 'now', NULL, 'mic10.jpg|fen28.jpg|fen29.jpg|fen30.jpg', 7);
INSERT INTO `commodity` VALUES (72, '小米笔记本11', 'mi11.png', '小米11', 672, '1999', 'now', NULL, 'mic11.jpg|fen28.jpg|fen29.jpg|fen30.jpg', 5);
INSERT INTO `commodity` VALUES (73, '小米笔记本12', 'mi12.png', '小米12', 708, '1999', 'now', NULL, 'mic12.jpg', 6);
INSERT INTO `commodity` VALUES (74, '小米笔记本13', 'mi13.png', '小米13', 744, '1999', 'now', NULL, 'mic13.jpg|fen31.jpg|fen32.jpg|fen33.jpg', 7);
INSERT INTO `commodity` VALUES (75, '小米笔记本14', 'mi14.png', '小米14', 780, '1999', 'saleoff', '6折', 'mic14.jpg', 8);
INSERT INTO `commodity` VALUES (76, '小米笔记本15', 'mi15.png', '小米15', 816, '1999', 'now', NULL, 'mic15.jpg|fen34.jpg|fen35.jpg', 9);
INSERT INTO `commodity` VALUES (77, '小米平板16', 'mi16.png', '小米16', 852, '1999', 'now', NULL, 'mic16.jpg|fen36.jpg|fen37.jpg|fen38.jpg', 10);
INSERT INTO `commodity` VALUES (78, '小米摄像头', 'mi17.png', '小米17', 888, '1999', 'saleoff', '6折', 'mic17.jpg|fen40.jpg', 11);
INSERT INTO `commodity` VALUES (79, '小米蓝牙耳机', 'mi18.png', '小米18', 924, '1999', 'now', NULL, 'mic18.jpg|fen41.jpg|fen42.jpg|fen43.jpg', 12);
INSERT INTO `commodity` VALUES (80, '小米音响', 'mi19.png', '小米19', 960, '1999', 'now', NULL, 'mic19.jpg', 16);
INSERT INTO `commodity` VALUES (81, '小米充电宝', 'mi20.png', '小米20', 996, '1999', 'now', NULL, 'mic20.jpg|fen44.jpg', 11);
INSERT INTO `commodity` VALUES (82, '红米10', 'mi10.png', '小米10', 636, '1999', 'now', NULL, 'mic10.jpg|fen28.jpg|fen29.jpg|fen30.jpg', 7);
INSERT INTO `commodity` VALUES (83, '小米笔记本11', 'mi11.png', '小米11', 672, '1999', 'now', NULL, 'mic11.jpg|fen28.jpg|fen29.jpg|fen30.jpg', 5);
INSERT INTO `commodity` VALUES (84, '小米笔记本12', 'mi12.png', '小米12', 708, '1999', 'now', NULL, 'mic12.jpg', 6);
INSERT INTO `commodity` VALUES (85, '小米笔记本13', 'mi13.png', '小米13', 744, '1999', 'now', NULL, 'mic13.jpg|fen31.jpg|fen32.jpg|fen33.jpg', 7);
INSERT INTO `commodity` VALUES (86, '小米笔记本14', 'mi14.png', '小米14', 780, '1999', 'saleoff', '6折', 'mic14.jpg', 8);
INSERT INTO `commodity` VALUES (87, '小米笔记本15', 'mi15.png', '小米15', 816, '1999', 'now', NULL, 'mic15.jpg|fen34.jpg|fen35.jpg', 9);
INSERT INTO `commodity` VALUES (88, '小米平板16', 'mi16.png', '小米16', 852, '1999', 'now', NULL, 'mic16.jpg|fen36.jpg|fen37.jpg|fen38.jpg', 10);
INSERT INTO `commodity` VALUES (89, '小米摄像头', 'mi17.png', '小米17', 888, '1999', 'saleoff', '6折', 'mic17.jpg|fen40.jpg', 11);
INSERT INTO `commodity` VALUES (90, '小米蓝牙耳机', 'mi18.png', '小米18', 924, '1999', 'now', NULL, 'mic18.jpg|fen41.jpg|fen42.jpg|fen43.jpg', 12);
INSERT INTO `commodity` VALUES (91, '小米音响', 'mi19.png', '小米19', 960, '1999', 'now', NULL, 'mic19.jpg', 16);
INSERT INTO `commodity` VALUES (92, '小米充电宝', 'mi20.png', '小米20', 996, '1999', 'now', NULL, 'mic20.jpg|fen44.jpg', 11);
INSERT INTO `commodity` VALUES (93, '红米10', 'mi10.png', '小米10', 636, '1999', 'now', NULL, 'mic10.jpg|fen28.jpg|fen29.jpg|fen30.jpg', 7);
INSERT INTO `commodity` VALUES (94, '小米笔记本11', 'mi11.png', '小米11', 672, '1999', 'now', NULL, 'mic11.jpg|fen28.jpg|fen29.jpg|fen30.jpg', 5);
INSERT INTO `commodity` VALUES (95, '小米笔记本12', 'mi12.png', '小米12', 708, '1999', 'now', NULL, 'mic12.jpg', 6);
INSERT INTO `commodity` VALUES (96, '小米笔记本13', 'mi13.png', '小米13', 744, '1999', 'now', NULL, 'mic13.jpg|fen31.jpg|fen32.jpg|fen33.jpg', 7);
INSERT INTO `commodity` VALUES (97, '小米笔记本14', 'mi14.png', '小米14', 780, '1999', 'saleoff', '6折', 'mic14.jpg', 8);
INSERT INTO `commodity` VALUES (98, '小米笔记本15', 'mi15.png', '小米15', 816, '1999', 'now', NULL, 'mic15.jpg|fen34.jpg|fen35.jpg', 9);
INSERT INTO `commodity` VALUES (99, '小米平板16', 'mi16.png', '小米16', 852, '1999', 'now', NULL, 'mic16.jpg|fen36.jpg|fen37.jpg|fen38.jpg', 10);
INSERT INTO `commodity` VALUES (100, '小米摄像头', 'mi17.png', '小米17', 888, '1999', 'saleoff', '6折', 'mic17.jpg|fen40.jpg', 11);
INSERT INTO `commodity` VALUES (101, '小米蓝牙耳机', 'mi18.png', '小米18', 924, '1999', 'now', NULL, 'mic18.jpg|fen41.jpg|fen42.jpg|fen43.jpg', 12);
INSERT INTO `commodity` VALUES (102, '小米音响', 'mi19.png', '小米19', 960, '1999', 'now', NULL, 'mic19.jpg', 16);
INSERT INTO `commodity` VALUES (103, '小米充电宝', 'mi20.png', '小米20', 996, '1999', 'now', NULL, 'mic20.jpg|fen44.jpg', 11);
INSERT INTO `commodity` VALUES (104, '小米音响', 'mi19.png', '小米19', 960, '1999', 'now', NULL, 'mic19.jpg', 16);
INSERT INTO `commodity` VALUES (105, '小米8', 'mi1.png', '小米1', 665, '1999', 'now', NULL, 'mic1.jpg|fen1.jpg|fen2.jpg|fen3.jpg', 5);
INSERT INTO `commodity` VALUES (106, '小米6', 'mi2.png', '小米2', 862, '1999', 'now', NULL, 'mic2.jpg|fen4.jpg|fen5.jpg|fen6.jpg', 7);
INSERT INTO `commodity` VALUES (107, '小米3', 'mi3.png', '小米3', 1059, '1999', 'now', NULL, 'mic3.jpg|fen7.jpg|fen8.jpg|fen9.jpg', 9);
INSERT INTO `commodity` VALUES (108, '小米4', 'mi4.png', '小米4', 1256, '1999', 'now', NULL, 'mic4.jpg|fen10.jpg|fen11.jpg|fen12.jpg', 11);
INSERT INTO `commodity` VALUES (109, '小米4限量版', 'mi5.png', '小米5', 1453, '1999', 'saleoff', '8折', 'mic5.jpg|fen13.jpg|fen14.jpg|fen15.jpg', 13);
INSERT INTO `commodity` VALUES (110, '小米6', 'mi6.png', '小米6', 1650, '1999', 'now', NULL, 'mic6.jpg|fen16.jpg|fen17.jpg|fen18.jpg', 15);
INSERT INTO `commodity` VALUES (111, '红米7', 'mi7.png', '小米7', 1847, '1999', 'now', NULL, 'mic7.jpg|fen19.jpg|fen20.jpg|fen21.jpg', 13);
INSERT INTO `commodity` VALUES (112, '红米8', 'mi8.png', '小米8', 564, '1999', 'saleoff', '6折', 'mic8.jpg|fen22.jpg|fen23.jpg|fen24.jpg', 11);
INSERT INTO `commodity` VALUES (113, '小米8', 'mi1.png', '小米1', 665, '1999', 'now', NULL, 'mic1.jpg|fen1.jpg|fen2.jpg|fen3.jpg', 5);
INSERT INTO `commodity` VALUES (114, '小米6', 'mi2.png', '小米2', 862, '1999', 'now', NULL, 'mic2.jpg|fen4.jpg|fen5.jpg|fen6.jpg', 7);
INSERT INTO `commodity` VALUES (115, '小米3', 'mi3.png', '小米3', 1059, '1999', 'now', NULL, 'mic3.jpg|fen7.jpg|fen8.jpg|fen9.jpg', 9);
INSERT INTO `commodity` VALUES (116, '小米4', 'mi4.png', '小米4', 1256, '1999', 'now', NULL, 'mic4.jpg|fen10.jpg|fen11.jpg|fen12.jpg', 11);
INSERT INTO `commodity` VALUES (117, '小米4限量版', 'mi5.png', '小米5', 1453, '1999', 'saleoff', '8折', 'mic5.jpg|fen13.jpg|fen14.jpg|fen15.jpg', 13);
INSERT INTO `commodity` VALUES (118, '小米6', 'mi6.png', '小米6', 1650, '1999', 'now', NULL, 'mic6.jpg|fen16.jpg|fen17.jpg|fen18.jpg', 15);
INSERT INTO `commodity` VALUES (119, '红米7', 'mi7.png', '小米7', 1847, '1999', 'now', NULL, 'mic7.jpg|fen19.jpg|fen20.jpg|fen21.jpg', 13);
INSERT INTO `commodity` VALUES (120, '红米8', 'mi8.png', '小米8', 564, '1999', 'saleoff', '6折', 'mic8.jpg|fen22.jpg|fen23.jpg|fen24.jpg', 11);
INSERT INTO `commodity` VALUES (121, '红米9', 'mi9.png', '小米9', 600, '1999', 'now', NULL, 'mic9.jpg|fen25.jpg|fen26.jpg|fen27.jpg', 9);
INSERT INTO `commodity` VALUES (122, '红米10', 'mi10.png', '小米10', 636, '1999', 'now', NULL, 'mic10.jpg|fen28.jpg|fen29.jpg|fen30.jpg', 7);
INSERT INTO `commodity` VALUES (123, '小米笔记本11', 'mi11.png', '小米11', 672, '1999', 'now', NULL, 'mic11.jpg|fen28.jpg|fen29.jpg|fen30.jpg', 5);
INSERT INTO `commodity` VALUES (124, '小米笔记本12', 'mi12.png', '小米12', 708, '1999', 'now', NULL, 'mic12.jpg', 6);
INSERT INTO `commodity` VALUES (125, '小米笔记本13', 'mi13.png', '小米13', 744, '1999', 'now', NULL, 'mic13.jpg|fen31.jpg|fen32.jpg|fen33.jpg', 7);
INSERT INTO `commodity` VALUES (126, '小米笔记本14', 'mi14.png', '小米14', 780, '1999', 'saleoff', '6折', 'mic14.jpg', 8);
INSERT INTO `commodity` VALUES (127, '小米笔记本15', 'mi15.png', '小米15', 816, '1999', 'now', NULL, 'mic15.jpg|fen34.jpg|fen35.jpg', 9);
INSERT INTO `commodity` VALUES (128, '小米平板16', 'mi16.png', '小米16', 852, '1999', 'now', NULL, 'mic16.jpg|fen36.jpg|fen37.jpg|fen38.jpg', 10);

SET FOREIGN_KEY_CHECKS = 1;
