import './styles/App.css';

import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Error from './components/pages/Error/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Housing from './components/pages/Housing/Housing'

function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path='/apropos' element={<About />} />
        <Route path={'housing/:id'} element={<Housing />} />
        <Route path='/*' element={<Error />} />  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
