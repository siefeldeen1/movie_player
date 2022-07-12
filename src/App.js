
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route ,Link,useParams} from "react-router-dom";
import Discribtion_page from './Pages/Discribtion_page'
import Home from './Pages/Home';
function App() {
  return (
 <>
 
 
 <Router>

  <Routes>
    <Route path='/'  element={<Home/>} />
<Route path="/Discribtion_page/:id" element={<Discribtion_page />}  />



  </Routes>

 </Router>
 



 </>
 

  );
}

export default App;
