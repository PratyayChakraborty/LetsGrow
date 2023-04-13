import "./Styles/Homesyl.css"
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Navbar1 from './Components/Navbar/Navbar1';
import AllRoutes from './Pages/AllRoutes';
import Footer from './Pages/Footer';



function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar1/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
