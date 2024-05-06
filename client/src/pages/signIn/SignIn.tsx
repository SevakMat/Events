import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { signInFx } from "store/auth/effects";
import useToast from "hook/useToast";
import { Controller, useForm } from "react-hook-form";

const SignIn = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data: any) => {
    try {
      await signInFx(data);
      toast.success("Sign In successed");
      navigate("/");
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
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
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/signup">You don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default SignIn;
