import React, { useState, useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { IoSearch } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryList, setCountryList] = useState([]);
  const context = useContext(MyContext);

  useEffect(() => {
    // Populate countryList from context.countryList on component mount
    setCountryList(context.countryList);
  }, [context.countryList]); // Include context.countryList as a dependency

  const selectCountry = (index, country) => {
    setSelectedCountry(country); // Update local state
    setIsOpenModal(false); // Close the modal
    setSelectedCountry(country); // Update selected country in context
  };

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== '') {
      // Filter countryList based on keyword
      const filteredList = context.countryList.filter((item) =>
        item.country.toLowerCase().includes(keyword)
      );
      setCountryList(filteredList); // Update filtered list
    } else {
      // Reset countryList to original context.countryList when keyword is empty
      setCountryList(context.countryList);
    }
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="lable">Your Location</span>
          <span className="name">
            {selectedCountry !== '' ? selectedCountry : 'Select location'}
          </span>
        </div>
        <span className="ms-auto">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        className="locationModal"
        TransitionComponent={Transition}
      >
        <DialogTitle>
          <h4 className="mb-0 text-capitalize">Choose your delivery location</h4>
        </DialogTitle>
        <p>
          Enter your address and we will specify the offers for your area.
          <Button className="fs-4 closebtn" onClick={() => setIsOpenModal(false)}>
            <MdClose />
          </Button>
        </p>
        <div className="headerSearch w-100">
          <input type="text" placeholder="Search for products..." onChange={filterList} />
          <Button>
            <IoSearch />
          </Button>
        </div>
        <ul className="countrylist">
          {countryList.length !== 0 &&
            countryList.map((item, index) => (
              <li key={index}>
                <Button
                  onClick={() => selectCountry(index, item.country)}
                  className={`${selectedCountry === item.country ? 'active' : ''}`}
                >
                  {item.country}
                </Button>
              </li>
            ))}
        </ul>

      </Dialog>
    </>
  );
};

export default CountryDropdown;
