import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen bg-purple-800/5 flex-col items-center justify-between p-24'>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-purple-800 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#260143] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff40]'
          src='/actusGo.png'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>

      <h1 className='text-4xl font-bold text-center text-neutral-900 dark:text-neutral-100 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
        {" "}
        Cooming Soon...
      </h1>
      <div className='grid place-items-center relative'>
        <div className='mb-32 grid  text-center lg:mb-0 lg:max-w-5xl lg:grid-cols-2 lg:text-left'>
          <a
            href='https://www.linkedin.com/company/actusgo/'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className='mb-3 text-2xl font-semibold'>
              LinkedIn Page{" "}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h2>
            <p className='m-0 max-w-[30ch] text-sm opacity-50'>
              Find in LinkedIn the lastest news about ActusGo.
            </p>
          </a>

          <a
            href='https://www.linkedin.com/pulse/actus-go-story-purpose-vision-actusgo-7x77f'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className='mb-3 text-2xl font-semibold'>
              About ActusGo{" "}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h2>
            <p className='m-0 max-w-[30ch] text-sm opacity-50'>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
