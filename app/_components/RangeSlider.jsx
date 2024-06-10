'use client'

import React, { useState } from 'react';
import { Range } from 'react-range';

const RangeSlider = ({ min, max, step }) => {
  const [values, setValues] = useState([min, max]);

  return (
    <div className="w-full px-4 py-6">
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => {
          const { key, ...trackProps } = props; // Extrair key
          return (
            <div
              {...trackProps}
              style={{ ...trackProps.style }}
              className="h-2 bg-gray40 rounded-md"
              key={key} // Adicionando a key aqui
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props, isDragged }) => {
          const { key, ...thumbProps } = props; // Extrair key
          return (
            <div
              {...thumbProps}
              style={{ ...thumbProps.style }}
              className={`h-5 w-5 bg-green50 rounded-full ${isDragged ? 'shadow-lg' : 'shadow'}`}
              key={key} // Adicionando a key aqui
            />
          );
        }}
      />
      <div className="mt-4 flex items-center justify-between text-center">
        <span className="mr-4 text-white">Min: {values[0]}</span>
        <span className='text-white'>Max: {values[1]}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
