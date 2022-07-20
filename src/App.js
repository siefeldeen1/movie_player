import { useMediaQuery } from 'react-responsive'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discribtion_page from './Pages/Discribtion_page'
import Home from './Pages/Home';
import Movies from "./Pages/Movies"
import Tv_series from "./Pages/Tv_series"
import Most_watched from "./Pages/Most_watched"
import "./App.css"
import Not_found from './Pages/Not_found';
function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
 <>
 
 
 <Router>

  <Routes>
    <Route path='/'  element={<Home/>} /> 
    <Route path="/Discribtion_page/:id" element={<Discribtion_page />}  />
    <Route path='/Movies'        element={<Movies/>}   />
    <Route path='/Tv_series'        element={<Tv_series/>}   />
    <Route path='/Most_watched'        element={<Most_watched/>}   />
<Route  path='/Not_available_yet/:id' element={<Not_found/>} />
  </Routes>

 </Router>
 



 </>
 

  );
}

export default App;
