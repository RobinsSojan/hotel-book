import React from "react";
import Homepage from "../_ui/homepage";
import Instagram from "../_ui/instagram";
import {
  BathIcon,
  Bed,
  BedDouble,
  Microwave,
  Refrigerator,
  WholeWordIcon,
} from "lucide-react";

const Page = () => {
  return (
    <div className=" w-full">
      <Homepage />
      <Instagram />
      <div className=" w-full py-24 bg-gray-100 ">
        <div className=" w-[80%] mx-auto">
          <div className=" text-black space-y-5 mb-20 text-center">
            <p className=" text-center font-medium ">INDOOR</p>
            <h1 className=" text-4xl w-[90%] lg:text-[2.6rem] lg:max-w-[60%] font-medium mx-auto text-center ">
              Indoor - facilities and all equipments
            </h1>
          </div>

          <div className="  grid lg:grid-cols-3 lg:w-[80%] w-[90%] grid-cols-1 lg:translate-x-10  mx-auto gap-10  justify-between items-center ">
            <div className=" flex items-center space-x-4">
              <div className=" w-24 h-24 bg-gray-300 rounded-3xl flex items-center justify-center">
                <BedDouble size={32} />
              </div>
              <h1 className=" text-lg font-medium">King Size Bed</h1>
            </div>

            <div className=" flex items-center space-x-4">
              <div className=" w-24 h-24 bg-gray-300 rounded-3xl flex items-center justify-center">
                <WholeWordIcon size={32} />
              </div>
              <h1 className=" text-lg font-medium">Cozy Fireplace</h1>
            </div>

            <div className=" flex items-center space-x-4">
              <div className=" w-24 h-24 bg-gray-300 rounded-3xl flex items-center justify-center">
                <Microwave size={32} />
              </div>
              <h1 className=" text-lg font-medium">Kitchen Essentials</h1>
            </div>

            <div className=" flex items-center space-x-4">
              <div className=" w-24 h-24 bg-gray-300 rounded-3xl flex items-center justify-center">
                <Bed size={32} />
              </div>
              <h1 className=" text-lg font-medium">Comfortable Pillows</h1>
            </div>

            <div className=" flex items-center space-x-4">
              <div className=" w-24 h-24 bg-gray-300 rounded-3xl flex items-center justify-center">
                <BathIcon size={32} />
              </div>
              <h1 className=" text-lg font-medium">COmfortable Bath</h1>
            </div>

            <div className=" flex items-center space-x-4">
              <div className=" w-24 h-24 bg-gray-300 rounded-3xl flex items-center justify-center">
                <Refrigerator size={32} />
              </div>
              <h1 className=" text-lg font-medium">Ample Personal Storage</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
