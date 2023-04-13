import "./Styles/Homesyl.css"
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Navbar1 from './Components/Navbar/Navbar1';
import Navbar2 from './Components/Navbar/Navbar2';
import AllRoutes from './Pages/AllRoutes';
import Footer from './Pages/Footer';

import { Button, ButtonGroup,Wrap } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Navbar1/> */}
      <Navbar2 />
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
