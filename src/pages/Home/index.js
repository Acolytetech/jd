import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Homebanner from '../../components/Homebanner/Homebanner';
import Topproductcardslider from '../../components/best selling product/Topproductcardslider';
import TrendingProduct from '../../components/trendingproduct/TrendingProduct';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://jd-api.onrender.com/')
      .then(response => {
        const data = response.data; // Assuming response is an array of products
        console.log('API response:', data); // Log the API response for debugging
        dispatch({ type: 'SET_PRODUCTS', payload: data });
      })
      .catch(error => {
        console.error('Error fetching the data', error); // Log error if API request fails
      });
  }, [dispatch]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <Homebanner />
      <Topproductcardslider />
      <TrendingProduct />
      <br />
      <div className="product-information container mx-auto p-4">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <div key={index} style={{ width: '50%', padding: '8px', boxSizing: 'border-box' }} onClick={() => handleProductClick(product._id)}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={product.mainImage} // Correctly access the main image URL
                      alt={product.name}
                      className="object-cover absolute inset-0 w-full h-full"
                      onError={(e) => { e.target.onerror = null; e.target.src = "fallback_image_url"; }} // Fallback image URL in case of loading error
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-xl">{product.name}</h2>
                    <p className="mt-2">Rating: {product.ratings}</p> {/* Correct key for ratings */}
                    <p className="mt-2">Price: {product.price}</p>
                    <button className="mt-4 bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
