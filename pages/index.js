import AboutCity from "../components/Home/aboutCity";
import NavBar from "../components/Home/navBar";
import Option from "../components/Home/option";
import options from "../dummyData/options";
import Image from "next/image";
import {images, icons} from '../public/Utils/assets';

export default function Home() {
  return (
    <>
      <NavBar icon={"menu"} />
      {/*Main screen*/}
      <div className="w-screen flex-1 px-[5%] flex flex-col bg-[#FCFCFF] mb-4">
        <div className="h-28"></div>
        {/* SEARCH BOX */}
        <div className="w-[100%] bg-[#F2F2F2] flex flex-row rounded-2xl self-auto p-2 ">
        <Image
          className="w-[20%] pl-2"
          width={25}
          height={25}
          
          src={icons.Search}
        />
        <p className="ml-4 text-[#828282]">Search Products.....</p>
        </div>

        {/*Header Text*/}
        <div className="mt-4"> 
        <h1 className="text-3xl font-bold text-[#1B153D] ">Everything you</h1>
        <h1 className="text-3xl font-bold  text-[#1B153D] ">need is a click away</h1>
        </div>
        
        {/*Options*/}
        <div className="flex  flex-wrap justify-between mt-8 mb-20">
          {options.map((item) => (
            <Option item={item} className={"mb-1"} key={item.id} />
          ))}
          <AboutCity />
        </div>
      </div>
    </>
  );
}
