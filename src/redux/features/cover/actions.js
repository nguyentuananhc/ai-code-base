import request from "@utils/request";
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from "./slice";

export const fetchCovers = () => async (dispatch) => {
  dispatch(fetchDataStart());

  try {
    const response = await request.get("/api/covers");
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};
