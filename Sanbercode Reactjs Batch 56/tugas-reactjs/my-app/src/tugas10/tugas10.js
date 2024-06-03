import React from "react"
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {Table, TableBody } from 'flowbite-react';

const Tugas10 = ()=>{

  const linkDataApi = "http://localhost:5000/student-scores"
  const [data, setData] = useState(null)  
  const [fetchStatus, setFetchStatus] = useState(true)

  useEffect(() => {
    if (fetchStatus === true) {
      axios.get(linkDataApi)
        .then((res) => {
          setData([...res.data])
        })
        .catch((error) => {
          console.log(error)
        })
      setFetchStatus(false)
    }
  }, [fetchStatus, setFetchStatus])

  const handleIndexScore = (nilai) =>{
      if (nilai >= 80) return "A"
      else if (nilai >= 70 && nilai < 80) return "B"
      else if (nilai >= 60 && nilai < 70) return "C"
      else if (nilai >= 50 && nilai < 60) return "D"
      else if (nilai < 50) return "E"
  }
  
    return (
    <>        
      <div className='w-4/5 bg-white shadow-md rounded-lg mx-auto my-8'>
        <Table>
        <Table.Head className='text-white text-left'>
          <Table.HeadCell className='bg-violet-500 rounded-tl-lg p-3 w-1/6'>NO</Table.HeadCell>
          <Table.HeadCell className='bg-violet-500 p-3 w-1/6'>NAMA</Table.HeadCell>
          <Table.HeadCell className='bg-violet-500 p-3 w-1/6'>MATA KULIAH</Table.HeadCell>
          <Table.HeadCell className='bg-violet-500 p-3 w-1/6'>NILAI</Table.HeadCell>
          <Table.HeadCell className='bg-violet-500 p-3 w-1/6'>INDEX NILAI</Table.HeadCell>
        </Table.Head>
        <TableBody>
         {data !== null && data.map((res) => {                
           return (
             <>
               <Table.Row className="border-b">
                <Table.Cell className="p-3 font-bold">{res.id}</Table.Cell>
                <Table.Cell className="p-3">{res.name}</Table.Cell>
                <Table.Cell className="p-3">{res.course}</Table.Cell>
                <Table.Cell className="p-3">{res.score}</Table.Cell>
                <Table.Cell className="p-3">{handleIndexScore(res.score)}</Table.Cell>
               </Table.Row>
             </>
           )
         })}
         </TableBody>
        </Table>
       </div>

    </>
  );
}

export default Tugas10