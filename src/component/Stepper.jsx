/* eslint-disable react/prop-types */

// Stepper Component - Displays steps in a form wizard
const Stepper = ({ currentStep }) => {
  const steps = [
    { label: "Your details" },
    { label: "Choose a password" },
    { label: "Invite your team" },
    { label: "Upload  document" },
  ];

  return (
    <div className="flex items-center justify-between w-full max-w-7xl mx-auto mt-8">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center w-full">
          <div className="relative flex items-center justify-center">
            {index > 0 && (
              <div className="absolute left-[-50%] top-[50%]  h-[2px] bg-green-300" />
            )}
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full text-white ${
                currentStep > index + 1
                  ? "bg-blue-500"
                  : currentStep === index + 1
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
            >
              {currentStep > index + 1 ? (
                <span>&#10003;</span> // Tick mark for completed steps
              ) : (
                <span>{index + 1}</span> // Step number for active and future steps
              )}
            </div>
          </div>
          <div className="mt-2 text-center">
            <p
              className={`font-medium  text-sm ${
                currentStep >= index + 1 ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {step.label}
            </p>
            <p
              className={`text-xs ${
                currentStep >= index + 1 ? "text-blue-500" : "text-gray-400"
              }`}
            >
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
