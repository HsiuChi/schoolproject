/*
 Navicat Premium Data Transfer

 Source Server         : 43.136.39.175
 Source Server Type    : MySQL
 Source Server Version : 80032
 Source Host           : 43.136.39.175:3306
 Source Schema         : miniprogram_db

 Target Server Type    : MySQL
 Target Server Version : 80032
 File Encoding         : 65001

 Date: 13/06/2023 20:08:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for advices
-- ----------------------------
DROP TABLE IF EXISTS `advices`;
CREATE TABLE `advices`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `advicetext` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `adviceimg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 31 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of advices
-- ----------------------------
INSERT INTO `advices` VALUES (29, '黑风山黑熊精', 'https://mpcos-1316442702.cos.ap-beijing.myqcloud.com/advices/黑熊精.jpg', 'oQqOm5VGtdsodascYcGPfhdJ96SA');
INSERT INTO `advices` VALUES (30, '功能较为完善', 'https://mpcos-1316442702.cos.ap-beijing.myqcloud.com/advices/xiangji.png', 'oQqOm5UyqmyryBqO50pVg3804tIc');

-- ----------------------------
-- Table structure for customers
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers`  (
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `avatarurl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `registerdate` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `goldcoin` int NOT NULL,
  `lastpunchdate` int NOT NULL,
  `vip` tinyint NOT NULL,
  `administrator` tinyint NOT NULL,
  PRIMARY KEY (`openid`) USING BTREE,
  INDEX `openid`(`openid` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of customers
-- ----------------------------
INSERT INTO `customers` VALUES ('oQqOm5aaT_99OTxaq4salxcceMag', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 10, 0, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5ajoCuNlrzcBwXxXWSx9Ix4', '超_越梦想', 'https://thirdwx.qlogo.cn/mmopen/vi_32/UibiaRXUUjfnlhaiceykzxl4GSFmuVNiatlkib76QTLxiaGibddovQPxJdYHKj9URAUgy9bnrg1CXsic5XlzjgdU7jgicVg/132', '2023-03-19', 10, 0, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5cJJp1gIb-xk_oB8XYpTFk0', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 10, 0, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5cPLg5QU9vJsc0gqph4AH4o', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 12, 20230319, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5czbk_aKptHHINdsP9geYJQ', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 12, 20230319, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5d8-NDjNe2oOeLidfZv_wpw', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 10, 0, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5eCCZe2JJm401S_I1LUDg0w', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 12, 20230319, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5eo-ySttm2yYlTY6USEY7G0', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 12, 20230319, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5epMwPsjyW762WJs3IUXurU', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 10, 0, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5Rj4rE8OtvhEdEo4qc-0peI', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 10, 0, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5RTBx_eBeKHdP7STAjsqGtM', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-20', 12, 20230320, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5S4W7tXzNMo1EB_nBp2DhnQ', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 7, 20230319, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5S7ESwkRP6Tk03O0cRCbz0Y', '母笑阳', 'https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJRUQ4QyCcNPTRndgHaKveiay5MePBcqXc2hN3d8F2b2icTHIuib8XIf4nDBWHjI9eG4vtV5Kwu0iaicgA/132', '2023-03-18', 10, 0, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5TsB-paTtROGhljvFmdTtj0', 'zengzheng', 'https://thirdwx.qlogo.cn/mmopen/vi_32/GsXrrl7yhjg8vjapNyEZms2GecGy9XkDRNL8akl8UP8LYYLuic2BIiaRcdKibicWJoc89t8o0uyfkicX9lyGtq0XIwA/132', '2023-03-19', 10, 0, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5UIpy3AQrIr13oSCB5u9KoQ', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 12, 20230319, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5UyqmyryBqO50pVg3804tIc', '时邮通', 'https://thirdwx.qlogo.cn/mmopen/vi_32/tQTicYLeq4iclSPHRzEXD8wVUIaiafk3GfKFBGMHg5icibv89BH8XTFkJ9xmRxynGaUIplOqeZYnVkuMERP10dcr7YQ/132', '2023-02-20', 30, 20230419, 1, 1);
INSERT INTO `customers` VALUES ('oQqOm5VdYJpGcSMWzNIm17xfymRY', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 12, 20230319, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5VGtdsodascYcGPfhdJ96SA', 'He', 'https://thirdwx.qlogo.cn/mmopen/vi_32/8O2IzicTGlf40alCZtjibLASwFAd7Mloic9wr4M2JnaIicia47QyG4dXu2UmyDGNzOn19iba3llGLcqT143ptdpT6QfQ/132', '2023-03-19', 0, 0, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5WecCMQdTFJFDwUaGLNaN64', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 10, 0, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5Whk8y4p2LjVSA3NvuzUlTc', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-20', 7, 20230320, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5Wi_elz0su3-B3uptm9R1Is', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 2, 20230319, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5YXF1PI6Y08FFb_F9kpeTKE', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 10, 0, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5ZFoed2R0dR495QYxaHqmpE', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-03-19', 10, 0, 0, 0);
INSERT INTO `customers` VALUES ('oQqOm5ZJAseuXDHF6wDAMJl8FGsU', '微信用户', 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132', '2023-02-14', 7, 20230218, 0, 0);

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `goodname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `goodsort` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `goodnew` int NOT NULL,
  `goodprice` bigint NOT NULL,
  `goodphone` bigint NOT NULL,
  `goodwechat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `goodaddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `goodimage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `goods_openid_customers`(`openid` ASC) USING BTREE,
  CONSTRAINT `goods_openid_customers` FOREIGN KEY (`openid`) REFERENCES `customers` (`openid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 111 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (109, '《高等数学上册》', '书籍', 50, 20, 18801015650, '18801015650', '北京联合大学', 'https://mpcos-1316442702.cos.ap-beijing.myqcloud.com/goods/x2hwqRV2ppHP3684756cc1f68c622ec12d0ae97bbc77.jpeg', 'oQqOm5UyqmyryBqO50pVg3804tIc');
INSERT INTO `goods` VALUES (110, '11', '资料', 50, 12, 18801015650, '11', '11', 'https://mpcos-1316442702.cos.ap-beijing.myqcloud.com/goods/Ad7cwB6nLacr7a38a7909f5eb476b5aca642b3bcec92.jpeg', 'oQqOm5UyqmyryBqO50pVg3804tIc');

-- ----------------------------
-- Table structure for needgoods
-- ----------------------------
DROP TABLE IF EXISTS `needgoods`;
CREATE TABLE `needgoods`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `needgoodname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `needgoodsort` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `needgoodphone` bigint NOT NULL,
  `needgoodwechat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `needgoodaddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `needgoodimage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 54 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of needgoods
-- ----------------------------
INSERT INTO `needgoods` VALUES (51, 'ipad', '电子产品', 18235928059, '18235928059', '北京联合大学北四环校区', 'https://mpcos-1316442702.cos.ap-beijing.myqcloud.com/needgoods/xiangji.png', 'oQqOm5Wi_elz0su3-B3uptm9R1Is');
INSERT INTO `needgoods` VALUES (53, '谭浩强C语言', '书籍', 18801015650, '18801015650', '北京联合大学', 'https://mpcos-1316442702.cos.ap-beijing.myqcloud.com/needgoods/PDOckjZUtBqof6ce74c79e2918a69c91ea5602bd2716.jpeg', 'oQqOm5UyqmyryBqO50pVg3804tIc');

-- ----------------------------
-- Table structure for swipers
-- ----------------------------
DROP TABLE IF EXISTS `swipers`;
CREATE TABLE `swipers`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of swipers
-- ----------------------------
INSERT INTO `swipers` VALUES (5, 'https://mpcos-1316442702.cos.ap-beijing.myqcloud.com/swiper/hsCRFTjWjguFcc18552faf3ea8d7c93d6c0f2234a776.jpg', '12');
INSERT INTO `swipers` VALUES (7, 'https://mpcos-1316442702.cos.ap-beijing.myqcloud.com/swiper/XagvVtxsTeEj53c14d4e7be2eece2beaba5ccdee2e59.png', '青春不散场');

SET FOREIGN_KEY_CHECKS = 1;
