import logo from './logo.svg';
import './App.css';
import ButtonComponent from './ButtonComponent'
import ImageComponent from './ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent firstProp="First PROP Button" />
        <ButtonComponent secondProp="Second PROP Button" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ImageComponent url="https://www.dreamworks.com/storage/cms-uploads/puss-in-boots-the-last-wish-poster-thumbnail2.jpg" alt="Puss in Boots: The Last Wish" />
      </header>
    </div>
  );
}

export default App;
