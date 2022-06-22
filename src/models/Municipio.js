import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";

import { Parroquia } from './Parroquia';

export const Municipio = sequelize.define('municipio', {
    cod_mun: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_mun: {
        type: DataTypes.STRING,
    },
    cod_edo: {
        type: DataTypes.INTEGER
    },
}, {
    timestamps: true
});

Municipio.hasMany(Parroquia, {
    foreignKey: 'cod_mun',
    sourceKey: 'cod_mun'
});

Parroquia.belongsTo(Municipio, {
    foreignKey: 'cod_mun',
    targeId: 'cod_mun'
});