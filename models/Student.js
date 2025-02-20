const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Student = sequelize.define('Student', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    rollNumber: { type: DataTypes.STRING, unique: true, allowNull: false },
    department: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Student;
