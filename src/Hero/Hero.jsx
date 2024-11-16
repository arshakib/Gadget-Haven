import { Link, Outlet, useLoaderData } from "react-router-dom";
import hero from "../assets/banner.jpg";
import Catagory from "../Catagory/Catagory";

const Hero = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className=" w-[1540px] h-[600px] bg-[#9538E2] rounded-lg mx-auto -mt-20 ">
        <h1 className=" pt-28  text-center text-white font-bold text-6xl">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <h1 className=" text-center text-white text-lg mt-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br />
          the coolest accessories, we have it all!
        </h1>
        <div className="flex justify-center mt-6">
          <Link to="/dashboard">
            <button className="btn font-bold text-[#9538E2]">Shop Now</button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <div className=" w-[1110px] h-[611px] -mt-36 p-5 bg-[#FFFFFF4D] border-2 rounded-xl">
          <img className="w-[1062px] h-[563px] rounded-xl" src={hero} alt="" />
        </div>
      </div>

      <div>
        <h1 className="text-center text-4xl font-bold mt-20">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="flex justify-center  mx-auto gap-8 mt-10">
          <Catagory></Catagory>
          <Outlet data={data}></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Hero;
