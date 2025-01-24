import React, { useState } from 'react';
import './Select.css'

export interface SelectProps {
  options: (string | { name: string; abbreviation: string })[];
  onChange: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  background?: string;
}

export function Select({
  options,
  onChange,
  placeholder,
  defaultValue,
  size = 'medium',
  color,
  background,
}: Readonly<SelectProps>) {
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

  const sizeClass = `select-${size}`;

  const selectStyle: React.CSSProperties = {
    color: color,
    background: background,
  };

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      className={`custom-select ${sizeClass}`}
      style={selectStyle}
    >
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
}