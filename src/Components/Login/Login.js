import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = () => {
  return (
    <div>
      <div className="container">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-container">
                <div className="form-title">Login</div>
                <div className="form-fields">
                  <label htmlFor="email">Email</label>
                  <Field id="email" name="email" placeholder="Email" />
                  {errors.email && touched.email ? (
                    <div className="form-error">{errors.email}</div>
                  ) : null}
                  <label htmlFor="password">Password</label>
                  <Field id="password" name="password" placeholder="Password" />
                  {errors.password && touched.password ? (
                    <div className="form-error">{errors.password}</div>
                  ) : null}
                  <button type="submit">Submit</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
