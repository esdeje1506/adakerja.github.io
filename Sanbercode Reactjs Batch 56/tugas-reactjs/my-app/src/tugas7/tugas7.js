import React from "react"

const Tugas7 = (prop)=>{
    return (
        <div className='w-4/5 border p-3 rounded-lg mx-auto my-8 shadow-md text-sm'>
            <h1>Data diri peserta kelas Reactjs</h1>
            <hr/>
            <div>
                <ul>
                    <li><b>Nama Lengkap</b>: {prop.name}</li>
                    <li><b>Email</b>:  {prop.email}</li>
                    <li><b>Batch Pelatihan</b>:  {prop.batch}</li>
                </ul>
            </div>
        </div>
  );
}

export default Tugas7