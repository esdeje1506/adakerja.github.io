import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./nav-foot/navbar";
import ContentSection from "./content-section/content-section";
import Footer from "./nav-foot/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LokerWrap from "./loker/loker-wrap";
import LokerDetail from "./loker/loker-detail";
import NotFound from "./404/not-found";
import Login from "./login-signup/login";
import Signup from "./login-signup/signup";
import SearchForm from "./search/search-form";

function App() {

  const linkData = 'https://dev-example.sanbercloud.com/api/job-vacancy'

  const [fetchStatus, setFetchStatus] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {

    if (fetchStatus === true) {
      axios.get(linkData)
        .then((res) => {
          let dataReverse = [...res.data.data]
          setData(dataReverse.reverse())
          console.log('BERHASIL', res.data.data)
        })
        .catch((error) => {
          console.log(error)
        })

      setFetchStatus(false)
    }

  }, [fetchStatus, setFetchStatus])

  return (
    <>
      <div className="h-auto bg-slate-50 p-1">
        <BrowserRouter>

          <Routes>
            <Route path='/' element={
              <>
                <Navbar link={'home'} />
                <ContentSection dataFetch={data} />
              </>
            }>
            </Route>
            <Route path='/home' element={
              <>
                <Navbar link={'home'}/>
                <ContentSection dataFetch={data} />
              </>}>
            </Route>
            <Route path='/lowongan-kerja/:idLoker' element={
              <>
                <Navbar link={'loker'} />
                <LokerDetail dataFetch={data} />
              </>}>
            </Route>
            <Route path='/lowongan-kerja/' element={
              <>
                <Navbar  link={'loker'}/>
                <div className="mt-16 p-1">
                <SearchForm/>
                </div>
                <LokerWrap dataFetch={data} posision='-' />
              </>}>
            </Route>
            <Route path='/rekomendasi-kerja' element={
              <>
              <Navbar  link={'rekomendasi'}/>
              <LokerWrap dataFetch={data} posision='-' />
            </>}>
          </Route>
            <Route path='/login' element={
              <Login />
            }> 
            </Route>
            <Route path='/signup' element={
              <Signup />
            }> 
            </Route>
            <Route path="*" element={
              <>
                <NotFound />
              </>
            } />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
