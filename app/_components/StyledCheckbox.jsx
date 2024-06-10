import React from 'react';

const StyledCheckbox = ({ label }) => {
  return (
    <label className="flex items-center space-x-3">
      <input type="checkbox" className="hidden peer" />
      <div className="w-7 h-7 custom-checkbox"></div>
      <span className="text-gray90">{label}</span>
    </label>
  );
};

export default StyledCheckbox;