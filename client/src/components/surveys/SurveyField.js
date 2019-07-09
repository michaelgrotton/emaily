//single label and text input
import React from "react";

export default ({ input, label, meta }) => {
  const { error, touched } = meta;
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
