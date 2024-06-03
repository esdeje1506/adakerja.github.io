import './App.css';
import Navbar from './navbar/navbar';
import ContentSection from './section/content_section';
import DataManage from './data_manage/data_manage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/'  element={<ContentSection />}> </Route>
        <Route path='/home' element={<ContentSection />}> </Route>
        <Route path='/data-manage' element={<DataManage />}> </Route>
      </Routes>
  </BrowserRouter>

  <div className='text-xs bg-yellow-100 w-full'>    
    <div>data menggunakan <b>JSON server</b></div>
    <div>install <b>JSON server</b> <code>npm install -g json-server</code></div>
    <div>jalankan dengan <code>json-server --watch db.json --port 5000</code> pada <code>src/data_base</code></div>
    <div>dapat diakses di <code>http://localhost:5000/mobile-apps</code></div>
  </div>
 
  </div>
    </>
  );
}

export default App;
