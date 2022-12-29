"use strict";

module.exports = (db, DataTypes) => {
    return db.define("anggota", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        keluarga_id: DataTypes.INTEGER,
        parent_id: DataTypes.INTEGER,
        nama: DataTypes.STRING,
        jenis_kelamin: DataTypes.ENUM(['laki-laki','perempuan']),
    }, {
        freezeTableName: true,
        timestamps: false,
    })
}