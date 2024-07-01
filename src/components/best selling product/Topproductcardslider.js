import React from 'react';
import ReactCardSlider from 'react-card-slider-component';
import product1 from '../../images/61Pt10x7idS._SL1483_.jpg';
import product2 from '../../images/611hlsmn5EL._SL1333_.jpg';
import product3 from '../../images/61gqdIft+cL._AC_SL1000_.jpg';
import product4 from '../../images/71Cleqylw7L._AC_SL1500_.jpg';
import product5 from '../../images/71IRwrnUc9L._AC_SL1500_.jpg';

const slides = [
  { image: product1, title: "Funnel", description: "Price - 400RS", },
  { image: product2, title: "This is a second title", description: "Price 300RS" },
  { image: product3, title: "This is a third title", description: "Price - 400RS" },
  { image: product4, title: "This is a fourth title", description: "Price - 400RS" },
  { image: product5, title: "This is a fifth title", description: "Price - 400RS" },
  { image: product5, title: "This is a sixth title", description: "Price - 400RS" },
  { image: product5, title: "This is a seventh title", description: "Price - 400RS" }
];

const Topproductcardslider = () => {
  const sliderClick = (e, index) => {
    console.log('You clicked on slide number: ', index);
  };

  return (
    <div className='cardslidersection w-100 py-3 ps-5 '>
      <h2 className='text-left text-dark ps-5 ms-2 border-bottom-xl py-3 '>Best Selling Product...</h2>
      <div className='w-100 px-5'>
        <ReactCardSlider slides={slides} onClick={sliderClick}>

        </ReactCardSlider>
      </div>
    </div>
  );
};

export default Topproductcardslider;
