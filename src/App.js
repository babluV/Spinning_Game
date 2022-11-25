import logo from './logo.svg';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Details from './component/Details';
import Startpg from './component/Startpg';
function App() {
  return (
    <div>
      
     <BrowserRouter>
    <Routes>
      <Route path='/'element={<Details/>}></Route>
      {/* <Route path='/spin'element={<Spin/>}></Route> */}
      <Route path='/start'element={<Startpg/>}></Route> 
    </Routes>
    </BrowserRouter>  
           </div>
  )
}

export default App;
