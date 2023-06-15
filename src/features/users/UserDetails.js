import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { userAsync } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../shared/Header";

const UserDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const [user, setUser] = useState();
  const location = useLocation(); // React Hook

  const url = location.pathname;
  const host = window.location.host;

  const path = new URL(
    url,
    host === "localhost:3000" ? "http://dummyhostname" : host
  );
  const segments = path.pathname.split("/");

  // Extract the second segment of the path
  const string = segments[1];

  useEffect(() => {
    dispatch(userAsync({ value: string }));
  }, [dispatch]);

  useEffect(() => {
    if (users?.length > 0) {
      users.map((item) => {
        // console.log(item);
        if (parseInt(item.empID) === parseInt(id)) {
          // console.log(item);
          setUser(item);
        }
      });
    }
  }, [users]);
  // console.log(user);
  return (
    <>
      <Header></Header>
      <NavLink to={`/${string}/update/${id}`} className="flex justify-end mt-5">
        <Button variant="contained">Update User</Button>
      </NavLink>
      <Typography variant="h2" gutterBottom className="text-center">
        User Details
      </Typography>

      {user ? (
        <div className="text-white bg-black ">
          <Grid container spacing={2} className="">
            <Grid item xs={12}>
              <Typography variant="body1">empID: {user?.empID}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                districeID: {user?.districeID}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Division ID: {user?.divisionId}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                district: {user?.district}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                disvision: {user?.disvision}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Employee Type: {user?.employeeType}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                First Name: {user?.firstName}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Last Name: {user?.lastName}
              </Typography>
            </Grid>
          </Grid>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default UserDetails;
