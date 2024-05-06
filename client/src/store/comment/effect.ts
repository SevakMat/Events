import { createEffect } from "effector";
import { ObjectType } from "shared/helpers/types";
import { CreateCommentService } from "./service";

export const createCommentFx = createEffect(async (body: ObjectType) => {
  try {
    const response = await CreateCommentService(body);

    if (response?.data?.createComment) {
      return response.data.createComment;
    }
    return [];
  } catch (error: any) {
    throw new Error(error?.message);
  }
});
