import React from 'react';
import CardJenny from './CardJenny';
import Cards from './Cards';

function CardContain(props) {
    return (
        <div>
<h1 class="font-bold text-white text-center h-10 text-xl mb-8">
Meet The Team 
</h1>
<section id="learn" class="">
      <div class="grid grid-cols-1 lg:col-span-2 lg:grid-cols-2">
        <Cards/>
        <CardJenny/>
      </div>
</section>
        </div>
    );
}

export default CardContain;