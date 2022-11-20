import React from 'react';

function Banner(props) {
    return (
<section class="text-white bg-gray-900">
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        ECHO WEB

        <span class="sm:block"> Design and Development </span>
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-lg sm:leading-relaxed">
        Stand out and make some noise in this digital age. Echo Web provides small businesses with a digital solutions. We design and develop a great user experience and interface for your business needs.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>

        <a
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

    );
}

export default Banner;