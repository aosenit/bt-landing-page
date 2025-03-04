import { ArrowRight, ArrowUpRight } from "lucide-react";

const EventRegisterationForm = ({
  step,
  formData,
  handleChange,
  handleProceed,
  handleSubmit
}: {
  step: number;
  formData: any;
  handleChange: any;
  handleProceed: any;
  handleSubmit: any;
}) => {
  return (
    <div className="w-full  ">
      {step === 1 ? (
        <form onSubmit={handleProceed} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-lg">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-700"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-lg">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-700"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-lg">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-700"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="country" className="block text-lg">
              Country
            </label>
            <div className="relative">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-1 focus:ring-green-700"
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Kenya">Kenya</option>
                <option value="South Africa">South Africa</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="dateOfBirth" className="block text-lg">
              Date of Birth
            </label>
            <div className="relative">
              <input
                type="text"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="Select your DOB"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-700"
                onClick={(e) => ((e.target as HTMLInputElement).type = "date")}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2B5F3A] hover:bg-[#224a2e] text-white py-4 rounded-full text-lg font-medium transition-all duration-300"
          >
            Proceed
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="organization" className="block text-lg">
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              placeholder="Enter organization name"
              value={formData.organization}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-700"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="position" className="block text-lg">
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Enter position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-700"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="block text-lg">
              Phone number
            </label>
            <div className="flex">
              <div className="flex items-center px-3 bg-white border border-r-0 border-gray-300 rounded-l-md">
                <span className="text-green-800 font-bold mr-2">NG</span>
                <span>+234</span>
              </div>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 rounded-r-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="gender" className="block text-lg">
              Gender
            </label>
            <div className="relative">
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-1 focus:ring-green-700"
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <button className=" w-full bg-[#2B5F3A] hover:bg-[#224a2e] text-white py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center">
              <span className="text-sm sm:text-base">
                Register
              </span>
              <ArrowUpRight
                className="ml-2 bg-[#F0AD12] rounded-full text-[#095424]"
                size={16}
              />
            </button>
        </form>
      )}
    </div>
  );
};

export default EventRegisterationForm;
