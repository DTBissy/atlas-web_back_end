export default function createEmployeeObject(departmentName, employees) {
  const Obj = {
    [`${departmentName}`]: employees.map(emp => emp)
  }
  return Obj;
}
