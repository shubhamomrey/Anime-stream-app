import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

import { BsFillEyeFill } from "react-icons/bs";

const Signup = () => {
  const navigate = useNavigate();

  function onSubmitHndler() {
    navigate("/");
  }

  return (
    <Layout>
      <div className="d-flex  align-items-center justify-content-center w-100 mt-4">
        <form className="bg-light p-4">
          <h4 className="bg-dark p-2 mt-2 text-light text-center">Sign Up </h4>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              // onChange={onChange}
              aria-describedby="nameHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              // value={email}
              // onChange={onChange}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              // value={password}
              // onChange={onChange}
              className="form-control"
              id="password"
            />
            <span>
              show password
              <BsFillEyeFill
                className="text-danger ms-2"
                style={{ cursor: "pointer" }}
              />
            </span>
          </div>
          <button
            onClick={onSubmitHndler}
            type="submit"
            className="btn btn-primary"
          >
            Sign up
          </button>
          <div>
            <span>Already User</span> <Link to="/signin">Login</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
