"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function RegistrationDetails() {
  const [formData, setFormData] = useState({
    organization: "",
    position: "",
    phoneNumber: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6 bg-gray-100">
      <div className="w-full max-w-7xl px-4 md:px-8 lg:px-[10rem] flex flex-col lg:flex-row items-start justify-start gap-6 lg:gap-10">
        <div className="w-full lg:w-1/2">
          <h2 className="text-yellow-500 font-semibold text-sm md:text-base lg:text-[20px]">
            UPCOMING EVENT
          </h2>
          <h1 className="text-xl md:text-2xl lg:text-[40px] font-bold">
            REGISTER FOR EVENT
          </h1>
          <p className="text-gray-600 my-2 text-xs md:text-sm lg:text-[20px] pt-4">
            Register for our upcoming Bar Training Masterclass to take your
            bartending skills to the next level.
          </p>
          <div className="text-lg md:text-2xl font-bold flex space-x-2 my-4">
            <div className="flex flex-col items-center">
              <span>21</span>
              <span className="text-xs md:text-[16px]">Days</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span>03</span>
              <span className="text-xs md:text-[16px]">Hours</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span>59</span>
              <span className="text-xs md:text-[16px]">Minutes</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span>48</span>
              <span className="text-xs md:text-[16px]">Seconds</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2 space-y-4">
          <input
            type="text"
            name="organization"
            placeholder="Enter organization name"
            value={formData.organization}
            onChange={handleChange}
            className="w-full p-2 md:p-3 border rounded-md text-sm md:text-base"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Enter position"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-2 md:p-3 border rounded-md text-sm md:text-base"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 md:p-3 border rounded-md text-sm md:text-base"
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 md:p-3 border rounded-md text-sm md:text-base"
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 md:py-3 rounded-md font-semibold flex items-center justify-center text-sm md:text-base"
          >
            Register{" "}
            <ArrowUpRight
              className="ml-2 bg-[#F0AD12] rounded-full text-[#095424]"
              size={18}
            />
          </button>
        </form>
      </div>
    </div>
  );
}
