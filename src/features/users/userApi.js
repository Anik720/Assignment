export async function fetchUsers() {
  // alert("hi");
  const response = await fetch(
    "http://59.152.62.177:8085/api/Employee/EmployeeData"
  );
  const data = await response.json();

  return data;
}
