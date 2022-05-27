import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";

import Loading from "../loading/Loading";
import { Toast } from "bootstrap";
import { Button, Form } from "react-bootstrap";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || sending) {
    <Loading />;
  }
  if (error) {
    errorElement = <p className="text-danger">Error: {error.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Enter your email");
    }
  };

  return (
    <div className="container w-50 mx-auto mt-2">
      <h2 className="text-center text-dark">Please log in !</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      {/* {errorElement} */}
      <p>
        New to Computer Source ?{" "}
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none "
          onClick={navigateRegister}
        >
          Please register
        </Link>
      </p>
      <p>
        Forget password
        <button
          className="text-primary pe-auto text-decoration-none btn btn-link"
          onClick={resetPassword}
        >
          Reset password
        </button>
      </p>
      <SocialLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;
