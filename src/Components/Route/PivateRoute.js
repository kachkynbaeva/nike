import React,{useEffect} from "react";
import {Navigate} from "react-router-dom";
import {isAuth} from "../../lib/helper";

const ProtectedRoute = ({element}) => {
    if (!isAuth) {
        return <Navigate to="/sing-in" replace />;
    }else{
        return element;
    }
};

export default ProtectedRoute;