import { Routes, Route } from "react-router-dom";
import {
  authProtectedRoutes,
  unAuthProtectedRoutes,
} from "./allRoutes";
import { AuthProtected } from "./AuthProtected";
import NonAuthLayout from "../layouts/NonAuthLayout";
import { LoadingLayout } from "../components/common/LoadingLayout";

export const Routs = () => {
  return (
    <LoadingLayout
      isLoading={false}
      boxStyle=" w-full h-screen flex-center"
    >
      <Routes>
        <Route>
          {unAuthProtectedRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<NonAuthLayout>{route.component}</NonAuthLayout>}
              key={idx}
            />
          ))}
        </Route>

        {/* <Route>
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={route.component}
              key={idx}
              exact={true}
            />
          ))}
        </Route> */}

        <Route>
          {authProtectedRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <AuthProtected >
                  {route.component}
                </AuthProtected>
              }
              key={idx}
            >
            </Route>
          ))}
        </Route>
      </Routes>
    </LoadingLayout>
  );
};
