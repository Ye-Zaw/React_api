import axios from "axios";
import { FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./ActionType";

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};

export const failRequest = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};

export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};

export const FetchUserList = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    //setTimeout(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        const userlist = res.data;
        dispatch(getUserList(userlist));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    //}, 2000);
  };
};

export const FetchUserDetail = (
  userId,
  setUserDetail,
  setLoading,
  setError
) => {
  return () => {
    setLoading(true);

    axios
      .get(`https://reqres.in/api/users/${userId}`)
      .then((res) => {
        const userDetails = res.data.data; // Adjust this based on your API response structure
        setUserDetail(userDetails);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
};
