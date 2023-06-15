import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../shared/Header";
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  employeeType: yup.string().required("Employee Type is required"),
  //   divisionId: yup.string().required("Division ID is required"),
  districeID: yup.string().required("District ID is required"),
});
const UserUpdate = () => {
  const { id } = useParams();
  console.log(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      employeeType: "Admin",
      districeID: "0",
      //   divisionId: "0",
    },
  });
  const onSubmit = async (data) => {
    console.log(JSON.stringify(data));
    // const result = await axios.put(
    //   `http://59.152.62.177:8085/api/UpdateEmployeeInformation/${id}`,
    //   JSON.stringify({
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //     employeeType: data.employeeType,
    //     districtID: parseInt(data.districtId),
    //   })
    // );

    try {
      const response = await fetch(
        `http://59.152.62.177:8085/api/UpdateEmployeeInformation/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: "string",
            lastName: "string",
            employeeType: "string",
            districeID: 0,
          }),
        }
      );
      console.log(response);
      if (!response) {
        throw new Error("Error updating data");
      }

      const updatedData = await response.json();
      console.log("Data updated:", updatedData);
    } catch (error) {
      console.error(error);
      toast("Internal Server Error!");
    }
  };
  return (
    <div className="">
      <Header></Header>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center item-center bg-blue-100"
      >
        <TextField
          id="firstName"
          className="text-white"
          label="First Name"
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="lastName"
          label="Last Name"
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="employeeType"
          label="employeeType"
          {...register("employeeType")}
          error={!!errors.employeeType}
          helperText={errors.employeeType?.message}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="districeID"
          label="districeID"
          {...register("districeID")}
          error={!!errors.districeID}
          helperText={errors.districeID?.message}
          margin="normal"
          variant="outlined"
        />
        {/* <TextField
        id="divisionId"
        label="divisionId"
        {...register("divisionId")}
        error={!!errors.divisionId}
        helperText={errors.divisionId?.message}
        margin="normal"
        variant="outlined"
      /> */}

        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default UserUpdate;
