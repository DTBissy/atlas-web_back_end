import createEmployeeObject from "./11-createEmployeesObject";

export default function createReportObject(employeesList) {
  let employees = createEmployeeObject(employeesList);
  console.log(employees);
}
