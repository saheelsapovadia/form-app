import React from "react";
import { Formik, Form, Field } from "formik";
const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="form-container">
          <div className="form-title">Sign in</div>
          {/* <form action="/login" method="post" className="form">
            <label for="username">username</label>
            <br />
            <input type="text" name="username" required />
            <br />

            <label for="password">password</label>
            <br />
            <input type="password" name="password" required />
            <br />

            <div id="form-button">
              <button type="submit">Login</button>
            </div>
          </form> */}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <div className="form-fields">
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <Field id="password" name="password" placeholder="Password" />
                <button type="submit">Submit</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
