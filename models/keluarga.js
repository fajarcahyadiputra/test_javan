'use strict';
module.exports = (db, DataTypes) => {
    return db.define("keluarga", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        nama_keluarga: {
            type: DataTypes.INTEGER,
        },
        keterangan: DataTypes.TEXT,
    }, {
        freezeTableName: true,
        timestamps: false,
    });
}