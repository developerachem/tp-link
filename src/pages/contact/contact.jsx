import React from "react";
import Container from "../../components/container/Container";
import RGImage from "../../images/Logo_Register_&_Win.png";
import contactCss from "./contact.module.css";

const Contact = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-2 items-center py-28">
          <img src={RGImage} alt="" style={{ width: "400px" }} />
          <div className={contactCss.contact}>
            <form action="#">
              <label>
                <p>Name :</p>
                <input type="text" placeholder="Name" />
              </label>

              <div className="grid grid-cols-3 gap-2">
                <label className="col-span-2">
                  <p>Mobile Number:</p>
                  <input type="text" placeholder="Number" />
                </label>

                <label>
                  <p>Date:</p>
                  <input type="date" />
                </label>
              </div>

              <label>
                <p>Email:</p>
                <input type="text" placeholder="Email" />
              </label>

              <label>
                <p>Product Model Number:</p>
                <input type="text" placeholder="Model Number" />
              </label>

              <label>
                <p>Product Serial Number:</p>
                <input type="text" placeholder="Serial Number" />
              </label>

              <div className="text-center">
                <button
                  className="py-2 px-16 text-white rounded text-xl"
                  style={{ backgroundColor: "#023a8d" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
