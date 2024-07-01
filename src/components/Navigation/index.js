import React from 'react'

import { useState } from'react';
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";

const Navigation = () => {

  const [isopenSidebarVal, setisopenSidebarVal] =useState(false);
  return (
    <>
      <nav >
        <div className='container'>
          <div className='row'>
            <div className='col-sm-3 navpart1'>
              <div className='catWrapper'>
                <Button className='allCatTab gap-1 align-items-center '
                 onClick={() => setisopenSidebarVal(!isopenSidebarVal)}>
                  <span className='icon1'><IoIosMenu /> </span>
                  <span className='text'>All CATEGORIES</span>
                  <span className='icon2'>  <FaAngleDown /></span>
                </Button>

                <div className={`sidebarNav bg-light ${isopenSidebarVal===true ? 'open' : ''}`}>
                  {/* <ul className='list-group'> */}
                    <li className='list-group-item'><Link className='link' to="/#">Home</Link></li>
                    <li className='list-group-item'><Link className='link' to="/#">Kitchen</Link></li>
                    <li className='list-group-item'><Link className='link' to="/#">Bathroom</Link></li>
                    <li className='list-group-item'><Link className='link' to="/#">Home & Garden</Link></li>
                    <li className='list-group-item'><Link className='link' to="/#">Sports & Outdoors</Link></li>
                    <li className='list-group-item'><Link className='link' to="/#">More</Link></li>
                  {/* </ul> */}
                  <Button className='seeAll'>See All Categories</Button>
                  <Button className='seeAll'></Button>
                </div>
              </div>



            </div>
            <div className='col-sm-9 navpart2  text-end '>
              <ul className='list list-inline '>
                <li className='list-inline-item'><Link className='link' to="/" target='_blank'><span><AiOutlineHome /></span>&nbsp; Home</Link></li>
                <li className='list-inline-item'><Link className='link' to="/#">product <span className='icon2'>  <FaAngleDown /></span></Link></li>

                <li className='list-inline-item'><Link className='link' to="/#">purchase <span className='icon2'>  <FaAngleDown /></span></Link></li>
                <li className='list-inline-item'><Link className='link' to="/#">sale <span className='icon2'>  <FaAngleDown /></span></Link></li>
                <li className='list-inline-item'><Link className='link' to="/#">contact us</Link></li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
