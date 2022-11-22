import React from 'react';

function CardJenny(props) {
    return (
<div id="1" class="group relative block bg-gray-900">
  <img
    alt="Developer"
    src="https://i.imgur.com/xYmw3VY.jpg"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 sm:object-contain sm:ml-8"
  />
  <div class="relative p-8">
    <p class="text-sm font-extrabold uppercase tracking-widest text-purple-700">
    UX & UI Designer
    </p>
    <p class="text-2xl font-bold text-white">Jenny Jung</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="sm:text-sm text-white text-center text-xs sm:text-right">
            Even when there's flaws it's ok to accept them, nobody's perfect.
            I turn your work into something that closely reflects your organization.
        </p>  
      </div>

    </div>
  </div>
</div>
    );
}

export default CardJenny;