import React, { useContext } from 'react'
import logo from '../../images/LOGO-1.png';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
import CountryDropdown from '../CountryDropdown';
import { IoSearch } from "react-icons/io5";
import { HiMiniShoppingBag } from "react-icons/hi2";

import { FaUser } from "react-icons/fa";
import SearchBox from '../Serachbox';
import Navigation from '../Navigation';
import { MyContext } from '../../App';


const Header = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="headerWrapper">
        <div className='top-strip bg-red'>
          <div className='container '>
            <p className="mb-0 mt-0 text-center ">
              Due to <b>COVID 19</b> epidemic, orders may be processed with a slight delay.

            </p>
          </div>
        </div>
        <header className='header'>
          <div className='container'>
            <div className='row'>
              <div className='logowrapper d-flex align-items-center col-sm-2'>
                <Link to='/'><img src={logo} alt='logo' /></Link>
              </div>
              <div className='col-sm-10 d-flex align-items-center part2'>
{
  context.countryList.length!==0 && <CountryDropdown />
}

                
                {/* header search start here */}
                <SearchBox />
                {/* header search end here */}
                <div className='part3 d-flex align-items-center '>
                  <Button className='circle ms-3'> <FaUser /> </Button>
                  <div className='cartTab ms-3 d-flex align-items-center'>
                    <span className='price' >$3.29</span>
                    <div className='position-relative ms-3'>
                      <Button className='circle  '> <HiMiniShoppingBag /> </Button>
                      <span className='count d-flex align-items-center justify-content-center'>1</span>

                    </div>


                  </div>

                </div>



              </div>
            </div>
          </div>
        </header>
        <Navigation />
      </div>

    </>
  )
}

export default Header;
