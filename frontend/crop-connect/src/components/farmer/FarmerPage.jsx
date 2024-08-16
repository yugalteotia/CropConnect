import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../css/SideBar.css'; 
import '../../css/FarmerPage.css'; 
import { useAuth } from '../../hooks/useAuth'; 


const FarmerPage = () => {
  const [iframeSrc, setIframeSrc] = useState("");
  const {user} = useAuth();

  console.log("user ---->",user);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav id="sidebar" className="bg-dark sidebar relative mt-14">
          <div className="position-sticky">
            <h4 className="text-center mt-3 text-xl text-white">Side Menu</h4>
            <hr className="mt-4"/>
            <ul className="nav flex-column items-center">
              <li className="nav-item">
                <Link
                  className="nav-link mb-1 mt-4"
                  to="#"
                  onClick={() => setIframeSrc("/crop-form")}
                >
                  <i className="bi bi-box"></i> Add Crop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mb-4"
                  to="#"
                  onClick={() => setIframeSrc("/crop-list")}
                >
                  <i className="bi bi-gear"></i> Manage Crops
                </Link>
              </li>
              
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h2 className="h2">Farmer Dashboard</h2>
          </div>

          {/* Iframe Content */}
          <div className="iframe-container" style={{ height: "calc(100vh - 80px)", marginTop: "20px" }}>
            {iframeSrc ? (
              <iframe
                src={iframeSrc}
                title="Farmer Content"
                style={{ width: "100%", height: "100%", border: "none" }}
              ></iframe>
            ) : (
              <div>
                <h3>Welcome to the Farmer Dashboard</h3>
                <p>Select an option from the sidebar to get started.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FarmerPage;
