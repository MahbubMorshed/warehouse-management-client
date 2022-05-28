import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import Loading from "../loading/Loading";
import SocialLogin from "../login/SocialLogin";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVarification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    navigate("/home");
  }
  if (loading || updating) {
    <Loading />;
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    // alart("Update profile");
    navigate("/");
  };

  return (
    <div className="register-form container w-50 mx-auto mt-2">
      <h2 className="text-center text-dark">Please Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          className="form-control w-50 mx-auto mb-3"
          name="name"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="form-control w-50 mx-auto mb-3"
          name="email"
          placeholder="Your Email"
        />
        <input
          type="password"
          className="form-control w-50 mx-auto mb-3"
          name="password"
          placeholder="Password"
        />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={agree ? "ps-2 text-dark" : "ps-2 text-primary text-center"}
        >
          Accept computer source term and condition
        </label>
        <input
          disabled={!agree}
          className="btn btn-dark w-50 mx-auto d-block mb-2"
          type="submit"
          value="register"
        />
      </form>
      <p>
        Already have an account ?{" "}
        <Link
          to="/login"
          classname="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please login
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
