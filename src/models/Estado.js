import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";

import { Municipio } from "./Municipio";

export const Estado = sequelize.define('estado', {
    cod_edo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_edo: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true
});

Estado.hasMany(Municipio, {
    foreignKey: 'cod_edo',
    sourceKey: 'cod_edo'
});

Municipio.belongsTo(Estado, {
    foreignKey: 'cod_edo',
    targeId: 'cod_edo'
});