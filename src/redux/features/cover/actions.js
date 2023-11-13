import request from "@utils/request";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  createCoverSuccess,
  createCoverFailure,
  setCover,
} from "./slice";

export const fetchModels = () => async (dispatch) => {
  dispatch(fetchDataStart());

  try {
    const response = await request.get("/api/models");
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

export const createCoversRequest =
  ({ youtubeUrl, speakerId }) =>
  async (dispatch) => {
    try {
      const response = await request.post("/api/covers", {
        youtubeUrl,
        speakerId,
      });
      dispatch(createCoverSuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(createCoverFailure(error.message));
      return error;
    }
  };

export const getCoversRequest =
  ({ requestId }) =>
  async (dispatch) => {
    try {
      const response = await request.get(`/api/covers/${requestId}`, {
        params: { requestId },
      });
      dispatch(setCover(response.data));
    } catch (error) {}
  };
