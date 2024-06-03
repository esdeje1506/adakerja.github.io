import React from "react"
import { useState } from 'react';

const Tugas8 = ()=>{
    const [counter, setCounter] = useState(1);
    const tambah = () =>{
      let counterAdd = counter+1
      setCounter(counterAdd)
      
    }
    
    return (
        <div className='w-4/5 border p-3 rounded-lg mx-auto my-8 shadow-md text-sm'>
          <div className='text-center'>{counter}</div>
          <button className='w-full h-7 my-2.5	mx-0 border rounded-lg my-5' onClick={tambah}>tambah</button>
          <div>{(counter>=10 ? (`State count sudah lebih dari ${counter}!!`) : '')}</div>
        </div>
  );
}

export default Tugas8