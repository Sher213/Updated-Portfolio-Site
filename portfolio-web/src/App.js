import './App.scss';
import { Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route element = {<Layout />}>
        <Route path='/' index element={<Home/>} />
        <Route path='/about' index element={<About/>} />
        <Route path='/contact' index element={<Contact/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
