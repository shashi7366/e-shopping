import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Route } from "react-router-dom";
import LoginSignUp from "../LoginSignUp/loginSignUp";

const ProtectedRoute = ({ isAdmin, element: element, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
const navigate=useNavigate();
  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Route path='login' element={<LoginSignUp />} />;
            }

            if (isAdmin === true && user.role !== "admin") {
              return ;
            }

            return <Route path='login' element={<LoginSignUp />} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;