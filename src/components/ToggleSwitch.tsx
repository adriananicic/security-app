import React, { FC, useState } from "react";

interface IToggleSwitchProps {
  label: string;
  onToggle: () => void;
}

const ToggleSwitch: FC<IToggleSwitchProps> = ({ label, onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onToggle();
  };

  return (
    <div className="flex items-center">
      {label && <span className="mr-2">{label}</span>}
      <div
        onClick={toggleSwitch}
        className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
            isOn ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
