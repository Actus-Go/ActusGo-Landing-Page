import React from 'react';

const StepOne = ({ formData, setFormData, handleNext }) => {
  const handleSelection = (creatorType) => {
    setFormData({ ...formData, creatorType });
  };

  return (
    <div className="max-w-md w-full  mx-auto p-5 text-center">
      <h1 className="text-3xl font-extrabold mb-4 capitalize">
      Choose Your Plan
      </h1>
      <div className="flex  flex-col gap-3 my-5">
      <p className='w-full text-xs text-black/50 px-2 text-left'>Plan Type</p>
        <button
          className={` border  border-gray-300 rounded-full px-6 py-2 text-gray-800 font-normal text-lg shadow-sm   hover:shadow-lg transition duration-300 ease-in-out ${
            formData.creatorType === 'solo' ? 'bg-yellow-600 border-yellow-600' : ''
          }`}
          onClick={() => handleSelection('solo')}
        >
          I’m a solo Developer
        </button>

        <button
          className={`border border-gray-300 rounded-full px-6 py-2  text-gray-800 font-normal  text-lg shadow-sm  hover:shadow-lg transition duration-300 ease-in-out ${
            formData.creatorType === 'team' ? 'bg-yellow-600 border-yellow-600' : ''
          }`}
          onClick={() => handleSelection('team')}
        >
          I’m part of a team
        </button>
      </div>
      <button
        className={` rounded-full text-black border-2  px-6 py-4 mt-6 w-full font-semibold text-lg shadow-sm  hover:shadow-lg transition duration-300 ease-in-out ${
          !formData.creatorType ? 'opacity-50 cursor-not-allowed  border-black/40 bg-black/40 ' : 'bg-yellow-600 hover:bg-yellow-600/80 duration-300'
        }`}
        onClick={handleNext}
        disabled={!formData.creatorType}
      >
        Continue
      </button>
    </div>
  );
};

export default StepOne;