import './App.css';
import Menu from './pages/Menu/Menu';
import {Routes,Route} from 'react-router-dom';

function App() {

  return (
    <main>
      <Routes>
        <Route path='/Menu' element={<Menu/>}></Route>
      </Routes>
    </main>
  );
}

export default App;
