import React, { useState } from 'react';
import FormInput from './FormInput';
import PhoneInput from '../../Micros/inputs/PhoneInput/PhoneInput';
import MonthlyUsageSelect from '../../Micros/inputs/DropDownList/MonthlyUsage/MonthlyUsageSelect';





const StepTwo = ({ formData, handleChange }) => (
  <div className="max-w-md w-full mx-auto p-5">
      <h1 className="text-2xl font-bold mb-8 capitalize">
      Welcome! <br/>Set Up Your Account
      </h1>

    <FormInput
      label="Email"
      description="Enter your email"
      placeholder="Your email"
      name="email"
      value={formData.email}
      handleChange={handleChange}
      className="mb-4"
    />
    <FormInput
      label="Full Name"
      description="Enter your full name"
      placeholder="Your full name"
      name="fullName"
      value={formData.fullName}
      handleChange={handleChange}
      className="mb-4"
    />
   
    <PhoneInput/>
    <MonthlyUsageSelect formData={formData} handleChange={handleChange} />
    <button
      className="w-full bg-yellow-600 text-black font-semibold rounded-full py-4  shadow-sm hover:bg-yellow-600/80 transition duration-300"
      onClick={() => alert('Form Submitted')}
    >
      Submit
    </button>
  </div>
);

export default StepTwo;