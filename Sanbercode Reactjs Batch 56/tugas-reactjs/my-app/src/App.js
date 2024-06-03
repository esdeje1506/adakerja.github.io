import React from 'react';
import Tugas11 from './tugas11/tugas11';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tugas6 from './tugas6/tugas6';
import Tugas7 from './tugas7/tugas7';
import Tugas8 from './tugas8/tugas8';
import Tugas9 from './tugas9/tugas9';
import Tugas10 from './tugas10/tugas10';
import Navbar from './Tugas12/navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/'  element={<Tugas6 />}> </Route>
        <Route path='/tugas6' element={<Tugas6 />}> </Route>
        <Route path='/tugas7' element={<Tugas7  name = 'Syahrul Dwi Juniyanto' email = 'syahruldj1506@gmail.com' batch = '56'/>}> </Route>
        <Route path='/tugas8' element={<Tugas8 />}> </Route>
        <Route path='/tugas9' element={<Tugas9 />}> </Route>
        <Route path='/tugas10' element={<Tugas10 />}> </Route>
        <Route path='/tugas11' element={<Tugas11 />}> </Route>
      </Routes>
  </BrowserRouter>
  <div className='text-xs bg-yellow-100 w-fit'>    
    <div>data menggunakan <b>JSON server</b></div>
    <div>install <b>JSON server</b> <code>npm install -g json-server</code></div>
    <div>jalankan dengan <code>json-server --watch db.json --port 5000</code> pada <code>src/data_base</code></div>
    <div>dapat diakses di <code>http://localhost:5000/student-scores/</code></div>
  </div>
  
    </>
  );
}

export default App;
