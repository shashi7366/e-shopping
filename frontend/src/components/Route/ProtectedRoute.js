import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = ({ isAdmin,children}) => {
  const { loaded, isAuthenticated, user } = useSelector((state) => state.user);

//   if(loaded){
  //   if(!isAuthenticated){
  //     console.log("authentication failed");
  // return <Navigate to='/login' replace />
  //   }else if (isAdmin === true && user.role !== "admin") {
  //     return <Navigate to='/login' replace/>;
  //   }
  //   return children;

//   }
// else{
//   return <Navigate to='/login' replace />
// }
return <div>{loaded?(!isAuthenticated?<Navigate to='/login' replace />:((user.role!='admin'&&isAdmin==true)?<Navigate to='/login' replace />:(children?children:<Outlet />))):<h1>loading</h1>}</div>
  
    
};

export default ProtectedRoute;