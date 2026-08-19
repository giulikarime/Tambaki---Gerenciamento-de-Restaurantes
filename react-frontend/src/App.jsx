import './App.css';
import Login from './pages/FirstAccess/login';
import Home from './pages/Home/Home';
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <main className='bg-[#fff8e9] min-h-screen font-[Montserrat]'>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Home/>}></Route>
      </Routes>
    </main>
  );
}

export default App;
