import React from "react";
import Container from "../../components/container/Container";
import RGImage from "../../images/Logo_Register_&_Win.png";
import checkImage from "../../images/Check.png";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import tramsCss from "./trams.module.css";

const Trams = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-2 items-center py-10">
          <img src={RGImage} alt="" style={{ width: "400px" }} />
          <div>
            <div className="text-center">
              <h2 className="text-2xl mb-2">Congratulations!</h2>
              <p className="mb-5">
                Your are ekugible for Raffle Draw to with a Mega Gift
              </p>
              <img src={checkImage} className="m-auto" alt="" />
              <div className="flex justify-center gap-2 mt-5 items-center">
                <button
                  className="py-1 px-5 text-white rounded "
                  style={{ backgroundColor: "#023a8d" }}
                >
                  Share & Increase Winning Probability
                </button>
                <Facebook size={20} />
                <Instagram size={20} />
                <Twitter size={20} />
                <Linkedin size={20} />
              </div>
            </div>
            <ul className={`${tramsCss.list} mt-5`}>
              <li>Trams & Condations:</li>
              <li>
                1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci veniam magnam sunt tempore voluptatibus id at
                exercitationem pariatur inventore consequatur?
              </li>
              <li>
                2. Lorem ipsum dolor sit aempore voluptatibus id at
                exercitationem pariatur inventore consequatur?
              </li>
              <li>
                3. Lorem ipsum dolor sit aore voluptatibus id at exercitationem
                pariatur inventore consequatur?
              </li>
              <li>
                4. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci veniam magnam sunt tconsequatur?
              </li>
              <li>
                5. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                6. Lorem ipsum dolor sit amet consectetur adipisicing
                exercitationem pariatur inventore consequatur?
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Trams;
