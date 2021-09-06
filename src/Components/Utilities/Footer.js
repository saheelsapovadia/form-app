import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer-container">
          <div class="footer-content">
            <p className="lib">
              Made with{" "}
              <span style={{ fontSize: "25px", color: "red" }}>&hearts;</span>{" "}
              using <a href="https://formik.org/">Formik</a> &{" "}
              <a href="https://www.npmjs.com/package/yup">Yup</a>
            </p>
            {/* made by team */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
