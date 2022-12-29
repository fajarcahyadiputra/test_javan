
'use strict';

module.exports = (db, DataTypes) => {
    return db.define("assets_anggota", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        anggota_id: DataTypes.INTEGER,
        nama: DataTypes.STRING,
        harga_satuan: DataTypes.INTEGER,
        jumlah: DataTypes.INTEGER,
    }, {
        freezeTableName: true,
        timestamps: false,
    });
}