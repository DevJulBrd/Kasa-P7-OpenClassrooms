import './styles/App.css';

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Housing from './pages/Housing/Housing'

function App() {


  return (
    <div className='full-container'>
      <Header />
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path='/apropos' element={<About />} />
        <Route path='/housing/:id' element={<Housing />} /> 
        <Route path='*' element={<Error />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
