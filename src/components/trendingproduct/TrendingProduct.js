import React from 'react';
import ReactCard from 'react-card-component';
import product1 from '../../images/1 new image/Artboard 2.png';
import product2 from '../../images/1 new image/Artboard 4smart storage squre.png';
import product3 from '../../images/1 new image/Category creative 4.png';
import product4 from '../../images/1 new image/Artboard 6.png';


// Sample card data (you can replace this with your actual data source)
const cardData = [
    { id: 1, image : product1 , title: 'Funnel', content: 'This is the content of card 1.' },
    { id: 2, image : product2 , title: 'cupboard', content: 'This is the content of card 2.' },
    { id: 3, image : product3 , title: 'shoes rack', content: 'This is the content of card 3.' },
    { id: 4, image : product4 , title: 'clothes rack', content: 'This is the content of card 4.' }
];


const TrendingProduct = () => {
    // const sliderClick1 = (e, index) => {
    //     console.log('You clicked on slide number: ', index);
    //   };
    
      return (
        <div className='mt-5'>
        
      
        <div className='cardslidersection w-100 ps-5 '>
          <h2 className='text-left text-secondry ps-5 ms-2 border-bottom-xl pt-5 text-capitalize'>trending Selling Product in Kitchen & Home...</h2>
          <div className='w-100 px-5'>
          <div className="container">
            <div className="row">
                {cardData.map(card => (
                    <div key={card.id} className="col-md-6 col-lg-3 mb-4">
                        <div className="card border-0">
                            <div className="card-body text-capitalize">
                                <img className="card-img-top" style={{height:'250px'}} src={card.image} alt="Card image cap" />
                                <h5 className="card-title pt-1">{card.title}</h5>
                                <p className="card-text">{card.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
          </div>
        </div>
        </div>
      );
    };
    
export default TrendingProduct
