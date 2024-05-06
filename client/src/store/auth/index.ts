import { createStore } from "effector";
import { checkOutLoginFx, signInFx } from "./effects";
import { UserState, UserType } from "./types";

export const $userState = createStore<UserState>({
  user: null,
  isLoggedIn: false,
});

$userState
  .on(signInFx.doneData, (state, result: any) => {
    if (result !== null) {
      return {
        ...state,
        user: result,
        isLoggedIn: true,
      };
    } else {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
  })
  .on(signInFx.fail, (state) => ({
    ...state,
  }))

  .on(checkOutLoginFx.doneData, (state, result: any) => {
    if (result !== null) {
      return {
        ...state,
        user: result,
        isLoggedIn: true,
      };
    } else {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
  })
  .on(signInFx.fail, (state) => ({
    ...state,
  }));
