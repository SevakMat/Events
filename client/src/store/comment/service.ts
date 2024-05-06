import { createCommentGQL } from "queries/comment";
import { BASE_URL } from "shared/helpers/constants";
import { ObjectType } from "shared/helpers/types";
import BaseApi from "utils/api/baseApi";

const baseApi = new BaseApi();

export const CreateCommentService = (body: ObjectType) => {
  const gqlPayload = {
    query: createCommentGQL,
    variables: body,
  };
  return baseApi.post(BASE_URL, gqlPayload);
};
