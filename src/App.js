import './App.css';
import {Routes , Route , useNavigate} from 'react-router-dom'
import Home from './Pages/Home';


function App() {
  const navigate = useNavigate();
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
  </Routes>
  );
}

export default App;
