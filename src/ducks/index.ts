import {combineReducers, Dispatch} from "redux";
import {routerReducer, RouterState} from "react-router-redux";
import app, { AppState } from './app/reducer';

// The top-level state object
export interface GlobalState {
  routing: RouterState,
  app: AppState
}

export type Action = (dispatch: Dispatch, getState: () => GlobalState) => any;

export default combineReducers<GlobalState>({
  routing: routerReducer,
  app,
});
