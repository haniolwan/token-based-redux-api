import { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import { setAuthorization } from "../helpers/api_helper";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/auth/authAction";
import { AuthProtectedLayout } from "../layouts/AuthProtectedLayout";
import { useAppSelector } from "../redux/store";
import { useProfile } from "../hooks/UserHooks";

const AuthProtected = (props) => {
  const dispatch = useDispatch();
  const { userProfile, loading, token } = useProfile();

  useEffect(() => {
    if (userProfile && !loading && token) {
      setAuthorization(token);
    } else if (!userProfile && loading && !token) {
      dispatch(logoutUser());
    }
  }, [token, userProfile, loading, dispatch]);


  return <AuthProtectedLayout>{props.children} </AuthProtectedLayout>;
};

const AccessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            <Component {...props} />
          </>
        );
      }}
    />
  );
};

export { AuthProtected, AccessRoute };
