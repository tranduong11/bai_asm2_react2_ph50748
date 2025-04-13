import axios from 'axios';
const API_URL = 'https://67f8d9cd2466325443ee11a1.mockapi.io/distributors';

export const fetchDistributors = () => async (dispatch) => {
  dispatch({ type: 'FETCH_DISTRIBUTORS_REQUEST' });
  try {
    const res = await axios.get(API_URL);
    dispatch({ type: 'FETCH_DISTRIBUTORS_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_DISTRIBUTORS_FAIL', payload: error.message });
  }
};

export const deleteDistributor = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/${id}`);
  dispatch({ type: 'DELETE_DISTRIBUTOR_SUCCESS', payload: id });
};
