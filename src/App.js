
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content/Content';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Content/>
   <Footer/>
    </div>
  );
}

export default App;
