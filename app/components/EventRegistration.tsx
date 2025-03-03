"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EventRegistration() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    country: "Nigeria",
    dob: "Select your DOB",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/registration-details");
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
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md text-sm md:text-base"
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-3 border rounded-md text-sm md:text-base"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-3 border rounded-md text-sm md:text-base"
            required
          />
          <div className="w-full p-3 border rounded-md bg-gray-100 text-sm md:text-base">
            {formData.country}
          </div>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-3 border rounded-md text-sm md:text-base"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-md font-semibold text-sm md:text-base"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}
