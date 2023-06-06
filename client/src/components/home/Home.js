import React from "react";
import "./Styles.css";

function Home() {
  return (
    <section id="Home" className="">
      <div className="container">
        <div className="">
          <div className="app_logo">
            TruckMARC
          </div>
          <div className="text-content">
            <div className="title">
              <h1>Enquire about</h1>
              <span>TruckMARC</span>
              <p>TruckMARC is a comprehensive software solution that enables real-time monitoring, efficient record-keeping, and effective control of truck movements on highways using illustrative-icons, responsive and interactive designs</p>
            </div>
            <button className="button">
              Log In
            </button>
          </div>
        </div>
        <div className="">
          <button className="button">
            Log In
          </button>
          <div className="imag"></div>
          {/* <img src="/" className="" /> */}
        </div>
      </div>
    </section>
  )
}

export default Home