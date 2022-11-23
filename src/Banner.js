import React from 'react';
import './Fade-in.css'
import { HashLink } from 'react-router-hash-link';

function Banner(props) {
    return (
<section class="text-white">
  <div
    id="fade-in"
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        ECHO WEB 
        <br/>
        <span class="sm:block"> Design and Development </span>
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-lg sm:leading-relaxed">
        Stand out and make some noise in this digital age. Echo Web provides small organizations with digital solutions. We design and develop a great user experience and interface for your organization needs.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <HashLink
          class="block w-full rounded border border-indigo-700 bg-indigo-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          smooth to="/#contact"
        >
          Contact
        </HashLink>

        <HashLink
          class="block w-full rounded border border-indigo-700 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
          href="/about"
          smooth to="/#learn"
        >
          Learn More
        </HashLink>
      </div>
    </div>
  </div>
  {/* <div class="">
  <Navigate/>
  </div> */}
</section>

    );
}

export default Banner;