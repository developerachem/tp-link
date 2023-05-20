import React from "react";
import { MapPin, PhoneCall, PlayCircle } from "react-feather";
import Container from "../container/Container";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#e7fcff" }} className="py-10">
      <Container>
        <div className="grid grid-cols-4 gap-10 ">
          <div>
            <div className="flex">
              <MapPin size={30} className="w-20" />
              <p>
                House #13, Road #07, Block #F, Banani, Dhaka-1213 Bangladesh.
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <PhoneCall size={30} className="w-10" />
              <div>
                <p>+8809606999645</p>
                <p>+8809606999745</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <PlayCircle size={30} className="w-10" />
              <p>tpucb@excelbd.com</p>
            </div>
          </div>
          <div>
            <p className="text-md">Powered By</p>
            <h1 className="text-xl">Excel Technologies Ltd.</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
