import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Signup = () => {
  return (
    <div>
      <div className="container">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-container">
                <div className="form-title">Sign up</div>
                <div className="form-fields">
                  <label htmlFor="firstName">First Name</label>
                  <Field name="firstName" />
                  {errors.firstName && touched.firstName ? (
                    <div className="form-error">{errors.firstName}</div>
                  ) : null}
                  <label htmlFor="lastName">Last Name</label>
                  <Field name="lastName" />
                  {errors.lastName && touched.lastName ? (
                    <div className="form-error">{errors.lastName}</div>
                  ) : null}
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" />
                  {errors.email && touched.email ? (
                    <div className="form-error">{errors.email}</div>
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

export default Signup;
