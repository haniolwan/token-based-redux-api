import Login from "../pages/login";

const authProtectedRoutes = [
  {
    path: "/",
    exact: true,
    component: ''
  },
];

const unAuthProtectedRoutes = [
  { path: "/login", component: <Login /> },
];

export { authProtectedRoutes, unAuthProtectedRoutes };
