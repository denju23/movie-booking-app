import {
  ALL_ITEMS_REQUEST,
  ALL_ITEMS_SUCCESS,
  ALL_ITEMS_FAIL,
} from "../Constant/ItemsConstant";

export const ItemsReducer = (state = { Items: [] }, action) => {
  switch (action.type) {
    case ALL_ITEMS_REQUEST:
      return {
        loading: true,
        Items: [],
      };
    case ALL_ITEMS_SUCCESS:
      return {
        loading: false,
        Items: action.payload,
      };
    case ALL_ITEMS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
