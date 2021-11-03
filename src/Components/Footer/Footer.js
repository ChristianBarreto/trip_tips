import React from "react"
import { Link } from "react-router-dom";


const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Trip Tips</h5>
                <p>Share your trip tips with the world!</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-6 mb-md-0 mb-3">
                <h5 className="text-uppercase">Tips</h5>
                <ul className="list-unstyled">
                  <li><Link to="/Destinations">Destinations</Link></li>
                  <li><Link to="/Flights">Flights</Link></li>
                  <li><Link to="/Hotels">Hotels</Link></li>
  
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href=""> React Bootstrap</a>
    </div>

</footer>

export default Footer