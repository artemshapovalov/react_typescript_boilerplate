import * as ActionTypes from "./constants";
import {ActionsUnion, createAction} from "../action-helper";

export const AppActions = {
  init: () => createAction(ActionTypes.APP_INITIALIZED)
};

export type AppActions = ActionsUnion<typeof AppActions>

// const SET_AGE = '[user] SET_AGE';
// const Actions = {
//   setAge: (age: number) => createAction(SET_AGE, age)
// };
// export type Actions = ActionsUnion<typeof Actions>
