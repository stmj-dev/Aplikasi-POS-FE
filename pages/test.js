import { StatusMessage } from "../components/StatusMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function Test() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
  return (
    <div>
      
    </div>
  );
}

export default Test;
