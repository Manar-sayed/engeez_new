import React, { useState } from 'react';
import Select from 'react-select';

import { Label } from './ui/label';
import { Button } from './ui/button';
import clsx from 'clsx';

const carType = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function AutoComplete() {
  var [selectedCarType, setSelectedCarType] = useState();
  var [selectedYear, setSelectedYear] = useState();
  var [selectedEngen, setSelectedEngen] = useState();
  var [selectedModel, setSelectedModel] = useState();
  const [isClearable, setIsClearable] = useState(true);
  const allFilters = {
    selectedCarType,
    selectedYear,
    selectedEngen,
    selectedModel
  };

  function onSubmit() {
    console.log(allFilters);
  }

  const carTypeChange = (event: any) => {
    setSelectedCarType(event?.value);
    selectedCarType = event?.value;
    // console.log("selectedCarType---> ", selectedCarType);
    // console.log("event---> ", event?.value);
  }

  const yearChange = (event: any) => {
    setSelectedYear(event?.value);
    selectedYear = event?.value;
  }

  const enginChange = (event: any) => {
    setSelectedEngen(event?.value);
    selectedEngen = event?.value;
  }

  const modelChange = (event: any) => {
    setSelectedModel(event?.value);
    selectedModel = event?.value;
  }

  const customStyles = {
    // Custom styles for the control (input field)
    control: (provided: any) => ({
      ...provided,
      backgroundColor: 'rgba(75, 191, 107, 0.7)', // Green 400 with opacity 20
      color: 'white',
      // Text color to white
    }),
    input: (provided: any) => ({
      ...provided,
      color: 'white', // Text color to white
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: 'white', // Placeholder text color
    }),
    //Custom styles for the dropdown indicator (icon)
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: 'green',
      '&:hover': {
        color: 'black',
      },
    }),
    clearIndicator: (provided: any) => ({
      ...provided,
      color: 'black', // Change the close icon color here
      '&:hover': {
        color: 'green', // Change the close icon color on hover
      },
    }),



  };

  return (
    <div className=' flex justify-center items-center gap-3  w-full' dir='rtl'>
      {/* car type */}
      <div className='grid grid-cols-2 md:flex justify-around items-center gap-3 xl:gap-0 w-3/4 rounded-md '>
        <Select
          placeholder='نوع السيارة'
          className=' text-[10px] md:text-sm xl:text-lg bg-green-400 rounded'
          defaultValue={selectedCarType}
          isClearable={isClearable}
          onChange={carTypeChange}
          options={carType}
          styles={customStyles}
        />
        {/* year */}
        <Select
          placeholder='العام'
          className=' text-[10px] md:text-sm xl:text-lg bg-green-400 rounded'
          defaultValue={selectedCarType}
          isClearable={isClearable}
          onChange={yearChange}
          options={carType}
          styles={customStyles}

        />
        {/* model type */}
        <Select
          placeholder='المودل'
          className=' text-[10px] md:text-sm xl:text-lg'
          defaultValue={selectedCarType}
          isClearable={isClearable}
          onChange={modelChange}
          options={carType}
          styles={customStyles}
        />
        {/* engin type */}
        <Select
          placeholder='نوع المحرك'
          className=' text-[10px] md:text-sm xl:text-lg'
          defaultValue={selectedCarType}
          isClearable={isClearable}
          onChange={enginChange}
          options={carType}
          styles={customStyles}
        />
      </div>
      <Button onClick={onSubmit}
        className='md:w-[15%] bg-green-500 hover:bg-transparent hover:border hover:border-green-400 hover:text-green-400 '
        >بحث</Button>
    </div>
  );
};