import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer/Footer';

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectCountry, setselectedCountry] = useState(' ');


  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, [])

  const getCountry = async(url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data); 
    })
  }

  const values = {
    countryList,
    selectCountry,
    setselectedCountry,
  };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
        </MyContext.Provider>

      </BrowserRouter>

    </>
  );
}

export default App;
export { MyContext };
