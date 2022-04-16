import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import GetSpecials from './api/GetSpecials';

GetSpecials();

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
