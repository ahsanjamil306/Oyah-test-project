import Image from "next/image";
import React from "react";
import {images, icons} from '../../public/Utils/assets';


const NavBar = ({ icon , handleBack }) => {
  


  return (
    <div className="h-20 w-screen flex items-center px-[5%] justify-between fixed bg-[#FCFCFF] z-10 self-auto">
     
     <button onClick={handleBack} className="justify-center self-auto ">
     <Image
        height={30}
        width={30}
        src={icon == "back" ? "/back.png" : "/more.png"}
      />
     </button>
      
      <Image
        height={60}
        width={100}
        src={icons.hiltonLogo}
        
      />
      <div className="flex flex-col justify-center items-center font-bold">
        <h1>room</h1>
        <h1>{"167"}</h1>
      </div>
    </div>
  );
};

export default NavBar;
