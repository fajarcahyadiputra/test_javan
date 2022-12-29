### Task Number One

#### Sql query to create table

### to create keluarga table

```bash
CREATE TABLE IF NOT EXISTS `keluarga` (
`id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
`nama_keluarga` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
`keterangan` text COLLATE utf8mb4_unicode_ci,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=UTF8MB4_UNICODE_CI;
```

### to create anggota table

```bash
CREATE TABLE IF NOT EXISTS `anggota` (
`id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
`keluarga_id` bigint(20) unsigned NOT NULL,
`child_id` bigint(20) unsigned NOT NULL,
`nama` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
`jenis_kelamin` enum('laki-laki','perempuan') COLLATE utf8mb4_unicode_ci NOT NULL,
PRIMARY KEY (`id`),
KEY `anggota_to_keluarga` (`keluarga_id`),
CONSTRAINT `anggota_to_keluarga` FOREIGN KEY (`keluarga_id`) REFERENCES `keluarga` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### to create assets anggota table

```bash
CREATE TABLE IF NOT EXISTS `assets_anggota` (
`id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
`anggota_id` bigint(20) unsigned NOT NULL,
`nama` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
`harga_satuan` int(11) NOT NULL,
`harga` int(11) NOT NULL,
PRIMARY KEY (`id`),
KEY `assets_to_anggota` (`anggota_id`),
CONSTRAINT `assets_to_anggota` FOREIGN KEY (`anggota_id`) REFERENCES `anggota` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### bto create keluarga assets table

```bash
CREATE TABLE IF NOT EXISTS `assets_keluarga` (
`id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
`keluarga_id` bigint(20) unsigned NOT NULL,
`nama` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
`harga_satuan` int(11) NOT NULL,
`jumlah` int(11) NOT NULL,
PRIMARY KEY (`id`),
KEY `assets_to_anggota` (`keluarga_id`),
CONSTRAINT `assets_to_keluarga` FOREIGN KEY (`keluarga_id`) REFERENCES `keluarga` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### Server Installation Setup

##### 1. Install NodeJS

Install node JS **14.17.\***, You can read the installation guide in [https://nodejs.org/en/download](https://nodejs.org/en/download/)

##### 2. create database

then create your first Database name "test_javan"

##### 3. Install Packages

Move to root project directory and run:

```bash
$ npm install
```

##### 4. Create .env File

Copy env.example to .env

```bash
$ cp env.example .env
```

Setup your database settings

````bash
NODE_ENV=development
TIME_ZONE=Asia/Jakarta

##### 5. Install Sequelize CLI

Install sequelize ORM CLI to create or run migration, seeder, etc

```bash
$ npm install --save-dev sequelize-cli
````

to see sequelize command you can type

```bash
$ npx sequelize --help
```

##### 5. Import database

import to database, file database can see at database folder

##### 6. Install nodemon

```bash
$ npm install nodemon -g
# or
$ yarn global add nodemon
```

to start nodemon

```bash
$ npm start
```

##### 7. Finish

endpoint:

HOME

# http://localhost:3000
