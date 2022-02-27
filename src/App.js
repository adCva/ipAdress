import Details from './Components/Details';
import Header from './Components/Header';
import './Reset.css';
import './Scss/style.css';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Details />
      </main>
    </div>
  );
}

export default App;