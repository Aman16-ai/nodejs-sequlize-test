const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Employee = sequelize.define("Employee", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Full_Name: {
    type: DataTypes.STRING,
  },
  Job_title: {
    type: DataTypes.STRING,
  },
  Phone_no: {
    type: DataTypes.INTEGER,
  },
  Email: {
    type: DataTypes.STRING,
  },
  Address: {
    type: DataTypes.STRING,
  },
  City: {
    type: DataTypes.STRING,
  },
  State: {
    type: DataTypes.STRING,
  },
});

module.exports = Employee;
