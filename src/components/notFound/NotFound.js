import React from "react";
import notFound from "../../images/404.png";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-center text-danger">Page not found</h2>
      <img src={notFound} alt="" style={{ width: "100%" }} />
    </div>
  );
};

export default NotFound;
