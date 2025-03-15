"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EventRegisterationForm from "./EventRegisterationForm";
import { ArrowLeft } from "lucide-react";

export default function EventRegistration() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    country: "Nigeria",
    dateOfBirth: "",
    organization: "",
    position: "",
    phoneNumber: "",
    gender: "",
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 21,
    hours: 3,
    minutes: 59,
    seconds: 48,
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
            seconds: 59,
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
    setDirection(1);
    setStep(2);
  };

  const handleGoBack = () => {
    setDirection(-1);
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    router.push("/registration-details");
  };

  return (
    <div className="w-full max-w-8xl mx-auto px-4 md:px-20 py-12">
      <div className="flex flex-col lg:flex-row gap-8 md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col justify-center md:mt-16"
        >
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-yellow-500 font-semibold text-xl"
          >
            UPCOMING EVENT
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl mt-2"
          >
            REGISTER FOR EVENT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 md:text-[18px] md:w-lg leading-8 tracking-wide"
          >
            Register for our upcoming Bar Training Masterclass to take your
            bartending skills to the next level.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-2xl flex space-x-2 my-4"
          >
            {/* Timer sections with individual animations */}
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center justify-center">
                  <div>
                    <motion.h3
                      className="text-center font-normal text-2xl md:text-3xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 0.3,
                        repeat:
                          timeLeft[
                            item.label.toLowerCase() as keyof typeof timeLeft
                          ] === 0
                            ? 1
                            : 0,
                      }}
                    >
                      {item.value.toString().padStart(2, "0")}
                    </motion.h3>
                    <p className="text-sm md:text-lg text-center">
                      {item.label}
                    </p>
                  </div>
                  {index < 3 && <h3 className="text-center p-2">:</h3>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-1/2 md:max-w-md space-y-4"
        >
          {step > 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* GO BACK ARROW */}
              <ArrowLeft
                className="bg-[#F0AD12] rounded-full text-[#095424] p-1 w-8 h-8 cursor-pointer hover:bg-[#d89a10] transition-colors"
                size={30}
                onClick={handleGoBack}
                strokeWidth={1.5}
              />
            </motion.div>
          )}
          <EventRegisterationForm
            step={step}
            direction={direction}
            formData={formData}
            handleChange={handleChange}
            handleProceed={handleProceed}
            handleSubmit={handleSubmit}
          />
        </motion.div>
      </div>
    </div>
  );
}
