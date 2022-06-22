import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";

export const Vivienda = sequelize.define('vivienda', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ubicacion: {
        type: DataTypes.STRING,
    },
    log: {
        type: DataTypes.STRING
    },
    lat: {
        type: DataTypes.STRING
    },
    cuartos: {
        type: DataTypes.INTEGER
    },
    banos: {
        type: DataTypes.INTEGER
    },
    presio: {
        type: DataTypes.FLOAT
    },
    opcionNeg: {
        type: DataTypes.BOOLEAN
    },
    cod_par: {
        type: DataTypes.INTEGER
    },
}, {
    timestamps: true
});

// Parroquia.hasMany(Vivienda, {
//     foreignKey: 'cod_par',
//     sourceKey: 'cod_par'
// });

// Vivienda.belongsTo(Parroquia, {
//     foreignKey: 'cod_par',
//     targeId: 'cod_par'
// });