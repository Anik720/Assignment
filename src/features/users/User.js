import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAsync } from "./userSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import axios from "axios";
import { NavLink } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerm, setSearchTerm] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(users);
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const validationSchema = object({
    // empID: number().required("Employee ID is required"),
    firstName: string().required("First Name is required"),
    lastName: string().required("Last Name is required"),
    employeeType: string().required("Employee Type is required"),
    // divisionID: number().required("Division ID is required"),
    districtId: number().required("District ID is required"),
  });
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    const result = axios.patch(
      "http://59.152.62.177:8085/api/SaveEmployeeInformation",
      {
        districtID: parseInt(values.districtId),
        firstName: values.firstName,
        lastName: values.lastName,
        employeeType: values.employeeType,
        // divisionId: parseInt(values.divisionId),
      }
    );
    console.log(result);
    setIsOpen(false);
  };
  const filteredData = searchTerm
    ? users?.filter(
        (row) =>
          row.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          parseInt(row.divisionId) === parseInt(searchTerm)
      )
    : users;
  useEffect(() => {
    dispatch(userAsync({ value: "Admin" }));
  }, [dispatch]);
  return (
    <>
      <TableContainer component={Paper}>
        <TextField
          label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ marginBottom: 16 }}
        />

        <div>
          {/* <Button variant="contained" onClick={handleAddUser}>Add User</Button> */}
          <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Add User
            </Button>
            <Modal open={isOpen} onClose={handleClose}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Form Modal
                </Typography>
                <Formik
                  initialValues={{
                    // empID: "",
                    firstName: "",
                    lastName: "",
                    employeeType: "",
                    // divisionId: "",
                    districtId: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <Grid container spacing={2}>
                      {/* <Grid item xs={12}>
                        <Field
                          as={TextField}
                          name="empID"
                          label="Employee ID"
                          variant="outlined"
                          fullWidth
                          helperText={<ErrorMessage name="empID" />}
                        />
                      </Grid> */}
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          name="firstName"
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          helperText={<ErrorMessage name="firstName" />}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          name="lastName"
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          helperText={<ErrorMessage name="lastName" />}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          name="employeeType"
                          label="Employee Type"
                          variant="outlined"
                          fullWidth
                          helperText={<ErrorMessage name="employeeType" />}
                        />
                      </Grid>
                      {/* <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          name="divisionId"
                          label="Division ID"
                          variant="outlined"
                          fullWidth
                          helperText={<ErrorMessage name="divisionId" />}
                        />
                      </Grid> */}
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          name="districtId"
                          label="District ID"
                          variant="outlined"
                          fullWidth
                          helperText={<ErrorMessage name="districtId" />}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </Box>
            </Modal>
          </div>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>empID</TableCell>
              <TableCell align="right">firstName</TableCell>
              <TableCell align="right">lastName&nbsp;(g)</TableCell>
              <TableCell align="right">employeeType&nbsp;(g)</TableCell>
              <TableCell align="right">divisionId&nbsp;(g)</TableCell>
              <TableCell align="right">districeID&nbsp;(g)</TableCell>
              <TableCell align="right">disvision&nbsp;(g)</TableCell>
              <TableCell align="right">district&nbsp;(g)</TableCell>
              <TableCell align="right">&nbsp;(g)</TableCell>
              <TableCell align="right">&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.length > 0
              ? filteredData.slice(startIndex, endIndex)?.map((row) => (
                  <TableRow
                    key={row.empID}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.empID}
                    </TableCell>
                    <TableCell align="right">{row.firstName}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.employeeType}</TableCell>
                    <TableCell align="right">{row.divisionId}</TableCell>
                    <TableCell align="right">{row.districeID}</TableCell>
                    <TableCell align="right">{row.disvision}</TableCell>
                    <TableCell align="right">{row.district}</TableCell>
                    <TableCell align="right">
                      <NavLink to={`/user/${row?.empID}`}>
                        <Button>Details</Button>
                      </NavLink>
                    </TableCell>
                  </TableRow>
                ))
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={users?.length > 0 ? users?.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default User;
