import * as React from "react";
import myImage from "./logo.png";

function MyComponent(props) {
  return (
    <div>
      <img src={myImage} alt="Logo" style={{ height: "50px", width: "50px" }} />
    </div>
  );
}

export default MyComponent;
