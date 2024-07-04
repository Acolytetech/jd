import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer/Footer';
import ProductList from './pages/Home/ProductList.js/ProductList';
import { Provider } from 'react-redux';
import store from './utils/Store';
import ProductDetail from './pages/productDetails/ProductDetails';
import ProductDetails from './pages/productDetails/ProductDetails';

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectCountry, setselectedCountry] = useState(' ');

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async(url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data); 
    });
  };

  const values = {
    countryList,
    selectCountry,
    setselectedCountry,
  };

  return (
    <Provider store={store}>
      <MyContext.Provider value={values}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyContext.Provider>
    </Provider>
  );
}

export default App;
export { MyContext };
