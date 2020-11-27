import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
// import Products from '../components/Products';

function Home() {
  return (
      <div className="home_page">
          <div>
              <Banner />
          </div>
          <div>
              <h2>New Promotions!</h2>
                <Products />
          </div>
          <div>
              <h2>HoT DeaL!</h2>
                <Products />
          </div>
          <div>
              <h2>New Arrived</h2>
                <Products />
          </div>
          <div>
            <h2>New Products</h2>
            <Products />
          </div>
          <div>
            Top Chart Products
            <Products />
          </div>
          <div>
            Feature Product
            <Products />
          </div>
          <div>
              Sidebar (Categories List)
          </div>
        
      </div>
  )
}

export default Home;
