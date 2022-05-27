import React from "react";
import google from "../../images/googleLogo.png";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let errorElement;
  if (loading) {
    <Loading />;
  }
  if (error) {
    errorElement = <p className="text-danger">Error: {error.message}</p>;
  }
  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="bg-dark w-50" style={{ height: "1px" }}></div>
        <p className="mt-2 px-2">Or</p>
        <div className="bg-dark w-50" style={{ height: "1px" }}></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-dark text-light w-50 d-block mx-auto my-2"
        >
          <img src={google} alt />
          <span className="px-2">Google Signin</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
