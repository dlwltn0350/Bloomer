import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OauthRedirect = () => {
  const params = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const search = params.search;
    const splitedSearch = search.split("&&");
    console.log(splitedSearch);

    localStorage.setItem("accessToken", splitedSearch[1].slice(12));
    localStorage.setItem("refreshToken", splitedSearch[0].slice(14));
    // navigate('/garden')
  }, []);

  return <></>;
};

export default OauthRedirect;
