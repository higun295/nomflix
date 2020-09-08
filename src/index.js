import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App";
import "./api";

// .env 파일에서 src 파일을 기본적으로 보게 만든다.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
