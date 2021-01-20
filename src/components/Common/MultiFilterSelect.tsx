import React from "react";
import Select, { Props as SelectProps } from "react-select";

const customStyles = {
  dropdownIndicator: (styles: any) => ({
    ...styles,
    color: "black",
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    opacity: "0",
  }),
  container: (provided: any, { selectProps: { width } }: any) => ({
    ...provided,
    width: width,
  }),
  option: (styles: any) => ({
    ...styles,
    cursor: "pointer",
  }),
  control: (styles: any) => ({
    ...styles,
    cursor: "pointer",
    border: "none",
    background: "#F6F8FA",
  }),
};

export type Props = {
  onFilterChange: (val: any[]) => void;
  options: { value: string; label: string }[];
  isMulti?: boolean;
  isSearchable?: boolean;
  clearAfter?: boolean;
} & SelectProps;

function MultiFilterSelect({
  isMulti,
  isSearchable,
  clearAfter,
  onFilterChange,
  options,
  ...rest
}: Props) {
  let value = clearAfter ? null : undefined;
  return (
    <Select
      onChange={(val) => {
        onFilterChange(Array.isArray(val) ? val : !val ? [] : [val]);
      }}
      value={value}
      isMulti={isMulti}
      options={options}
      styles={customStyles}
      readOnly={true}
      isSearchable={isSearchable}
      {...rest}
    />
  );
}

export { MultiFilterSelect };
