const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Employee = require("./Empolyee");

const Contact = sequelize.define("Contact", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Emergency_Contact: {
    type: DataTypes.STRING,
  },
  Phone_no: {
    type: DataTypes.INTEGER,
  },
  RelationShip: {
    type: DataTypes.STRING,
  },
});

Contact.belongsTo(Employee);
module.exports = Contact;
