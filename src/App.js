// import logo from './logo.svg'; 
import profile from './profile.jpg';
import './App.css';

function Bio() {
  return (
    <div>
      <img src={profile} className="App-logo" alt="logo" />
      <h1>
        Sumedh Saurabh
      </h1>
      <a>
        Software Engineer.
        Photographer.
        Traveler.
      </a>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <bio />
      </header>
    </div> 
  );
}
