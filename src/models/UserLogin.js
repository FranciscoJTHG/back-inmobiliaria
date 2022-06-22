import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";

export const UserLogin = sequelize.define('userLogin', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    correo: {
        type: DataTypes.STRING,
    },
    pass: {
        type: DataTypes.STRING
    },
}, {
    timestamps: true
});