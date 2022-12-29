-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versi server:                 5.7.33 - MySQL Community Server (GPL)
-- OS Server:                    Win64
-- HeidiSQL Versi:               11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Membuang struktur basisdata untuk test_javan
CREATE DATABASE IF NOT EXISTS `test_javan` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `test_javan`;

-- membuang struktur untuk table test_javan.anggota
CREATE TABLE IF NOT EXISTS `anggota` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `keluarga_id` bigint(20) unsigned NOT NULL,
  `parent_id` bigint(20) unsigned NOT NULL,
  `nama` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jenis_kelamin` enum('laki-laki','perempuan') COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `anggota_to_keluarga` (`keluarga_id`),
  CONSTRAINT `anggota_to_keluarga` FOREIGN KEY (`keluarga_id`) REFERENCES `keluarga` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel test_javan.anggota: ~2 rows (lebih kurang)
/*!40000 ALTER TABLE `anggota` DISABLE KEYS */;
INSERT INTO `anggota` (`id`, `keluarga_id`, `parent_id`, `nama`, `jenis_kelamin`) VALUES
	(13, 4, 15, 'PT. subuh utama', 'laki-laki'),
	(15, 4, 0, 'user11', 'laki-laki');
/*!40000 ALTER TABLE `anggota` ENABLE KEYS */;

-- membuang struktur untuk table test_javan.assets_anggota
CREATE TABLE IF NOT EXISTS `assets_anggota` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `anggota_id` bigint(20) unsigned NOT NULL,
  `nama` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `harga_satuan` int(11) NOT NULL,
  `jumlah` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `assets_to_anggota` (`anggota_id`),
  CONSTRAINT `assets_to_anggota` FOREIGN KEY (`anggota_id`) REFERENCES `anggota` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel test_javan.assets_anggota: ~0 rows (lebih kurang)
/*!40000 ALTER TABLE `assets_anggota` DISABLE KEYS */;
INSERT INTO `assets_anggota` (`id`, `anggota_id`, `nama`, `harga_satuan`, `jumlah`) VALUES
	(2, 15, 'handphone', 3000000, 1);
/*!40000 ALTER TABLE `assets_anggota` ENABLE KEYS */;

-- membuang struktur untuk table test_javan.assets_keluarga
CREATE TABLE IF NOT EXISTS `assets_keluarga` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `keluarga_id` bigint(20) unsigned NOT NULL,
  `nama` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `harga_satuan` int(11) NOT NULL,
  `jumlah` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `assets_to_anggota` (`keluarga_id`),
  CONSTRAINT `assets_to_keluarga` FOREIGN KEY (`keluarga_id`) REFERENCES `keluarga` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel test_javan.assets_keluarga: ~0 rows (lebih kurang)
/*!40000 ALTER TABLE `assets_keluarga` DISABLE KEYS */;
INSERT INTO `assets_keluarga` (`id`, `keluarga_id`, `nama`, `harga_satuan`, `jumlah`) VALUES
	(7, 4, 'mobil', 1000000, 2),
	(8, 4, 'rumah', 1000000000, 2);
/*!40000 ALTER TABLE `assets_keluarga` ENABLE KEYS */;

-- membuang struktur untuk table test_javan.keluarga
CREATE TABLE IF NOT EXISTS `keluarga` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nama_keluarga` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `keterangan` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel test_javan.keluarga: ~1 rows (lebih kurang)
/*!40000 ALTER TABLE `keluarga` DISABLE KEYS */;
INSERT INTO `keluarga` (`id`, `nama_keluarga`, `keterangan`) VALUES
	(4, 'asep', '-');
/*!40000 ALTER TABLE `keluarga` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
