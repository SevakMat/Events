import { CheckOutLoginGQL, SignInGQL, SignUpGQL } from "queries/auth";
import { NavigateFunction } from "react-router-dom";
import { BASE_URL } from "shared/helpers/constants";
import { ObjectType } from "shared/helpers/types";
import BaseApi from "utils/api/baseApi";

const baseApi = new BaseApi();

export const SignUpService = (body: ObjectType) => {
  const gqlPayload = {
    query: SignUpGQL,
    variables: body,
  };
  return baseApi.post(BASE_URL, gqlPayload);
};

export const SignInService = (body: ObjectType) => {
  const gqlPayload = {
    query: SignInGQL,
    variables: body,
  };
  return baseApi.post(BASE_URL, gqlPayload);
};

export const SignOutService = (navigate: NavigateFunction) => {
  localStorage.clear();
  navigate("/signin");
};

export const CheckOutLoginService = (token: ObjectType) => {
  const gqlPayload = {
    query: CheckOutLoginGQL,
    variables: token,
  };
  return baseApi.post(BASE_URL, gqlPayload);
};
