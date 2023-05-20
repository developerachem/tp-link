import React from "react";
import logo from "../../images/logo.png";
import { Facebook, Search } from "react-feather";
import excelLogo from "../../images/2-01.png";
import Container from "../container/Container";
const Header = () => {
  return (
    <div style={{ backgroundColor: "#e7fcff" }} className="py-5">
      <Container>
        <div className="flex items-center gap-10 justify-between">
          <div style={{ width: "20%" }}>
            <img src={logo} alt="" style={{ widtth: "100%" }} />
          </div>
          <div className="col-span-3" style={{ width: "70%" }}>
            <div className="flex gap-2 items-center justify-center">
              <ul className="flex gap-4">
                <li>
                  <a href="/">Forum</a>
                </li>
                <li>
                  <a href="/">Stories</a>
                </li>
                <li>
                  <a href="/">Knowladge Base</a>
                </li>
                <li>
                  <a href="/">FAQs</a>
                </li>
              </ul>
              <div className="relative" style={{ width: "200px" }}>
                <input
                  placeholder="Search..."
                  type="text"
                  className="border py-1 px-3 rounded pe-8 outline-none w-full"
                />
                <Search
                  size={18}
                  color="#ddd"
                  style={{ top: "8px", right: "10px" }}
                  className="absolute"
                />
              </div>
              <button
                style={{
                  backgroundColor: "#54c5d1",
                  fontSize: "15px",
                  padding: "2px 10px",
                }}
                className="rounded text-white"
              >
                Log In
              </button>
              <button
                style={{
                  backgroundColor: "#54c5d1",
                  fontSize: "15px",
                  padding: "2px 10px",
                }}
                className="rounded text-white"
              >
                Register
              </button>
              <Facebook />
            </div>
          </div>
          <div className="" style={{ width: "10%" }}>
            <img src={excelLogo} className="w-28 ml-auto" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
