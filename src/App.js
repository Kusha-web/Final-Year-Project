import { useState } from 'react';
import Blogs from './components/Blogs';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import OrderPage_Landing from './components/OrderPage_Landing';
import Shop_Details from './components/Shop_Details';

function App() {
  let [temp,setTemp]=useState(null);
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Blogs/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/orderpage' element={<OrderPage_Landing setTemp={setTemp} />} />
        <Route path='/shop_details' element={<Shop_Details temp={temp} />} />
      </Routes>
    </div>
  );
}

export default App;
