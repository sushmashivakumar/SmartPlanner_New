import React, { useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Dialog } from "primereact/dialog";
import Api from "../service/Api";
import { signUp } from "../service/Config";

const Signup = () => {
  const [showMessage, setShowMessage] = useState(false);
  // const [error, setError] = useState("");
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    validate: (data) => {
      let errors = {};
      if (!data.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }

      if (!data.password) {
        errors.password = "Password is required";
      }

      if (!data.confirm_password) {
        errors.confirm_password = "Confirm password is required";
      }

      if (data.password && data.confirm_password) {
        if (data.password !== data.confirm_password) {
          errors.confirm_password = "Password and Confirm password not matched";
        }
      }

      return errors;
    },
    onSubmit: (data) => {
      // Api call for Signup
      Api.post(signUp,  data )
        .then((res) => {
          console.log(res)
          const response = res;
          if (response.data.success) {
            setShowMessage(true);
          }
        })
        .catch((error) => {
          // setError(error);
        });

      
      //   navigate("dashboard");
      formik.resetForm();
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };
  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  return (
    <>
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="flex align-items-center flex-column pt-6 px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>
          <h5>Registration Successful!</h5>
          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Your account is registered it'll be valid next 30 days without
            activation. Please check your email for activation instructions.
          </p>
        </div>
      </Dialog>
      <div className="ui-grid-col-8">
        <div className="form-demo">
          <div className="flex justify-content-center">
            <div className="card">
              <h5 className="text-center">Signup</h5>
              <form onSubmit={formik.handleSubmit} className="p-fluid">
                <div className="field">
                  <span className="p-float-label p-input-icon-right">
                    <InputText
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className={classNames({
                        "p-invalid": isFormFieldValid("email"),
                      })}
                    />
                    <label
                      htmlFor="email"
                      className={classNames({
                        "p-error": isFormFieldValid("email"),
                      })}
                    >
                      User/Email*
                    </label>
                  </span>
                  {getFormErrorMessage("email")}
                </div>
                <div className="field">
                  <span className="p-float-label p-input-icon-right">
                    <Password
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      feedback={false}
                    />
                    <label
                      htmlFor="password"
                      className={classNames({
                        "p-error": isFormFieldValid("password"),
                      })}
                    >
                      Password*
                    </label>
                  </span>
                  {getFormErrorMessage("password")}
                </div>
                <div className="field">
                  <span className="p-float-label p-input-icon-right">
                    <Password
                      id="confirm_password"
                      name="confirm_password"
                      value={formik.values.confirm_password}
                      onChange={formik.handleChange}
                      feedback={false}
                    />
                    <label
                      htmlFor="confirm_password"
                      className={classNames({
                        "p-error": isFormFieldValid("confirm_password"),
                      })}
                    >
                      Confirm Password*
                    </label>
                  </span>
                  {getFormErrorMessage("confirm_password")}
                </div>

                <Button
                  type="submit"
                  style={{ backgroundColor: "#405685", color: "white" }}
                  label="Sign Up"
                  className="mt-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
