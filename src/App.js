import './App.css';
import Navbar from './component/navbar/Navbar.js';
import Footer from './component/footer/Footer.js';
import FAQ from './component/faq/faq.js';
import Header from './component/headSection/Header.js';
import Overview from './component/pojectOverview/Overview';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Overview/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
