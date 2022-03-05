import './Reset.css';
import './Scss/style.css';
// ========= Components.
import Details from './Components/Details';
import Header from './Components/Header';
import Map from './Components/Map';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Details />
        <Map />
      </main>
    </div>
  );
}

export default App;