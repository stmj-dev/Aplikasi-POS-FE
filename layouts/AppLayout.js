import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function AppLayout({ children, title }) {
  return (
    <div>
      <Head>{Path()}</Head>
      <div className="container-fluid bg-light pt-2">
        <div className="py-2 px-3 d-flex">
          <Sidebar />
          <div className="ms-auto d-none d-md-block">
            <h4>Sistem Kasir</h4>
          </div>
          <ul className="ms-auto d-flex">
            <li className="list-unstyled">
              <Link href="/">
                <a className={"text-decoration-none px-2 pt-1"}>Home</a>
              </Link>
            </li>
            <li className="list-unstyled">
              <Link href="/transaksi">
                <a className={"text-decoration-none px-2 pt-1"}>Transaksi</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white">
        <div className="container pt-4">{children}</div>
      </div>
    </div>
  );
}

function Path() {
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);
  return (
    <title>
      {path == "/"
        ? "Home"
        : path == "/transaksi"
        ? "Transaksi"
        : "Sistem Kasir App"}
    </title>
  );
}

export default AppLayout;
