import { FC } from "react";
import "./style.css";

type CustomLoadingProps = {
  text?: string;
  textStyle?: string;
  strokeColor?: string;
};

export const CustomLoading: FC<CustomLoadingProps> = ({
  text = "Loading",
  textStyle = "text-secondary-color",
  strokeColor = "stroke-secondary-color",
}) => {
  return (
    <div className="loading-spinner-container" role="status">
      <div className="h-full w-full relative ">
        <svg
          aria-hidden="true"
          className="loading-spinner-svg animate-spin"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${strokeColor}`}
            d="M45.5 25C45.5 27.6921 44.9698 30.3578 43.9395 32.845C42.9093 35.3322 41.3993 37.5921 39.4957 39.4957C37.5921 41.3993 35.3322 42.9093 32.845 43.9395C30.3578 44.9698 27.6921 45.5 25 45.5C22.3079 45.5 19.6422 44.9698 17.155 43.9395C14.6678 42.9093 12.4079 41.3993 10.5043 39.4957C8.60071 37.5921 7.09069 35.3322 6.06047 32.845C5.03025 30.3578 4.5 27.6921 4.5 25"
            strokeOpacity="0.3"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <svg
          aria-hidden="true"
          className=" loading-spinner-svg animate-reverse-spin"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${strokeColor}`}
            d="M11.5 25C11.5 23.2272 11.8492 21.4717 12.5276 19.8338C13.2061 18.1959 14.2005 16.7077 15.4541 15.4541C16.7076 14.2005 18.1959 13.2061 19.8338 12.5276C21.4717 11.8492 23.2272 11.5 25 11.5C26.7728 11.5 28.5283 11.8492 30.1662 12.5276C31.8041 13.2061 33.2924 14.2005 34.5459 15.4541C35.7995 16.7076 36.7939 18.1959 37.4724 19.8338C38.1508 21.4717 38.5 23.2272 38.5 25"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <svg
          aria-hidden="true"
          className=" h-full animate-spin "
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${strokeColor}`}
            d="M20.5 25C20.5 25.5909 20.6164 26.1761 20.8425 26.7221C21.0687 27.268 21.4002 27.7641 21.818 28.182C22.2359 28.5998 22.732 28.9313 23.2779 29.1575C23.8239 29.3836 24.4091 29.5 25 29.5C25.5909 29.5 26.1761 29.3836 26.7221 29.1575C27.268 28.9313 27.7641 28.5998 28.182 28.182C28.5998 27.7641 28.9313 27.268 29.1575 26.7221C29.3836 26.1761 29.5 25.5909 29.5 25"
            strokeOpacity="0.6"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <p className={`text-lg font-semibold ${textStyle}`}>{text}</p>
    </div>
  );
};
