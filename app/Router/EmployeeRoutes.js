const {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../Controllers/EmployeeController");
module.exports = (app) => {
  app.route("/Employee").post(createEmployee);
  app.route("/getEmployees").get(getEmployees);
  app.route("/getEmployee/:id").get(getEmployee);
  app.route("/updateEmployee/:id").patch(updateEmployee);
  app.route("/deleteEmployee/:id").delete(deleteEmployee);
};
