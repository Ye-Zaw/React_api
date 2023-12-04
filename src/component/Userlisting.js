import React from "react";
import { FetchUserList } from "../redux/Action";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Userlisting = (props) => {
  useEffect(() => {
    props.loaduser();
  }, []);
  return props.user.loading ? (
    <div>
      <h2>Loading...</h2>
    </div>
  ) : props.user.errmessage ? (
    <div>
      <h2>{props.user.errmessage}</h2>
    </div>
  ) : (
    <div>
      <div className="card">
        <div className="card-header">
          <h2>User Listing</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th>Code</th>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {props.user.userlist.data &&
                props.user.userlist.data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <img src={item.avatar} className="w-25" />
                    </td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link
                        to={`/user/detail/${item.id}`}
                        className="btn btn-primary">
                        Detail
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);
