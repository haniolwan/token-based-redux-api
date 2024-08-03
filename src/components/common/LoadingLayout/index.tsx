import { FC, ReactNode } from "react";
import { CustomLoading } from "../CustomLoading";
import "./style.css";

type LoadingLayoutProps = {
  isLoading?: boolean;
  boxStyle?: string;
  children?: ReactNode;
};

export const LoadingLayout: FC<LoadingLayoutProps> = ({
  isLoading = "Loading",
  boxStyle = "loading-layout",
  children,
}) => {
  return isLoading ? (
    <div className={boxStyle}>
      <div className="w-20 h-20">
        <CustomLoading />
      </div>
    </div>
  ) : (
    children
  );
};
