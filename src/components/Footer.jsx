import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.logo} className="mb-2 w-32" alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sint, corporis rerum quam eius consequatur fugiat dolore libero blanditiis tempora laboriosam consectetur quidem animi expedita quae quos iusto nisi doloremque. Aperiam eius illo deleniti.</p>

        </div>
        <div>
            <p className="text-xl font-medium mb-5">STYL.myj</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivary</li>
                <li>Privacy Policy</li>

            </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+1-212-456-7899</li>
                <li>contact@stylmyj.com </li>
                

            </ul>
        </div>

      </div>
      <div>
        <hr/>
        <p className="py-5 text-sm text-center">Copyright 2024@ stylmyj.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
