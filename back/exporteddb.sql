-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2023 at 06:22 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `visualizer`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add data', 7, 'add_data'),
(26, 'Can change data', 7, 'change_data'),
(27, 'Can delete data', 7, 'delete_data'),
(28, 'Can view data', 7, 'view_data'),
(29, 'Can add user', 8, 'add_user'),
(30, 'Can change user', 8, 'change_user'),
(31, 'Can delete user', 8, 'delete_user'),
(32, 'Can view user', 8, 'view_user');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session'),
(8, 'users', 'user'),
(7, 'visualizer', 'data');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2023-12-17 04:35:38.060289'),
(2, 'auth', '0001_initial', '2023-12-17 04:35:38.566539'),
(3, 'admin', '0001_initial', '2023-12-17 04:35:38.672227'),
(4, 'admin', '0002_logentry_remove_auto_add', '2023-12-17 04:35:38.679236'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2023-12-17 04:35:38.686851'),
(6, 'contenttypes', '0002_remove_content_type_name', '2023-12-17 04:35:38.737540'),
(7, 'auth', '0002_alter_permission_name_max_length', '2023-12-17 04:35:38.786281'),
(8, 'auth', '0003_alter_user_email_max_length', '2023-12-17 04:35:38.798757'),
(9, 'auth', '0004_alter_user_username_opts', '2023-12-17 04:35:38.806022'),
(10, 'auth', '0005_alter_user_last_login_null', '2023-12-17 04:35:38.840900'),
(11, 'auth', '0006_require_contenttypes_0002', '2023-12-17 04:35:38.844275'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2023-12-17 04:35:38.856599'),
(13, 'auth', '0008_alter_user_username_max_length', '2023-12-17 04:35:38.883673'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2023-12-17 04:35:38.897977'),
(15, 'auth', '0010_alter_group_name_max_length', '2023-12-17 04:35:38.915425'),
(16, 'auth', '0011_update_proxy_permissions', '2023-12-17 04:35:38.925525'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2023-12-17 04:35:38.940636'),
(18, 'sessions', '0001_initial', '2023-12-17 04:35:38.971152'),
(19, 'visualizer', '0001_initial', '2023-12-17 06:47:59.566520'),
(20, 'visualizer', '0002_rename_day_data_date', '2023-12-17 06:48:32.394997'),
(21, 'visualizer', '0003_alter_data_date', '2023-12-17 06:50:01.994041'),
(22, 'visualizer', '0004_rename_a_data_a_rename_age_data_age_rename_b_data_b_and_more', '2023-12-17 06:57:37.104957'),
(23, 'visualizer', '0005_alter_data_day', '2023-12-17 06:59:57.876952'),
(24, 'visualizer', '0006_alter_data_day', '2023-12-17 07:02:30.966491'),
(25, 'users', '0001_initial', '2023-12-17 07:40:46.373554');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users_user`
--

CREATE TABLE `users_user` (
  `id` bigint(20) NOT NULL,
  `password` varchar(128) NOT NULL,
  `email` varchar(254) NOT NULL,
  `name` varchar(254) DEFAULT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users_user`
--

INSERT INTO `users_user` (`id`, `password`, `email`, `name`, `is_staff`, `is_superuser`, `is_active`, `last_login`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$600000$GLdyMKpj8qQl9BLLXDXVS7$MX54uEY9ktmUFZ8UYfwbRSfx65cCqvu3dhNcbw7kPDE=', 'user@gmail.com', 'Ajay Pratap Singh', 1, 1, 1, '2023-12-17 07:52:03.544395', '2023-12-17 07:52:03.702128'),
(2, 'sdafdasasdfadsf', '1r@gmail.com', NULL, 0, 0, 1, NULL, '2023-12-17 13:57:44.275513');

-- --------------------------------------------------------

--
-- Table structure for table `users_user_groups`
--

CREATE TABLE `users_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users_user_user_permissions`
--

CREATE TABLE `users_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `visualizer_data`
--

CREATE TABLE `visualizer_data` (
  `id` bigint(20) NOT NULL,
  `Day` datetime(6) NOT NULL,
  `Age` varchar(200) NOT NULL,
  `Gender` varchar(200) NOT NULL,
  `A` int(11) NOT NULL,
  `B` int(11) NOT NULL,
  `C` int(11) NOT NULL,
  `D` int(11) NOT NULL,
  `E` int(11) NOT NULL,
  `F` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `visualizer_data`
--

INSERT INTO `visualizer_data` (`id`, `Day`, `Age`, `Gender`, `A`, `B`, `C`, `D`, `E`, `F`) VALUES
(1, '2022-10-04 00:00:00.000000', '15-25', 'Male', 177, 706, 769, 89, 286, 588),
(2, '2022-10-04 00:00:00.000000', '>25', 'Male', 882, 698, 579, 649, 889, 937),
(3, '2022-10-04 00:00:00.000000', '15-25', 'Female', 522, 825, 523, 88, 572, 407),
(4, '2022-10-04 00:00:00.000000', '>25', 'Female', 609, 323, 324, 578, 673, 665),
(5, '2022-10-05 00:00:00.000000', '15-25', 'Male', 707, 815, 184, 894, 304, 317),
(6, '2022-10-05 00:00:00.000000', '>25', 'Male', 646, 885, 978, 182, 772, 508),
(7, '2022-10-05 00:00:00.000000', '15-25', 'Female', 210, 908, 687, 87, 496, 592),
(8, '2022-10-05 00:00:00.000000', '>25', 'Female', 886, 805, 162, 374, 993, 814),
(9, '2022-10-06 00:00:00.000000', '15-25', 'Male', 845, 593, 972, 751, 684, 612),
(10, '2022-10-06 00:00:00.000000', '>25', 'Male', 203, 627, 479, 618, 758, 440),
(11, '2022-10-06 00:00:00.000000', '15-25', 'Female', 180, 31, 725, 557, 422, 63),
(12, '2022-10-06 00:00:00.000000', '>25', 'Female', 241, 27, 771, 236, 868, 920),
(13, '2022-10-07 00:00:00.000000', '15-25', 'Male', 45, 416, 885, 312, 856, 164),
(14, '2022-10-07 00:00:00.000000', '>25', 'Male', 665, 496, 849, 188, 886, 665),
(15, '2022-10-07 00:00:00.000000', '15-25', 'Female', 888, 243, 11, 900, 728, 22),
(16, '2022-10-07 00:00:00.000000', '>25', 'Female', 500, 288, 507, 936, 375, 243),
(17, '2022-10-08 00:00:00.000000', '15-25', 'Male', 652, 874, 210, 980, 60, 307),
(18, '2022-10-08 00:00:00.000000', '>25', 'Male', 368, 22, 206, 569, 83, 116),
(19, '2022-10-08 00:00:00.000000', '15-25', 'Female', 706, 803, 356, 836, 615, 878),
(20, '2022-10-08 00:00:00.000000', '>25', 'Female', 939, 340, 982, 186, 118, 933),
(21, '2022-10-09 00:00:00.000000', '15-25', 'Male', 926, 659, 138, 793, 683, 169),
(22, '2022-10-09 00:00:00.000000', '>25', 'Male', 341, 38, 389, 866, 368, 195),
(23, '2022-10-09 00:00:00.000000', '15-25', 'Female', 717, 838, 0, 229, 815, 906),
(24, '2022-10-09 00:00:00.000000', '>25', 'Female', 17, 100, 663, 181, 325, 418),
(25, '2022-10-10 00:00:00.000000', '15-25', 'Male', 377, 97, 816, 15, 552, 511),
(26, '2022-10-10 00:00:00.000000', '>25', 'Male', 909, 253, 493, 867, 762, 45),
(27, '2022-10-10 00:00:00.000000', '15-25', 'Female', 92, 906, 105, 539, 830, 400),
(28, '2022-10-10 00:00:00.000000', '>25', 'Female', 243, 289, 167, 748, 943, 874),
(29, '2022-10-11 00:00:00.000000', '15-25', 'Male', 72, 252, 447, 332, 738, 550),
(30, '2022-10-11 00:00:00.000000', '>25', 'Male', 446, 956, 546, 665, 336, 462),
(31, '2022-10-11 00:00:00.000000', '15-25', 'Female', 977, 542, 115, 708, 70, 343),
(32, '2022-10-11 00:00:00.000000', '>25', 'Female', 208, 118, 534, 755, 814, 404),
(33, '2022-10-12 00:00:00.000000', '15-25', 'Male', 223, 507, 28, 53, 226, 267),
(34, '2022-10-12 00:00:00.000000', '>25', 'Male', 874, 177, 483, 817, 647, 919),
(35, '2022-10-12 00:00:00.000000', '15-25', 'Female', 879, 296, 136, 351, 650, 343),
(36, '2022-10-12 00:00:00.000000', '>25', 'Female', 562, 687, 164, 578, 1000, 399),
(37, '2022-10-13 00:00:00.000000', '15-25', 'Male', 224, 693, 825, 618, 25, 108),
(38, '2022-10-13 00:00:00.000000', '>25', 'Male', 589, 563, 339, 732, 170, 380),
(39, '2022-10-13 00:00:00.000000', '15-25', 'Female', 494, 979, 971, 981, 703, 43),
(40, '2022-10-13 00:00:00.000000', '>25', 'Female', 462, 299, 468, 606, 296, 328),
(41, '2022-10-14 00:00:00.000000', '15-25', 'Male', 509, 342, 498, 743, 649, 780),
(42, '2022-10-14 00:00:00.000000', '>25', 'Male', 213, 654, 853, 96, 273, 271),
(43, '2022-10-14 00:00:00.000000', '15-25', 'Female', 567, 873, 799, 585, 97, 458),
(44, '2022-10-14 00:00:00.000000', '>25', 'Female', 814, 558, 677, 29, 87, 75),
(45, '2022-10-15 00:00:00.000000', '15-25', 'Male', 20, 394, 876, 990, 641, 795),
(46, '2022-10-15 00:00:00.000000', '>25', 'Male', 671, 289, 467, 734, 661, 222),
(47, '2022-10-15 00:00:00.000000', '15-25', 'Female', 879, 391, 571, 330, 77, 719),
(48, '2022-10-15 00:00:00.000000', '>25', 'Female', 432, 661, 743, 381, 676, 839),
(49, '2022-10-16 00:00:00.000000', '15-25', 'Male', 863, 742, 698, 186, 791, 783),
(50, '2022-10-16 00:00:00.000000', '>25', 'Male', 861, 363, 78, 464, 219, 980),
(51, '2022-10-16 00:00:00.000000', '15-25', 'Female', 686, 274, 40, 325, 894, 545),
(52, '2022-10-16 00:00:00.000000', '>25', 'Female', 137, 59, 697, 595, 403, 492),
(53, '2022-10-17 00:00:00.000000', '15-25', 'Male', 675, 333, 343, 82, 953, 111),
(54, '2022-10-17 00:00:00.000000', '>25', 'Male', 416, 207, 704, 214, 666, 188),
(55, '2022-10-17 00:00:00.000000', '15-25', 'Female', 981, 752, 71, 335, 784, 319),
(56, '2022-10-17 00:00:00.000000', '>25', 'Female', 640, 285, 375, 699, 955, 278),
(57, '2022-10-18 00:00:00.000000', '15-25', 'Male', 595, 144, 430, 866, 927, 244),
(58, '2022-10-18 00:00:00.000000', '>25', 'Male', 812, 485, 699, 812, 428, 571),
(59, '2022-10-18 00:00:00.000000', '15-25', 'Female', 736, 192, 222, 135, 673, 56),
(60, '2022-10-18 00:00:00.000000', '>25', 'Female', 23, 501, 946, 558, 441, 684),
(61, '2022-10-19 00:00:00.000000', '15-25', 'Male', 262, 247, 420, 687, 702, 407),
(62, '2022-10-19 00:00:00.000000', '>25', 'Male', 399, 571, 31, 677, 742, 416),
(63, '2022-10-19 00:00:00.000000', '15-25', 'Female', 931, 721, 901, 670, 868, 687),
(64, '2022-10-19 00:00:00.000000', '>25', 'Female', 554, 87, 238, 530, 35, 327),
(65, '2022-10-20 00:00:00.000000', '15-25', 'Male', 142, 352, 820, 126, 448, 556),
(66, '2022-10-20 00:00:00.000000', '>25', 'Male', 777, 70, 617, 877, 55, 172),
(67, '2022-10-20 00:00:00.000000', '15-25', 'Female', 474, 930, 326, 535, 619, 21),
(68, '2022-10-20 00:00:00.000000', '>25', 'Female', 525, 363, 493, 243, 154, 756),
(69, '2022-10-21 00:00:00.000000', '15-25', 'Male', 625, 669, 344, 610, 65, 319),
(70, '2022-10-21 00:00:00.000000', '>25', 'Male', 273, 282, 696, 818, 408, 387),
(71, '2022-10-21 00:00:00.000000', '15-25', 'Female', 359, 296, 353, 387, 806, 494),
(72, '2022-10-21 00:00:00.000000', '>25', 'Female', 887, 360, 765, 217, 466, 128),
(73, '2022-10-22 00:00:00.000000', '15-25', 'Male', 758, 668, 465, 171, 742, 626),
(74, '2022-10-22 00:00:00.000000', '>25', 'Male', 224, 153, 766, 185, 653, 172),
(75, '2022-10-22 00:00:00.000000', '15-25', 'Female', 272, 176, 767, 738, 256, 262),
(76, '2022-10-22 00:00:00.000000', '>25', 'Female', 394, 431, 908, 481, 268, 816),
(77, '2022-10-23 00:00:00.000000', '15-25', 'Male', 188, 328, 79, 565, 952, 928),
(78, '2022-10-23 00:00:00.000000', '>25', 'Male', 144, 485, 628, 626, 17, 911),
(79, '2022-10-23 00:00:00.000000', '15-25', 'Female', 632, 260, 991, 290, 94, 544),
(80, '2022-10-23 00:00:00.000000', '>25', 'Female', 123, 342, 718, 862, 105, 141),
(81, '2022-10-24 00:00:00.000000', '15-25', 'Male', 850, 766, 657, 680, 543, 536),
(82, '2022-10-24 00:00:00.000000', '>25', 'Male', 875, 943, 710, 33, 764, 886),
(83, '2022-10-24 00:00:00.000000', '15-25', 'Female', 516, 208, 291, 364, 352, 121),
(84, '2022-10-24 00:00:00.000000', '>25', 'Female', 305, 427, 597, 175, 868, 617),
(85, '2022-10-25 00:00:00.000000', '15-25', 'Male', 238, 715, 110, 390, 84, 387),
(86, '2022-10-25 00:00:00.000000', '>25', 'Male', 261, 734, 923, 271, 404, 128),
(87, '2022-10-25 00:00:00.000000', '15-25', 'Female', 220, 763, 464, 226, 531, 795),
(88, '2022-10-25 00:00:00.000000', '>25', 'Female', 521, 319, 801, 95, 969, 224),
(89, '2022-10-26 00:00:00.000000', '15-25', 'Male', 627, 196, 814, 495, 441, 659),
(90, '2022-10-26 00:00:00.000000', '>25', 'Male', 960, 634, 988, 585, 237, 821),
(91, '2022-10-26 00:00:00.000000', '15-25', 'Female', 269, 13, 672, 97, 169, 183),
(92, '2022-10-26 00:00:00.000000', '>25', 'Female', 523, 766, 182, 96, 633, 534),
(93, '2022-10-27 00:00:00.000000', '15-25', 'Male', 423, 830, 628, 116, 640, 81),
(94, '2022-10-27 00:00:00.000000', '>25', 'Male', 494, 419, 315, 985, 758, 236),
(95, '2022-10-27 00:00:00.000000', '15-25', 'Female', 527, 658, 581, 417, 548, 703),
(96, '2022-10-27 00:00:00.000000', '>25', 'Female', 100, 10, 99, 495, 768, 711),
(97, '2022-10-28 00:00:00.000000', '15-25', 'Male', 977, 708, 559, 28, 413, 419),
(98, '2022-10-28 00:00:00.000000', '>25', 'Male', 828, 681, 270, 387, 833, 340),
(99, '2022-10-28 00:00:00.000000', '15-25', 'Female', 678, 33, 185, 517, 527, 701),
(100, '2022-10-28 00:00:00.000000', '>25', 'Female', 648, 321, 71, 281, 364, 733),
(101, '2022-10-29 00:00:00.000000', '15-25', 'Male', 531, 413, 656, 679, 489, 585),
(102, '2022-10-29 00:00:00.000000', '>25', 'Male', 264, 390, 852, 357, 415, 854),
(103, '2022-10-29 00:00:00.000000', '15-25', 'Female', 793, 407, 746, 158, 192, 732),
(104, '2022-10-29 00:00:00.000000', '>25', 'Female', 372, 242, 611, 126, 889, 478);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `users_user`
--
ALTER TABLE `users_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `users_user_groups`
--
ALTER TABLE `users_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_groups_user_id_group_id_b88eab82_uniq` (`user_id`,`group_id`),
  ADD KEY `users_user_groups_group_id_9afc8d0e_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `users_user_user_permissions`
--
ALTER TABLE `users_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_user_permissions_user_id_permission_id_43338c45_uniq` (`user_id`,`permission_id`),
  ADD KEY `users_user_user_perm_permission_id_0b93982e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `visualizer_data`
--
ALTER TABLE `visualizer_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `users_user`
--
ALTER TABLE `users_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users_user_groups`
--
ALTER TABLE `users_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users_user_user_permissions`
--
ALTER TABLE `users_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `visualizer_data`
--
ALTER TABLE `visualizer_data`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `users_user_groups`
--
ALTER TABLE `users_user_groups`
  ADD CONSTRAINT `users_user_groups_group_id_9afc8d0e_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `users_user_groups_user_id_5f6f5a90_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);

--
-- Constraints for table `users_user_user_permissions`
--
ALTER TABLE `users_user_user_permissions`
  ADD CONSTRAINT `users_user_user_perm_permission_id_0b93982e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `users_user_user_permissions_user_id_20aca447_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
