import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Asteroids from './components/Neo';
import Earth from './components/Earth';
import Weather from './components/Weather';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <div >
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/neo' element={<Asteroids />}></Route>
          <Route path='/earth' element={<Earth />}></Route>
          <Route path='/weather' element={<Weather />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
