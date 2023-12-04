// Userdetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchUserDetail } from "../redux/Action";
import { useDispatch } from "react-redux";

const Userdetail = () => {
  const { code } = useParams();
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUserDetail = () => {
    dispatch(FetchUserDetail(code, setUserDetail, setLoading, setError));
  };

  useEffect(() => {
    apiUserDetail();
  }, [code, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>User Detail</h2>
      {/* Render user details here */}
      {userDetail && (
        <div>
          <p>Name: {userDetail.name}</p>
          <p>Email: {userDetail.email}</p>
          {/* Add other user details as needed */}
        </div>
      )}
    </div>
  );
};

export default Userdetail;
