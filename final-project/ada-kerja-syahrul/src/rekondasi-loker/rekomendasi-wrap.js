import React, {useEffect, useState } from "react";
import RekomendasiItem from "./rekomendasi-item";
import HandleTime from "../handle-time";
import { Link } from "react-router-dom";

const RekomendasiWrap = (prop) =>{
    let data = prop.dataFetch
    
  const [duration, setDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(false); 

  useEffect(() => {
    let timer;
      timer = setTimeout(() => {
        if(data !== null){
            data.push(data.shift())
        }
        setIsRunning(true)
        setDuration((prevTime) => {
            
            return prevTime < 2? prevTime + 1 : prevTime - 1
        });
      }, 2500);
    
    return () => clearTimeout(timer);
  }, [isRunning, duration]);

    return (
        <>
        
        <div>
        <center class="text-2xl font-semibold my-2.5">Rekomendasi Lowongan Populer</center>
          <div className="mx-auto max-w-6xl flex justify-center">
            <div className="contents">
              <div className="my-auto h-10 w-10 rounded-3xl border border-gray-500 text-center text-3xl p-2 hover:bg-slate-200">
              <img src="https://www.svgrepo.com/show/355181/previous.svg" alt="" />
              </div>
            </div>
            <div class="w-[790px] overflow-clip mx-10">
              <div class="flex"> 
            {data !== null && data.map((res, index) => {
                return (
                  <>
                  <Link className="flex flex-col justify-between mx-1 my-2.5 h-auto w-64 rounded-md border bg-white px-3 pb-2 pt-3" to={'/lowongan-kerja/'+(index+1)}>
                    <RekomendasiItem co_img={res.company_image_url} 
                    status={res.job_status}
                    time={<HandleTime timeFromData = {res.created_at} />}
                    title={res.title} type={res.job_type} 
                    tenure={res.job_tenure} 
                    co_name={res.company_name} 
                    education={res.education === undefined ? 'Semua Jurusan' : res.education}
                    co_city={res.company_city}/>
                    </Link>
                  </>
                )
              })}
              </div>
            </div>
            <div className="contents">
              <div className="my-auto h-10 w-10 rounded-3xl border border-gray-500 text-center text-3xl p-2 hover:bg-slate-200">
                <img src="https://www.svgrepo.com/show/355139/next.svg" alt="" />
              </div>
            </div>
          </div>
          
        <div class="w-60 h-fit p-2.5 mx-auto my-2.5 border-2 hover:bg-slate-200 font-bold text-center">
          <Link to='/rekomendasi-kerja'>Rekomendasi Lainnya</Link>
          </div>
        </div>        
        </>
    )
}
export default RekomendasiWrap