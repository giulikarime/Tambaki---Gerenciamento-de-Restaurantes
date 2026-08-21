import './App.css';
import Login from './pages/FirstAccess/Login.jsx';
import Home from './pages/Home/Home';
import Configuration from './pages/Configuration/Configuration.jsx';
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Home/>}></Route>
        <Route path='/configuration' element={<Configuration/>}></Route>
      </Routes>
    </main>
  );
}

export default App;
