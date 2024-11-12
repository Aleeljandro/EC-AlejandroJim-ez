import logo from './logo.svg';
import './Slider.css';

function Slider() {
  return (
    <div className="Slider">
      <header className="Sliderp-header">
        <img src={logo} className="Slider-logo" alt="logo" />
        <p>
          Quiero un Cloyster
        </p>
        <a
          className="Slider-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
