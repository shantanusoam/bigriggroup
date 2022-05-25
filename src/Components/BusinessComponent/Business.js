import React from 'react'

export default function Business() {
  return (
    <>
      <div id="maincontainer">
        <div id="innermain">
          <div id="firstmain">
            <h1>Our Business Verticals</h1>
          </div>

          <div id="secondmain">
            <div id="secondmaintwo">
              <div id="backgroundd" style={{
                  backgroundImage:"url("+"http://127.0.0.1:5500/src/assets/Images/businessback.svg"+ ")",
                  backgroundPosition:'center',
                  backgroundSize:'cover',
                  backgroundRepeat:'no-repeat' 
              }}>
                <div id="box">
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <h1>GET ON THE ROAD WITH POWERFUL ENGINE</h1>
                  </div>
                  <div>
                    <p>Contact Us for the best trucks and trailers</p>
                  </div>

                  <div>
                      <img src="" alt="" />
                  </div>
                  
                  <div id="btn">
                      <button>Trailers & Leasing </button> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
