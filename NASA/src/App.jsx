import './App.css'
import { ThemeProvider } from "@material-tailwind/react";
import { HashRouter, Routes, Route } from 'react-router-dom'
import More from './pages/More';
import Home from './pages/Home';
import Info from './pages/Info';
import MyFooter from './components/MyFooter';
import Error from './pages/Error';



function App() {

  return (
    <>
      <ThemeProvider>
      <HashRouter>
        <Routes>
           <Route path="/info/:infoId" element={<Info />} />
           <Route path="/more" element={<More />} />
           <Route path="/" element={<Home />} />
           <Route path="/error" element={<Error />} />
        </Routes>
      </HashRouter>
      
      </ThemeProvider>
      <div className='mt-20'>
        <MyFooter></MyFooter>
      </div>
    </>
  )
}

export default App

