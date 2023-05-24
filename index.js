const express = require("express");
const app = express();
const db = require("./app/models");
const route = require("./app/Router");
const Employee = require("./app/models/Empolyee");
const PORT = 5000;
app.use(express.json());

const configDB = async () => {
  try {
    await db.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
configDB();
route(app);
app.get("/", async (req, res) => {
  const employees = await Employee.findAll();
  return res.json({ Employees: employees });
});
app.listen(5000, () => {
  console.log("Server running on 5000 port");
});
