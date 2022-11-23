import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Services(props) {
    return (
<section id="learn">
  <div class="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="lg:items-stretch"
    >
      <div class="flex items-center rounded p-8">
        <div class="mx-auto text-center lg:text-left">
          <h2 class="text-2xl font-bold text-white text-center">Services</h2>

          <p class="mt-4 max-w-[45ch] text-sm text-gray-100 text-center">
            We provide excellent services ranging from a simple and clean designed website, to integrating great 3rd party softwares for your websites. 
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4 lg:py-12">
        <div>
          <LazyLoadImage
            id="img1"
            alt="UX"
            src="https://i.imgur.com/GOM2fZx.jpg"
            placeholderSrc='https://i.imgur.com/MSFA8r0.jpg'
            class="aspect-square w-full rounded object-cover"
          />

          <div class="mt-2">
            <h3 class="font-medium text-white">User Experience Research</h3>
          </div>
        </div>

         <div>
            <LazyLoadImage
            id="img1"
            alt="UI"
            src="https://i.imgur.com/y7nQD9W.jpg"
            placeholderSrc='https://i.imgur.com/jvhyOuF.jpg'
            class="aspect-square w-full rounded object-cover"
          />

          <div class="mt-2">
            <h3 class="font-medium text-white">Website Design</h3>
          </div>
        </div>
       
         <div>
             <LazyLoadImage
            id="img1"
            alt="Development"
            src="https://i.imgur.com/5jlTYEQ.jpg"
            placeholderSrc='https://i.imgur.com/T36u2JB.jpg'
            class="aspect-square w-full rounded object-cover"
          />

          <div class="mt-2">
            <h3 class="font-medium text-white">Web Development</h3>
          </div>
        </div>
         <div>
             <LazyLoadImage
            id="img1"
            alt="API services"
            src="https://i.imgur.com/H5Vmerd.jpg"
            placeholderSrc='https://i.imgur.com/TrcyZjB.jpg'
            class="aspect-square w-full rounded object-cover"
          />

          <div class="mt-2">
            <h3 class="font-medium text-white">3rd Party Software Integration i.e: <p class="text-xs" >Google Maps, Shopping Portal, Email form, etc </p></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center mb-24 mt-4 sm:mt-0">
         <HashLink smooth to="/#team" class="text-white text-center">
        <div class="border-white border-2 rounded-full h-12 w-12">
          <span class="text-2xl">⌄</span>
        </div>
      </HashLink>
      </div>
</section>
    );
}

export default Services;