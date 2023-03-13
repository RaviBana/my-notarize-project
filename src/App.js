import './App.css';
import Header from './allComponents/Header';
import Container1 from './allComponents/Container1';
import Container2 from './allComponents/Container2';
import Container3 from './allComponents/Container3';
import Container4 from './allComponents/Container4';
import Container5 from './allComponents/Container5';
import Container6 from './allComponents/Container6';
import Container7 from './allComponents/Container7';
import Container8 from './allComponents/Container8';
import Footer from './allComponents/Footer';

function App() {
  return (
    <div className="container">
      <Header/>
      <Container1/>
      <div className='bg-clr'>
      <Container2/>
      <Container3/>
      <Container4/>
      <Container5/>
      <Container6/>
      <Container7/>
      <Container8/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
