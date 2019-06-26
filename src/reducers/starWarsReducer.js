import {FETCH, SUCCESSFUL_HUNT, RETURNED_WITH_NOTHING} from "../actions"



 /* we need our action types here*/
const initialState = {
   characters: [],
  fetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        fetching: true,
        error: null,
      }
    case SUCCESSFUL_HUNT:
      return {
        ...state,
        fetching: false,
        characters: [...state.characters, ...action.payload]
      }
    case RETURNED_WITH_NOTHING:
      return {
        ...state,
        fetching: false,
        error: "sup foo",
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};