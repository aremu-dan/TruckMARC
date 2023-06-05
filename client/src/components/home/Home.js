import React from "react";
import "./Styles.css";

function Home() {
  return (
    <section id="homePage" className="">
      <div className="container">
        <div className="">
          <div className="app_logo">
            
          </div>
          <div className="title">
            <p>
              Enquire about
            </p>
              {/* <br/> */}
              <span>TruckMARC</span>
          </div>
          <button className="button">
            Log In
          </button>
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