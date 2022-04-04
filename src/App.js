import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1> Space-hub</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
