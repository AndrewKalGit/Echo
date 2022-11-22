import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Services(props) {
    return (
<section id="learn" class="bg-gray-900">
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
    <div
      class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:items-stretch"
    >
      <div class="flex items-center rounded bg-gray-100 p-8">
        <div class="mx-auto text-center lg:text-left">
          <h2 class="text-2xl font-bold">Services</h2>

          <p class="mt-4 max-w-[45ch] text-sm text-gray-700">
            We provide excellent services ranging from a simple and clean designed website, to integrating great 3rd party softwares for your websites. 
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-4 lg:py-12">
        <div>
          <img
            id="img1"
            alt="Simple"
            src="https://i.imgur.com/GOM2fZx.jpg"
            class="aspect-square w-full rounded object-cover"
          />

          <div class="mt-2">
            <h3 class="font-medium text-white">Usability Testing</h3>
          </div>
        </div>

         <div>
          <img
          id="img2"
            alt="Simple"
            src="https://i.imgur.com/y7nQD9W.jpg"
            class="aspect-square w-full rounded object-cover"
          />

          <div class="mt-2">
            <h3 class="font-medium text-white">Website Design</h3>
          </div>
        </div>
       
         <div>
          <img
          id="img3"
            alt="Simple"
            src="https://i.imgur.com/5jlTYEQ.jpg"
            class="aspect-square w-full rounded object-cover"
          />

          <div class="mt-2">
            <h3 class="font-medium text-white">Web Development</h3>
          </div>
        </div>
         <div>
          <img
          id="img4"
            alt="Simple"
            src="https://i.imgur.com/H5Vmerd.jpg"
            class="aspect-square w-full rounded object-cover"
          />

          <div class="mt-2">
            <h3 class="font-medium text-white">3rd Party Software Integration i.e: <p class="text-xs" >Google Maps, Shopping Portal, Email form, etc </p></h3>
          </div>
        </div>
      </div>
      <HashLink
          class="block w-full rounded border border-gray-100 px-12 py-3 text-sm font-medium text-white hover:text-black hover:bg-gray-200 focus:outline-none focus:ring active:bg-gray-400 sm:w-auto text-center"
          href="/about"
          smooth to="/#team"
        >
          Meet the Team
        </HashLink>
           <HashLink
          class="block w-full rounded border border-gray-100 px-12 py-3 text-sm font-medium text-white hover:text-black hover:bg-gray-200 focus:outline-none focus:ring active:bg-gray-400 sm:w-auto text-center"
          href="/about"
          smooth to="/#contact"
        >
          Contact us
        </HashLink>
    </div>
  </div>
</section>
    );
}

export default Services;