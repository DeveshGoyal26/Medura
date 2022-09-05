import React from "react";
import { Link } from "react-router-dom";

const Error_page = () => {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          color: "hsl(187, 69%, 12%)",
          marginTop: "30px",
        }}
      >
        Page Not Found <Link to="/Medura">Go To Home Page</Link>
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://m2.alothemes.com/funio/media/wysiwyg/404-2_3.gif"
          alt=""
        />
      </div>
    </>
  );
};

export default Error_page;
