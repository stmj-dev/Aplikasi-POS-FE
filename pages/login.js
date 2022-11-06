import axios from "axios";
import { AES } from "crypto-js";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function Login() {
  const api = process.env.NEXT_PUBLIC_URL_API;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

    async function CheckAuth() {
      const token = localStorage.getItem("token");
      try {
        const { data } = await axios(api + "check-auth", {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        if(data.auth == true){
            window.location.href = '/'
        }
      } catch (e) {
        console.log(e);
      }
    }
    CheckAuth().then((r) => r);

  function handleSetEmail(e) {
    // e.preventDefault()
    setEmail(e.target.value);
  }

  function handleSetPassword(e) {
    // e.preventDefault()
    setPassword(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    setLoading(true);
    async function Submit() {
      try {
        await axios
          .post(api + "login", {
            email: email,
            password: password,
          })
          .then(function ({ data }) {
            console.log(data);

            setLoading(false);

            if (data.success == true) {
                let createTokenEnc = AES.encrypt(data.token);
                Cookies.set('token', createTokenEnc);
                window.location.href = "/";

                console.log(createTokenEnc);
            }
          })
          .catch(function ({ response }) {
            setLoading(false);
            if (response) {
              console.log(response.data);
            }
          });
      } catch (e) {
        setLoading(false);
        console.log(e.message);
      }
    }

    Submit().then((r) => r);
  }

  return (
    <div>
      <div className={"container"}>
        <div
          className={"row justify-content-center mt-5"}
          style={{ height: "100vh" }}
        >
          <div className={"col-md-5 "}>
            <span className={"d-block text-center p-2"} id={"message"}>
              {loading == false ? (
                ""
              ) : (
                <>
                  <div
                    className={"spinner-border spinner-border-sm text-dark"}
                  ></div>
                  <span className={"fs-6 ms-1"}>Loading ... </span>
                </>
              )}
            </span>
            <div className="card shadow bg-light">
              <h3 className={"text-center pt-2"}>Login</h3>
              <hr />
              <form onSubmit={handleSubmitForm}>
                <div className={"row justify-content-center p-3 mb-3"}>
                  <div className={"col-md-10 mb-3"}>
                    <label htmlFor={"email"} className="fw-bold">
                      Email
                    </label>
                    <input
                      type={"email"}
                      id="email"
                      onChange={(e) => handleSetEmail(e)}
                      className="w-100 h-75 rounded border shadow-sm"
                    />
                  </div>
                  <div className={"col-md-10 mb-3"}>
                    <label htmlFor={"password"} className="fw-bold">
                      Password
                    </label>
                    <input
                      type={"password"}
                      id="password"
                      onChange={(e) => handleSetPassword(e)}
                      className="w-100 h-75 rounded border shadow-sm"
                    />
                  </div>
                  <div className={"col-md-10 mb-3 mt-2"}>
                    <button type="submit" className="btn btn-secondary">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
