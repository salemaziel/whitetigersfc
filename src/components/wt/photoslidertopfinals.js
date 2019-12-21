import React from "react";





import '../../css/style.css'
import '../../css/bootstrap-grid.css'
import '../../css/bootstrap-reboot.css'
import '../../css/bootstrap.min.css'
import '../../css/aos.css'
//import '../../css/owl.theme.default.min.css'
//import '../../css/owl.carousel.min.css'
//

class Photoslidertopfinals extends React.Component {
  render() {
    return (
      <div className="bghero">
        <div
          className="site-blocks-cover overlay"
        > 
          <div className="container">
          <h1 style={{
            textAlign: 'center',
          }}>Division Finals</h1>
          <h2 style={{
            textAlign: 'center',
            color: 'white',

          }}>Dec 22 - 4:00pm 
          <br />
          Ramona High School
          </h2>

            <div className="row align-items-center justify-content-start">
            
              <div
                className="col-md-5 text-center text-md-left"
              >
                <h1 className="bg-text-line">White Tigers FC</h1>
                <br />
                <h5 className="bg-text-line">
                  San Diego White Tigers Futbol Club Official
                </h5>
                
                </div>
                <div
                className="col-md-1 text-center"
              >
               
                <h5 className="bg-text-line">
                  vs
                </h5>
                
                </div>
              <div
                className="col-md-6 text-center text-right"
              >
                <h1 className="bg-text-line">Internacional FC</h1>
                <br />
                {/**<h5 className="bg-text-line">
                  San Diego White Tigers Futbol Club Official
                </h5>**/}
                {}
                </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Photoslidertopfinals;
