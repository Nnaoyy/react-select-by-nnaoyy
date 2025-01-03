import React, { useState } from 'react';

export interface SelectProps {
  options: (string | { name: string; abbreviation: string })[];
  onChange: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
}

export function Select({ options, onChange, placeholder, defaultValue }: Readonly<SelectProps>)  {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue || '');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  const formatOptions = () => {
    return options.map((option) => {
      if (typeof option === 'string') {
        return { value: option, label: option };
      } else {
        return { value: option.abbreviation, label: option.name };
      }
    });
  };

  const formattedOptions = formatOptions();

  return (
    <select value={selectedValue} onChange={handleChange} className="custom-select">
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {formattedOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
