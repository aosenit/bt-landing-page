"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EventRegisterationForm from "./EventRegisterationForm";

export default function EventRegistration() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    country: "Nigeria",
    dateOfBirth: "",
    organization: "",
    position: "",
    phoneNumber: "",
    gender: ""
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 21,
    hours: 3,
    minutes: 59,
    seconds: 48
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59
          };
        }
        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []); 
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    router.push("/registration-details");
  };

  return (
    <div className="w-full  max-w-7xl mx-auto p-6 md:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8 md:items-start">
        <div className="w-full lg:w-1/2 flex flex-col justify-center md:mt-16">
          <h4 className="text-yellow-500 font-semibold text-xl ">
            UPCOMING EVENT
          </h4>
          <h1 className="text-3xl md:text-4xl mt-2">
            REGISTER FOR EVENT
          </h1>
          <p className=" mt-4 text-sm md:text-[18px] w-lg leading-8 tracking-wide ">
            Register for our upcoming Bar Training Masterclass to take your
            bartending skills to the next level.
          </p>
          <div className="text-lg md:text-2xl font-bold flex space-x-2 my-4">
            <div className="flex flex-col items-center">
              <span>{timeLeft.days}</span>
              <span className="text-xs md:text-[16px]">Days</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span>{timeLeft.hours}</span>
              <span className="text-xs md:text-[16px]">Hours</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span>{timeLeft.minutes}</span>
              <span className="text-xs md:text-[16px]">Minutes</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span>{timeLeft.seconds}</span>
              <span className="text-xs md:text-[16px]">Seconds</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <EventRegisterationForm
            step={step}
            formData={formData}
            handleChange={handleChange}
            handleProceed={handleProceed}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
