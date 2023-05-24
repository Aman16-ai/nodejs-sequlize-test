const Employee = require("../models/Empolyee");
const Contact = require("../models/Contact");
const createEmployee = async (req, res) => {
  try {
    const contact = req.body["Contact"];
    delete req.body["Contact"];
    const employee = await Employee.create(req.body);
    console.log(employee);
    for await (const c of contact) {
      const contact = await Contact.create({ ...c, EmployeeId: employee.id });
    }
    return res.status(200).json({ status: true, Response: "Created" });
  } catch (err) {
    return res.status(500).json({ Error: "Some internal server error" });
  }
};

const getEmployees = async (req, res) => {
  try {
    const { page, size } = req.query;
    const offset = (parseInt(page) - 1) * parseInt(size);
    const data = await Employee.findAll({
      limit: parseInt(size),
      offset,
    });
    return res.status(200).send({ status: true, Response: data });
  } catch (err) {
    return res.status(500).json({ Error: "Some internal server error" });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployee = await Employee.update(req.body, { where: { id } });
    return res
      .status(200)
      .json({ status: true, Response: "Employee updated successfully" });
  } catch (err) {
    return res.status(500).json({ Error: "Some internal server error" });
  }
};
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Employee.destroy({ where: { id } });
    return res
      .status(200)
      .json({ status: true, Response: "Employee deleted successfully" });
  } catch (err) {
    return res.status(500).json({ Error: "Some internal server error" });
  }
};
const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Employee.findOne({ where: { id } });
    return res.status(200).json({ status: true, Response: data });
  } catch (err) {
    return res.status(500).json({ Error: "Some internal server error" });
  }
};
module.exports = {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
