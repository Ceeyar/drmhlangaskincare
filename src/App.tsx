import { BrowserRouter as Router } from 'react-router-dom';
import Screens from 'navigation/Screens';
import './App.scss';
import Header from './components/header/Header';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from 'components/footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header />
          <Screens />
        </Router>
      </header>
      <Footer />
    </div>
  );
}

export default App;
