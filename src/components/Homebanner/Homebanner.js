import React from 'react'
import Slider from "react-slick";
// import banner1 from "../../images/1 new image/Artboard 1 1.png";
import banner2 from "../../images/1 new image/Artboard 1.png";
import banner3 from "../../images/1 new image/Artboard 3 smart storage.png";
import banner4 from "../../images/1 new image/Artboard 5.png";




const Homebanner = () => {
    var settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
    };
    return (

        <>
            <div className='homebannersection'>


                <Slider {...settings}>

                    <div className='item'>
                        <img src={banner2} alt="banner1" className='banner-1 w-100' />
                    </div>
                    <div className='item'>
                        <img src={banner3} alt="banner1" className='banner-1 w-100' />
                    </div>
                    <div className='item'>
                        <img src={banner4} alt="banner1" className='banner-1 w-100' />
                    </div>
                </Slider>

            </div>

        </>
    )
}

export default Homebanner;
