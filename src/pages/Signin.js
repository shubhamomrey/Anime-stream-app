import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { BsFillEyeFill } from "react-icons/bs";
import Layout from "./../components/Layout/Layout";

const Signin = () => {
  const navigate = useNavigate();

  function onSubmitHndler() {
    navigate("/");
  }

  return (
    <Layout>
      <div className="d-flex  align-items-center justify-content-center w-100 mt-4">
        <form className="bg-light p-4">
          <h4 className="bg-dark p-2 mt-2 text-light text-center">Sign In</h4>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input className="form-control" id="password" />
            <span>
              show password
              <BsFillEyeFill
                className="text-danger ms-2"
                style={{ cursor: "pointer" }}
              />
            </span>{" "}
           
          </div>
          <button
            onClick={onSubmitHndler}
            type="submit"
            className="btn btn-primary"
          >
            Sign in
          </button>
          <div className="mt-2">
            <span>New User</span> <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signin;
