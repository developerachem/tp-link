import React from "react";

const Container = ({ children }) => {
  return (
    <div className="m-auto px-5" style={{ width: "1300px" }}>
      {children}{" "}
    </div>
  );
};

export default Container;
