import React from "react";
import "./HeroPart.css";

const HeroPart = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-left">
          <h6 className="first-para">CONNECTING THE DISCONNECTED</h6>
          <h2 className="second-para">
            <span style={{ color: "#ed7240" }}>Vyorius</span> brings unmanned{" "}
            <br /> robots <span style={{ color: "#ed7240" }}>together</span>,{" "}
            <br /> wherever they are
          </h2>
          <p>
            With all of the operations, commanding and maintenance tools in one
            place, unmanned vehicles will stay connected and productive no
            matter where you're Delivering
          </p>
          <div className="container-2">
            <button className="myButton">Try Vyorius</button>
            <button className="btn-2 outline">Learn More</button>
          </div>
          <p className="btm-line">
            Need to order a delivery?{" "}
            <span
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Get Started
            </span>
          </p>
        </div>
        {/* Right part */}
        <div className="col-right">
          <img
            src="../../images/right-elements.PNG"
            width="580"
            height="400"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPart;
