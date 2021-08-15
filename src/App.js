import reactLogo from './assets/react.svg';
import './App.css';
import Card from './components/card/Card'


function App() {
  return (
    <div className="container">
      <div className="logo-container">
            <img className="react-logo" src={reactLogo} alt="" />
      </div>
      <div className="cards-container">
          <h5 className="cards-title">Languages</h5>
          <Card />
        </div>
      </div>
  )
}

export default App;
