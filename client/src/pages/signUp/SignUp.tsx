import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { signUpFx } from "store/auth/effects";
import useToast from "hook/useToast";

const SignUp = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data: any) => {
    try {
      await signUpFx(data);
      toast.success("Sign up successed");
      navigate("/signin");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{ required: "First Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    autoComplete="given-name"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    error={!!errors.firstName}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                rules={{ required: "Last Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    autoComplete="family-name"
                    error={!!errors.lastName}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    type="email"
                    autoComplete="email"
                    error={!!errors.email}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="new-password"
                    error={!!errors.password}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    id="phone"
                    label="Phone"
                    autoComplete="phone"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="age"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    id="age"
                    label="Age"
                    autoComplete="age"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="gender"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    id="gender"
                    label="Gender"
                    autoComplete="gender"
                  />
                )}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!isValid}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/signin">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
