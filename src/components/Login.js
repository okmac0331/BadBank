import { useFormik } from "formik";
import { useContext } from "react";
import { Store } from "../AppState/Store";
import Card from "../util/card";
import Error from "../util/error";



export default function Login() {
  const { state, actions } = useContext(Store);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      actions.logIn(values);
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
  });
  return (
    <>
      <br />
      <hr className="solid"></hr>
      <h3>{state.currentUser ? "PROFILE" : "LOGIN"}</h3>
      <Card
        bgcolor="secondary"
        header={
          state.currentUser ? "Profile" : "Login Using Existing Credentials"
        }
        body={
          !state.currentUser ? (
            <div>
              <form onSubmit={formik.handleSubmit} data-testid="login-form">
                <div className="mb-3">
                  <div>Email</div>
                  <input
                    type="text"
                    className="form-control"
                    id="emailField"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    aria-label="email-field"
                  />
                  {formik.errors.email ? (
                    <Error id="emailError" message={formik.errors.email} />
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="pswField">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pswField"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    aria-label="password-field"
                  />
                  {formik.errors.password ? (
                    <Error id="emailError" message={formik.errors.password} />
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary"
                  id="submitBtn"
                  aria-label="login-button"
                >
                  Login
                </button>
              </form>
            </div>
          ) : (
            // Success if a registered user
            <div>
              <div id="login-message">Login Successful!</div>
              <br /> Hello, {state.currentUser.name}
            </div>
          )
        }
      />
      <br />
    </>
  );
}