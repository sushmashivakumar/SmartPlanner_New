import React from "react";

const Topbar = () => {
  const start = (
    <div style={{ textAlign: "center" }}>
      <img
        alt="logo"
        src="showcase/images/logo.png"
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        height="40"
        className="mr-2"
      ></img>
      <div style={{ fontSize: "24px" }}>Smart Planner</div>
    </div>
  );
  return (
    <div className="home_menu" style={{margin:'1em 0'}}>
  
    </div>
  );
};

export default Topbar;