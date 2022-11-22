import React from 'react';
import { HashLink } from 'react-router-hash-link';

function CardJenny(props) {
    return (
<div id="1" class="group relative block bg-gray-900">
  <img
    alt="Developer"
    src="https://i.imgur.com/xYmw3VY.jpg"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity sm:group-hover:opacity-50 sm:object-cover sm:ml-8"
  />
  <div class="relative p-8">
    <p class="text-sm font-extrabold uppercase tracking-widest text-purple-700 ml-4">
    UX & UI Designer
    </p>
    <p class="text-2xl font-bold text-white ml-4">Jenny Jung</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
      >
        <p class="sm:text-lg text-white text-center text-xs ml-4">
            Embrace your mission, you are who you are, we all have a calling.
            I turn your work into something that closely reflects your organization.
        </p>  
      </div>
        <p class="sm:text-sm text-white text-center text-xs sm:invisible">
            Embrace your mission, you are who you are, we all have a calling.
            I turn your work into something that closely reflects your organization.
        </p> 
    </div>
  </div>
</div>
    );
}

export default CardJenny;