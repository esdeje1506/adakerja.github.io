import React from "react"
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, ButtonGroup, Table, TableBody } from 'flowbite-react';

const Tugas11 = ()=>{

  const linkDataApi = "http://localhost:5000/student-scores"
  const [data, setData] = useState(null)  
  const  [input, setInput] = useState(
     {
       name : "",
       course: "",
       score: ""
     }
   )
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

  const handleInput = (event) => {
    let name = event.target.name
    let value = event.target.value
    let idData = parseInt(data[data.length-1].id)+1
    if (name === "name") {
      setInput({ ...input, id:idData+'', name: value})
    }
    if (name === "course") {
      setInput({ ...input, id:idData+'', course: value})
    }
    if (name === "score") {
      setInput({ ...input, id:idData+'', score: value})
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let {
      name
    } = input
    let {
      course
    } = input
    let {
      score
    } = input
    let {
      id
    } = input
    
    if(input.name.length>0 && input.course.length>0 && input.score.length>0){
    axios.post(linkDataApi, { id, name, course, score})
      .then((res) => {
        console.log(res)
        setFetchStatus(true)
      })
    }
    else{
      alert('Tidak Boleh Ada yang Kosong')
    }
    setInput(
      {
        name : "",
        course: "",
        score: ""
      }
    )
  }
  const handleDelete = (event) => {

    let idData = event
    console.log(`${linkDataApi}/${idData}`)
    /**/axios.delete(`${linkDataApi}/${idData}`)
    .then((res) => {
      setFetchStatus(true)
    })

  } 
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
          <Table.HeadCell className='bg-violet-500 rounded-tr-lg p-3 w-1/6'>ACTION</Table.HeadCell>
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
                <Table.Cell className="p-3">                  
                  <ButtonGroup>
                    <Button className='bg-red-500 border-2 rounded-lg text-white' onClick={()=>handleDelete(res.id)}>Delete</Button>
                  </ButtonGroup>
                </Table.Cell>
               </Table.Row>
             </>
           )
         })}
         </TableBody>
        </Table>
       </div>

       
       <div className='w-4/5 border p-3 rounded-lg mx-auto my-8 shadow-md text-sm'>
        <form onSubmit={handleSubmit}>
            <label>Nama :</label>
            <div>
              <input onChange={handleInput} name="name" value={input.name} className="block w-full px-2.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />  
            </div>            
            <span>Mata Kuliah :</span>
            <div>
              <input onChange={handleInput} name="course" value={input.course} className="block px-2.5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />  
            </div>  
            <span>Nilai :</span>
            <div>
              <input onChange={handleInput} name="score" value={input.score} min="0" type="number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />  
            </div>  
            <button className='w-16 h-9 bg-indigo-600 border-2 rounded-lg text-white'>submit</button>
        </form>
        </div> 
    </>
  );
}

export default Tugas11