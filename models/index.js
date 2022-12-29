require('dotenv').config();
const dbConfig = require("../config/config");
const Sequelize = require("sequelize");
const NODE_ENV = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(dbConfig[NODE_ENV].database, dbConfig[NODE_ENV].username, dbConfig[NODE_ENV].password, {
    host: dbConfig[NODE_ENV].host,
    dialect: dbConfig[NODE_ENV].dialect,
    timezone: dbConfig[NODE_ENV].timezone,
    pool: {
        max: dbConfig[NODE_ENV].pool.max,
        min: dbConfig[NODE_ENV].pool.min,
        acquire: dbConfig[NODE_ENV].pool.acquire,
        idle: dbConfig[NODE_ENV].pool.idle,
    },
    logging: false
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Keluarga = require("./keluarga")(sequelize, Sequelize);
db.Anggota = require("./anggota")(sequelize, Sequelize);
db.AssetKeluarga = require("./asset_keluarga")(sequelize, Sequelize);
db.AssetAnggota = require("./asset_anggota")(sequelize, Sequelize);

db.Anggota.belongsTo(db.Anggota, {
    foreignKey: 'parent_id',
     as: "anak"
})

module.exports = db;