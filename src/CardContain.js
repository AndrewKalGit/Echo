import React from 'react';
import CardJenny from './CardJenny';
import Cards from './Cards';

function CardContain(props) {
    return (
        <div>
<h1 class="bg-gradient-to-r from-black via-gray-900 to-black text-2xl font-bold text-white text-center h-20">
Meet The Team 
</h1>
<section id="learn" class="bg-gradient-to-r from-black via-gray-900 to-black">
      <div class="grid grid-cols-1 lg:col-span-2 lg:grid-cols-2 lg:py-12">
        <Cards/>
        <CardJenny/>
      </div>
</section>
        </div>
    );
}

export default CardContain;