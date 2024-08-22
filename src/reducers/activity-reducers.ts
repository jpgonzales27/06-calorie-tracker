import { Activity } from "../types";

export type ActivityActions =
  | {
      type: "save-activity";
      payload: { newActiviy: Activity };
    }
  | {
      type: "set-activeId";
      payload: { id: Activity["id"] };
    }
  | {
      type: "delete-activity";
      payload: { id: Activity["id"] };
    };

export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
};

export const initialState: ActivityState = {
  activities: [],
  activeId: "",
};

export const activityReducer = (state: ActivityState = initialState, action: ActivityActions) => {
  if (action.type === "save-activity") {
    //Este codigo manejas la logica para actualizar el state
    let updateActicities: Activity[] = [];

    if (state.activeId) {
      updateActicities = state.activities.map((activity) =>
        activity.id === state.activeId ? action.payload.newActiviy : activity
      );
    } else {
      updateActicities = [...state.activities, action.payload.newActiviy];
    }

    return {
      ...state,
      activities: updateActicities,
      activeId: "",
    };
  }

  if (action.type === "set-activeId") {
    return {
      ...state,
      activeId: action.payload.id,
    };
  }

  if (action.type === "delete-activity") {
    return {
      ...state,
      activities: state.activities.filter((activity) => activity.id !== action.payload.id),
    };
  }

  return state;
};
