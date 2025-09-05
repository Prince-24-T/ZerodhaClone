import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  const linkStyle = { textDecoration: "none", lineHeight: "2.5" };

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        {/* Column 1 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account
            Opening
          </h4>
          <Link to="/online-account" style={linkStyle}>
            Online Account Opening
          </Link>
          <br />
          <Link to="/offline-account" style={linkStyle}>
            Offline Account Opening
          </Link>
          <br />
          <Link to="/company-partnership-huf" style={linkStyle}>
            Company, Partnership and HUF Account
          </Link>
          <br />
          <Link to="/opening" style={linkStyle}>
            Opening
          </Link>
          <br />
          <Link to="/nri-account" style={linkStyle}>
            NRI Account Opening
          </Link>
          <br />
          <Link to="/charges" style={linkStyle}>
            Charges at Zerodha
          </Link>
          <br />
          <Link to="/idfc-first" style={linkStyle}>
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </Link>
          <br />
          <Link to="/getting-started" style={linkStyle}>
            Getting Started
          </Link>
          <br />
        </div>

        {/* Column 2 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account
            Opening
          </h4>
          <Link to="/online-account" style={linkStyle}>
            Online Account Opening
          </Link>
          <br />
          <Link to="/offline-account" style={linkStyle}>
            Offline Account Opening
          </Link>
          <br />
          <Link to="/company-partnership-huf" style={linkStyle}>
            Company, Partnership and HUF Account
          </Link>
          <br />
          <Link to="/opening" style={linkStyle}>
            Opening
          </Link>
          <br />
          <Link to="/nri-account" style={linkStyle}>
            NRI Account Opening
          </Link>
          <br />
          <Link to="/charges" style={linkStyle}>
            Charges at Zerodha
          </Link>
          <br />
          <Link to="/idfc-first" style={linkStyle}>
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </Link>
          <br />
          <Link to="/getting-started" style={linkStyle}>
            Getting Started
          </Link>
          <br />
        </div>

        {/* Column 3 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account
            Opening
          </h4>
          <Link to="/online-account" style={linkStyle}>
            Online Account Opening
          </Link>
          <br />
          <Link to="/offline-account" style={linkStyle}>
            Offline Account Opening
          </Link>
          <br />
          <Link to="/company-partnership-huf" style={linkStyle}>
            Company, Partnership and HUF Account
          </Link>
          <br />
          <Link to="/opening" style={linkStyle}>
            Opening
          </Link>
          <br />
          <Link to="/nri-account" style={linkStyle}>
            NRI Account Opening
          </Link>
          <br />
          <Link to="/charges" style={linkStyle}>
            Charges at Zerodha
          </Link>
          <br />
          <Link to="/idfc-first" style={linkStyle}>
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </Link>
          <br />
          <Link to="/getting-started" style={linkStyle}>
            Getting Started
          </Link>
          <br />
        </div>

        {/* Add more columns if needed */}
      </div>
    </div>
  );
}

export default CreateTicket;
