import React from "react";
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa6";

const AuthPageSocialButtons = () => {
  return (
    <div className="flex justify-center gap-4">
      <div className="bg-white shadow text-gray-main p-2 hover:text-primary-main rounded-radius-main cursor-pointer transform transition-all duration-300 hover:!scale-110">
        <FaGoogle />
      </div>
      <div className="bg-white shadow text-gray-main p-2 hover:text-primary-main rounded-radius-main cursor-pointer transform transition-all duration-300 hover:!scale-110">
        <FaFacebookF />
      </div>
      <div className="bg-white shadow text-gray-main p-2 hover:text-primary-main rounded-radius-main cursor-pointer transform transition-all duration-300 hover:!scale-110">
        <FaGithub />
      </div>
      <div className="bg-white shadow text-gray-main p-2 hover:text-primary-main rounded-radius-main cursor-pointer transform transition-all duration-300 hover:!scale-110">
        <FaLinkedinIn />
      </div>
    </div>
  );
};

export default AuthPageSocialButtons;
