import axios from "axios";

import {
  ALL_ITEMS_REQUEST,
  ALL_ITEMS_SUCCESS,
  ALL_ITEMS_FAIL,
} from "../Constant/ItemsConstant";

export const getItems = (e) => async (dispatch) => {
  try {
    dispatch({ type: ALL_ITEMS_REQUEST });
    let link = `https://api.themoviedb.org/3/discover/movie?api_key=5771d10f10f648f1acc87c0cc8e7ba6b`;
    const { data } = await axios.get(link);
    // console.log(data.results);
    dispatch({ type: ALL_ITEMS_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({
      type: ALL_ITEMS_FAIL,
      payload: error.response.data.message,
    });
  }
};
