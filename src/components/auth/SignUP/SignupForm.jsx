import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    creatorType: '',
    email: '',
    fullName: '',
    phoneNumber: '',
    country: '',
    monthlyUsage: '',
  });

  const handleNext = () => setStep((prevStep) => prevStep + 1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {step === 1 ? (
        <StepOne formData={formData} setFormData={setFormData} handleNext={handleNext} />
      ) : (
        <StepTwo formData={formData} handleChange={handleChange} />
      )}
    </div>
  );
};

export default SignupForm;