import { ObjectType } from "shared/helpers/types";
import { CheckOutLoginService, SignInService, SignUpService } from "./service";
import { createEffect } from "effector";

export const signInFx = createEffect(async (body: ObjectType) => {
  try {
    const response = await SignInService(body);
    if (response?.data?.login) {
      const { token } = response.data.login;
      localStorage.setItem("token", token);
      return response.data.login;
    }
    throw new Error(response?.errors[0].message);
  } catch (error: any) {
    throw new Error(error?.message);
  }
});

export const signUpFx = createEffect(async (body: ObjectType) => {
  try {
    const response = await SignUpService(body);

    if (response?.data?.signUp) {
      return response.data.signUp;
    }
    throw new Error(response?.errors[0].message);
  } catch (error: any) {
    throw new Error(error?.message);
  }
});

export const checkOutLoginFx = createEffect(async (body: ObjectType) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await CheckOutLoginService(body);

      if (response?.data?.checkOutLogin) {
        return response.data.checkOutLogin;
      }

      return null;
    }
  } catch (error: any) {
    throw new Error(error?.message);
  }
});
