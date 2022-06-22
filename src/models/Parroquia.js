import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";

import { Vivienda } from './Vivienda';

export const Parroquia = sequelize.define('parroquia', {
    cod_par: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_par: {
        type: DataTypes.STRING,
    },
    cod_mun: {
        type: DataTypes.INTEGER
    },
}, {
    timestamps: true
});

Parroquia.hasMany(Vivienda, {
    foreignKey: 'cod_par',
    sourceKey: 'cod_par'
});

Vivienda.belongsTo(Parroquia, {
    foreignKey: 'cod_par',
    targeId: 'cod_par'
});