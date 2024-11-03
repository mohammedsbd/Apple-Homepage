import React from 'react'
import "./commonResource/css/bootstrap.css"
import "./commonResource/css/styles.css"
import MainSection from './Sections/MainSection/MainSection.jsx'
import Mac from "./OtherLinks/SingleLink/Mac";
import Iphone from "./OtherLinks/SingleLink/Iphone";
import Ipad from "./OtherLinks/SingleLink/Ipad";
import Watch from "./OtherLinks/SingleLink/Watch";
import Tv from "./OtherLinks/SingleLink/Tv";
import Music from "./OtherLinks/SingleLink/Music";
import Support from "./OtherLinks/SingleLink/Support";
import Search from "./OtherLinks/SingleLink/Search";
import Cart from './OtherLinks/SingleLink/Cart.jsx'
import Four04 from './Four04/Four04.jsx'
import SharedComponenet from './SharedComponent/SharedComponenet.jsx'
import ProductPage from './OtherLinks/SingleLink/ProductPage.jsx';
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedComponenet />}>
          <Route path="mac" element={<Mac />} />
          <Route path="Iphone" element={<Iphone />} />
          <Route path="Ipad" element={<Ipad />} />
          <Route path="Watch" element={<Watch />} />
          <Route path='iphone/:productId' element={<ProductPage/>}/>
          <Route path="Tv" element={<Tv />} />
          <Route path="Music" element={<Music />} />
          <Route path="Support" element={<Support />} />
          <Route path="search" element={<Search />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
          <Route path="/" element={<MainSection />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
