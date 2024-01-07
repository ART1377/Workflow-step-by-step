import React from "react";
import Image from "next/image";
import shoppingImage from "../../../../../../public/images/shopping.jpg";

const AuthPageLoginFormImage = () => {
  return (
    <div className="w-[60%] h-full">
      <div className="relative w-full h-full rounded-radius-main overflow-hidden">
        <Image src={shoppingImage} alt="login image" fill />
      </div>
    </div>
  );
};

export default AuthPageLoginFormImage;
