import { useEffect, useState } from "react";
import { getLoggedUser } from "../helpers/api_helper";

const useProfile = () => {
  const userProfileSession = getLoggedUser();

  var token =
    userProfileSession && userProfileSession["Login"]?.access_token;
  const [loading, setLoading] = useState(userProfileSession ? false : true);
  const [userProfile, setUserProfile] = useState(
    userProfileSession ? userProfileSession : null
  );

  useEffect(() => {
    const userProfileSession = getLoggedUser();
    var token =
      userProfileSession && userProfileSession["Login"]?.access_token;
    setUserProfile(userProfileSession ? userProfileSession : null);
    setLoading(token ? false : true);
  }, []);

  return { userProfile, loading, token };
};

export { useProfile };
