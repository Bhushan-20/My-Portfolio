import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";

const LogoLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // Animation duration is 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && (
        <div className="w-full h-full min-h-screen flex justify-center items-center bg-[#0a192f]">
          <img
            className="w-48 animate-zoom-out-fade mix-blend-lighten"
            src={Logo}
            alt="logo"
          />
        </div>
      )}
    </>
  );
};

export default LogoLoader;
