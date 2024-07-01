import React from 'react'
import productDetails1 from '../../images/1 new image/Artboard 2.png';
import productDetails2 from '../../images/1 new image/Artboard 3 smart storage.png';
import productDetails3 from '../../images/1 new image/Artboard 5.png';
import productDetails4 from '../../images/1 new image/Category creative 4.png';

import Homebanner from '../../components/Homebanner/Homebanner';
import Topproductcardslider from '../../components/best selling product/Topproductcardslider';
import TrendingProduct from '../../components/trendingproduct/TrendingProduct';

const Home = () => {
  return (
    <>
      <Homebanner />
      <Topproductcardslider />
      <TrendingProduct />
      <br />
      <div className='product-information container'>
        <div className='col ms-4 gap-2'>
          <img src={productDetails1} alt='production details' width={'100%'} height={'400px'} className='shadow mb-3'/>
          <img src={productDetails2} alt='production details' width={'100%'} height={'300px'} className='shadow mb-3'/>
          <img src={productDetails3} alt='production details' width={'100%'} height={'300px'} className='shadow mb-3' />
          <img src={productDetails4} alt='production details' width={'100%'} height={'300px'} className='shadow mb-3' />
        </div>
      </div>



    </>
  )
}

export default Home;
