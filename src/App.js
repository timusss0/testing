import logo from './logo.svg';
import './App.css';
import Mybutton from './componen/mybutton';
import Navbar from './componen/Navbar';
import Footer from './componen/Footerr';

function App() {
  const navHeading = "navigation bar";
  const navText = "halo";

  const clicked = () => {
    return alert("button di klik");
  }

  const paragrapf = '<i>mantap bang</i>';

  return (
    <div className="App">
      <header className="App-header">
      <Navbar navText={navText} navHeading={navHeading}/>
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
         halo cuy
        </p> 
        <Mybutton clicked={clicked}/>
        <Footer tulisan = {paragrapf}/>
      </header>
    </div>
  );
}

export default App;
