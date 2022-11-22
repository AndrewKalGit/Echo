import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Cards(props) {
    return (
<>
<div id="team" class="group relative block bg-gray-900 ">
  <LazyLoadImage
    alt="Developer"
    src="https://i.imgur.com/kDHwVPO.png"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity sm:group-hover:opacity-50 sm:object-cover"
    placeholderSrc='https://i.imgur.com/IzPKXrm.jpg'
  />
  <div class="relative p-8">
   <p class="text-sm font-extrabold uppercase tracking-widest text-blue-700 ml-4">
    <span class="bg-gray-100 p-2">
    Proprietor & 
    Frontend Developer 
    </span>
    </p>
    <p class="text-2xl font-bold text-white ml-4"><span class="bg-blue-400 p-1">Andrew Kal</span></p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
      >
        <p class="text-xs sm:text-lg text-white text-center">
            I've always found small organizaitons essential to the growth and health of communities. By offering a digital solution to other small organizations, I find a sense of duty operating this business.
        </p>  
      </div>
       <p class="sm:text-sm text-white text-center text-xs sm:invisible">
            I've always found small organizaitons essential to the growth and health of communities. By offering a digital solution to other small organizations, I find a sense of duty operating this business.
        </p> 
    </div>
  </div>
</div>
</>
    );
}

export default Cards;