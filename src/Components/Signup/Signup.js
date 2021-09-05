import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
const Signup = () => {
  return (
    <div>
      <div className="container">
        {/* <div className="form-container">
          <div className="form-title">Sign up</div>
          <form action="/signup" method="post" className="form">
            <label for="username">username</label>
            <br />
            <input type="text" name="username" required />
            <br />

            <label for="email">email</label>
            <br />
            <input
              type="text"
              name="email"
              pattern="[^ @]*@[^ @]*"
              required
              oninvalid="setCustomValidity('Please enter valid Email.')"
              onchange="try{setCustomValidity('')}catch(e){}"
            />
            <br />

            <label for="password">password</label>
            <br />
            <input type="password" name="password" required />
            <br />

            <label for="password-confirm">confirm password</label>
            <br />
            <input type="text" name="password-confirm" required />
            <br />

            <div id="form-button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div> */}
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <div className="form-container">
              <div className="form-title">Sign up</div>
              <div className="form-fields">
                <label htmlFor="firstName">First Name</label>
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
                {/* <label for="username">username</label><br />
                    <input type="text" name="username" required /><br /> */}
                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Last Name" />
                {/* <label for="email">email</label><br />
                    <input
                        type="text"
                        name="email"
                        pattern="[^ @]*@[^ @]*"
                        required
                        oninvalid="setCustomValidity('Please enter valid Email.')"
                        onchange="try{setCustomValidity('')}catch(e){}"
                    /><br /> */}
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                {/* <label for="password">password</label><br />
                    <input type="password" name="password" required /><br />

                    <label for="password-confirm">confirm password</label><br />
                    <input type="text" name="password-confirm" required /><br /> */}

                <button type="submit">Submit</button>
                {/* <div id="form-button">
                <button type="submit">Submit</button>
              </div> */}
              </div>
            </div>

            {/* <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="Jane" />

            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <button type="submit">Submit</button> */}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
