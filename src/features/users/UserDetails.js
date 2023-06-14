import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userAsync } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";

const UserDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const [user, setUser] = useState();
  console.log(id);
  let arr = [];

  useEffect(() => {
    dispatch(userAsync({ value: "Admin" }));
  }, [dispatch]);

  useEffect(() => {
    if (users?.length > 0) {
      users.map((item) => {
        // console.log(item);
        if (parseInt(item.empID) === parseInt(id)) {
          console.log(item);
          setUser(item);
        }
      });
    }
  }, [users]);
  console.log(user);
  return (
    <>
      {user ? (
        <div>
          <Typography variant="h2" gutterBottom>
            User Details
          </Typography>
          <Grid container spacing={2}>
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
