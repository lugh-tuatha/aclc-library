import React from "react";
import Navbar from "../../components/navbar";
import Image from "../../assets/about/heroimage.jpg";

function About() {
  return (
    <div className="page-container">
      <Navbar />
      {/* <!--hero start --!> */}
      <div className="container flex flex-row">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Herotext */}
          <div className="Herotext">
            <div className="m-11">
              <h1 className="text-9xl font-bold">
                Learning,
                <br />
                Reading,
                <br />
                Winning!
              </h1>
              <p className="text-2xl my-8">
                Discover a Vast Array of Literary Treasures, Immerse Yourself in
                <br />
                Stories that Transcend Time and Space.
              </p>
            </div>
          </div>

          {/* Heroimage */}
          <div className="Heroimage">
            <div className="m-11">
              <img src={Image} className="rounded-xl"></img>
              <p className="italic text-sm text-center">
                "At 57 years old, I'm having a really Hard time commuting to our
                local Library. With ACLC, I can read any book I want in the
                comfort of my Home."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
