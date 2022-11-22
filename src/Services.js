import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Services(props) {
    return (
<section id="learn" class="bg-gray-900">
  <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="lg:items-stretch"
    >
      <div class="flex items-center rounded bg-gray-900 p-8">
        <div class="mx-auto text-center lg:text-left">
          <h2 class="text-2xl font-bold text-white text-center">Services</h2>

          <p class="mt-4 max-w-[45ch] text-sm text-gray-100 text-center">
            We provide excellent services ranging from a simple and clean designed website, to integrating great 3rd party softwares for your websites. 
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-4 lg:py-12 mb-32">
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
    </div>
  </div>
</section>
    );
}

export default Services;