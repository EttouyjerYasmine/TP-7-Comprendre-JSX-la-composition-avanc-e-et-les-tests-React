// src/withTimestamp.js
import React from "react";

function withTimestamp(WrappedComponent) {
  return function WithTimestamp(props) {
    const timestamp = new Date().toLocaleString();
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
        <WrappedComponent {...props} />
        <small style={{ color: "gray" }}>Rendu à : {timestamp}</small>
      </div>
    );
  };
}

export default withTimestamp;
