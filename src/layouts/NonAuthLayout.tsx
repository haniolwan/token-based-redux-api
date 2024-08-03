import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

const NonAuthLayout = ({ children }: { children: any }) => {
  const { data } = useAppSelector((state) => state.auth);
  
  if (data?.Login?.id) {
    return <Navigate to={"/dashboard"} />;
  }

  return <>{children}</>;
};

export default NonAuthLayout;
