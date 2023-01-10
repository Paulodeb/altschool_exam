import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React from "react";
import BasicModal from "./BasicModal";

const NewUserModal = ({ open, onClose }) => {
  const modalStyles = {
    inputFields: {
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
      marginBottom: "15px",
      ".MuiInput-root": {
        marginBottom: "20px"
      }
    }
  };
  // const validationSchema = Yup.object().shape({
  //   userName: Yup.string()
  //   .required('Please enter your username')
  //   .min(6, "username must be at least 6 characters"),
  //   email: Yup.string()
  //   .required('Please enter your email')
  //   .email('Please enter a valid email'),
  //   phoneNumber: Yup.string()
  //   .required('Please enter your phone number')
  //   .min(11, "phone number must be at least 11 characters")
  //   .max(11, "phone number must be at most 11 characters"),
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(validationSchema),
  // })

  // const addUser = (data) => {
  //   console.log(data);
  // };


  const getContent = () => {
    return (
      <Box sx={modalStyles.inputFields}>
        <TextField
          placeholder="userName"
          name="userName"
          label="userName"
          // required 
          // {...register("userName")}
          // error = {errors.userName ? true : false}
          // helperText={errors.userName?.message}
          />
        <TextField
          placeholder="email"
          name="email"
          label="email"
          required
          // {...register("email")}
          // error = {errors.email ? true : false}
          // helperText={errors.email?.message}
          />
        <TextField
          placeholder="phone number"
          name="phoneNumber"
          label="phone number"
          required
          // {...register("phoneNumber")}
          // error={errors.phoneNumber ? true : false}
          // helperText={errors.phoneNumber?.message}
          />
      </Box>
    );
  };
  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="New User"
      subTitle="Please fill out all fields"
      content={getContent()}
      validate={() => {}}
      // onSubmit={handleSubmit(addUser)}
    />
  );
};

export default NewUserModal;
