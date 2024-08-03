import { Navigate } from "react-router";
import { useAppSelector } from "../redux/store";

export const AuthProtectedLayout = ({ children }: { children: any }) => {
  const { data } = useAppSelector((state) => state.auth);

  if (!data?.id) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="flex-grow p-7 md:pt-[33px] md:px-10 w-full overflow-auto ">
        {children}
      </div>
    </div>
  );
};
