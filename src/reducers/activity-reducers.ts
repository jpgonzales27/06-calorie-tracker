import { Activity } from "../types";

export type ActivityActions = {
  type: "save-activity";
  payload: { newActiviy: Activity };
};

type ActivityState = {
  activities: Activity[];
};

export const initialState: ActivityState = {
  activities: [],
};

export const activityReducer = (state: ActivityState = initialState, action: ActivityActions) => {
  if (action.type === "save-activity") {
    console.log("hola desde el activity");
  }

  return state;
};
