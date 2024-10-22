import { useState } from "react";
import fullImage from "/images/SplashA4.png"; // Update with your image path
import FormInput from "../SignUP/FormInput";

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    creatorType: "",
    email: "",
    fullName: "",
    phoneNumber: "",
    country: "",
    monthlyUsage: "",
  });

  const handleNext = () => setStep((prevStep) => prevStep + 1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='flex h-full justify-center min-h-screen py-6  w-full flex-wrap'>
      {/* Left Side - Signup Form */}
      <div className='w-full max-w-[30%]  md:w-1/2 flex justify-center items-center gap-0'>
        <div className='max-w-md w-full'>
          <div className='max-w-md w-full my-8 mx-auto p-5'>
            <h1 className='text-4xl font-bold mb-4 capitalize'>Sign In</h1>
            <p className='text-lg mb-6'>
              Enter your email and password to sign in.
            </p>

            <FormInput
              label='Email'
              description='Enter your email'
              placeholder='Your email'
              name='email'
              value={formData.email}
              handleChange={handleChange}
              className='mb-4'
            />
            <FormInput
              label='Password'
              description='Enter your password'
              placeholder='Your password'
              name='password'
              value={formData.password}
              handleChange={handleChange}
              className='mb-4'
              password= 'password'
            />
          </div>

          <button
            className='w-full bg-yellow-600 text-black font-semibold rounded-full py-4  shadow-sm hover:bg-yellow-600/80 transition duration-300'
            onClick={() => alert("Form Submitted")}>
            Submit
          </button>
        </div>
      </div>

      {/* Right Side - Full Screen Image */}
      <div
        className='w-full md:w-1/2 bg-cover bg-center'
        style={{ backgroundImage: `url(${fullImage})` }}>
        {/* Add any additional content overlay on the image if necessary */}
      </div>
    </div>
  );
};

export default SignupPage;
