import React, { useEffect } from "react";

const MobileRestriction = () => {
  useEffect(() => {
    const handleResize = () => {
      const overlay = document.getElementById("mobile-restriction-overlay");
      if (window.innerWidth < 768) {
        overlay.style.display = "flex"; 
      } else {
        overlay.style.display = "none"; 
      }
    };

   
    handleResize();

  
    window.addEventListener("resize", handleResize);

   
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="mobile-restriction-overlay">
      <h1>Screen Too Small</h1>
      <p>Please view this website on a larger screen for the best experience.</p>
      <button onClick={() => alert("Please switch to a larger screen!")}>
        OK
      </button>
    </div>
  );
};

export default MobileRestriction;