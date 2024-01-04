import './App.css';
import Navbar from './components/Navbar';
import { Shop } from './components/Shop';

function App() {
  return (
    <>
    <div className="App">
      <h1>Redux</h1>
      <Navbar />
      <Shop />
    </div>
    </>
  );
}

export default App;
