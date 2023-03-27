import { GET_DETAIL_PETS, POST_SUCCESS } from "../ActionsTypes/actions_types";

const initialState = {
  detail: [],
  formData: {},
};

function pets_reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DETAIL_PETS:
      return {
        ...state,
        detail: action.payload,
      };

    case POST_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default pets_reducer;
