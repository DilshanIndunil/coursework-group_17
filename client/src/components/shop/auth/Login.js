import React, { Fragment, useState, useContext } from "react";
import { loginReq } from "./fetchApi";
import { LayoutContext } from "../index";
import { useSnackbar } from 'notistack';

const Login = (props) => {
  const { data: layoutData, dispatch: layoutDispatch } = useContext(
    LayoutContext
  );

  const [data, setData] = useState({
    email: "",
    password: "",
    error: false,
    loading: true,
  });

  const alert = (msg) => <div className="text-xs text-red-600">{msg}</div>;

  const { enqueueSnackbar } = useSnackbar();

  const formSubmit = async (isAdmin) => {
    setData({ ...data, loading: true });
    try {
      const endpoint = isAdmin ? "/admin/login" : "/user/login"; // Adjust the endpoints as needed
      let responseData = await loginReq({
        email: data.email,
        password: data.password,
        endpoint,
      });
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
        });
      } else if (responseData.token) {
        setData({ email: "", password: "", loading: false, error: false });
        localStorage.setItem("jwt", JSON.stringify(responseData));
        enqueueSnackbar(
          isAdmin ? "Admin Login Completed Successfully..!" : "Login Completed Successfully..!",
          { variant: 'success' }
        );
        window.location.href = isAdmin ? "/admin/dashboard" : "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="text-center text-3xl font-semibold mb-6 text-blue-700">
        Login
      </div>
      {layoutData.loginSignupError ? (
        <div className="bg-red-100 py-2 px-4 rounded border-l-4 border-red-600 text-red-700">
          You need to login for checkout. Haven't an account? Create a new one.
        </div>
      ) : (
        ""
      )}
      <form className="space-y-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg text-gray-800">
            Username or email address
            <span className="text-sm text-gray-500 ml-1">*</span>
          </label>
          <input
            onChange={(e) => {
              setData({ ...data, email: e.target.value, error: false });
              layoutDispatch({ type: "loginSignupError", payload: false });
            }}
            value={data.email}
            type="text"
            id="name"
            className={`${
              !data.error ? "border-gray-300" : "border-red-500"
            } px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {!data.error ? "" : alert(data.error)}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg text-gray-800">
            Password
            <span className="text-sm text-gray-500 ml-1">*</span>
          </label>
          <input
            onChange={(e) => {
              setData({ ...data, password: e.target.value, error: false });
              layoutDispatch({ type: "loginSignupError", payload: false });
            }}
            value={data.password}
            type="password"
            id="password"
            className={`${
              !data.error ? "border-gray-300" : "border-red-500"
            } px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {!data.error ? "" : alert(data.error)}
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">
          <div>
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2 text-blue-600"
            />
            <label htmlFor="rememberMe" className="text-gray-700">
              Remember me
            </label>
          </div>
          <a className="block text-blue-500 hover:underline" href="/">
            Lost your password?
          </a>
        </div>
        <div
          onClick={() => formSubmit(false)}
          style={{ background: "#0077b6" }}
          className="font-medium px-6 py-3 text-white text-center rounded-md cursor-pointer hover:bg-blue-700 transition duration-300"
        >
         User Login
        </div>
        <div
          onClick={() => formSubmit(true)}
          style={{ background: "#d00000" }}
          className="font-medium px-6 py-3 text-white text-center rounded-md cursor-pointer hover:bg-red-700 transition duration-300 mt-4"
        >
          Admin Login
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
