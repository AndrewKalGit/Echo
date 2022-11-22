import React from 'react';

function Cards(props) {
    return (
<div id="team" class="group relative block bg-gray-900">
  <img
    alt="Developer"
    src="https://i.imgur.com/kDHwVPO.png"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 sm:object-contain"
  />
  <div class="relative p-8">
    <p class="text-sm font-extrabold uppercase tracking-widest text-blue-300">
    Proprietor &
    <br/>
    Frontend Developer
    </p>
    <p class="text-2xl font-bold text-white">Andrew Kal</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-xs sm:text-sm text-white text-center">
            I've always found small organizaitons essential to the growth and health of communities. By offering a digital solution to other small organizations, I find a sense of duty operating this business.
        </p>  
      </div>

    </div>
  </div>
</div>
    );
}

export default Cards;