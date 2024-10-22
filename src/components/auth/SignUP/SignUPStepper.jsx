import SignupForm from './SignupForm';
import fullImage from '/images/SplashA4.png'; // Update with your image path

const SignupPage = () => {
  return (
    <div className="flex h-full justify-center  min-h-screen py-6  w-full flex-wrap">
      {/* Left Side - Signup Form */}
      <div className="w-full max-w-[30%] md:w-1/2 flex justify-center items-center gap-0">
        <div className="max-w-md w-full">
          <SignupForm />
        </div>
      </div>

      {/* Right Side - Full Screen Image */}
      <div className="w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${fullImage})` }}>
        {/* Add any additional content overlay on the image if necessary */}
      </div>
    </div>
  );
};

export default SignupPage;