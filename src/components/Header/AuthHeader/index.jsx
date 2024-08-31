// src/components/Header.js
import Logo from "../../logo";

const AuthHeader = () => {
  return (
    <header className='bg-black w-full dark:bg-yellow-300'>
      <nav
        aria-label='Global'
        className='mx-auto w-full  flex max-w-[1400px] items-center justify-between p-6 lg:px-8'>
        <div className='flex  lg:flex-1'>
          <Logo />
        </div>
        <div className=" justify-end flex ">
          <div className='relative text-center bg-gray-500/30 rounded-lg grid place-items-center m-auto'>
            <button
              className='h-full w-full text-center m-auto'
              onClick={() => window.location.href = '/'}>
              <svg
                className='w-8 h-8 text-white dark:text-black'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path
                  d='M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z'
                  fill='currentColor'
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AuthHeader;
