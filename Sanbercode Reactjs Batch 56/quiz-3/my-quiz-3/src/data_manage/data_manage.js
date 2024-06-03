import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, ButtonGroup, Table, TableBody } from 'flowbite-react';

const DataManage = ()=>{

    const linkDataApi = "http://localhost:5000/mobile-apps"
    const [data, setData] = useState(null)  
    const [fetchStatus, setFetchStatus] = useState(true)      
    const  [input, setInput] = useState(
        {
         image_url : "", 
         name : "", 
         category : "", 
         description :"", 
         price : 0, 
         rating : 0, 
         release_year : 0,
         size : 0, 
         is_android_app : 1, 
         is_ios_app : 1
        }
      )   
    const [editDataStatus, setEditDataStatus] = useState({
        id: -1,
        status: false
    })
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
       if (name === "image_url") {
         setInput({ ...input, id:idData+'', image_url: value})
       }
       if (name === "name") {
         setInput({ ...input, id:idData+'', name: value})
       }
       if (name === "category") {
         setInput({ ...input, id:idData+'', category: value})
       }
       if (name === "price") {
         setInput({ ...input, id:idData+'', price: parseInt(value)})
       }
       if (name === "description") {
         setInput({ ...input, id:idData+'', description: value})
       }
       if (name === "rating") {
         setInput({ ...input, id:idData+'', rating: parseInt(value)})
       }
       if (name === "release_year") {
         setInput({ ...input, id:idData+'', release_year: parseInt(value)})
       }
       if (name === "size") {
         setInput({ ...input, id:idData+'', size: parseInt(value)})
       }
       if (name === "is_android_app") {
         setInput({ ...input, id:idData+'', is_android_app: parseInt(value)})
       }
       if (name === "is_ios_app") {
         setInput({ ...input, id:idData+'', is_ios_app: parseInt(value)})
       }
   
   
   
     }
   
     const handleSubmit = (event) => {
       event.preventDefault()
       let {
       id,
       image_url, 
       name, 
       category, 
       description, 
       price, 
       rating , 
       release_year,
       size, 
       is_android_app, 
       is_ios_app
       } = input
       if(input.is_android_app===0 && input.is_ios_app===0) {
        alert('Pilih Salah Satu atau Semua!')
        }
        else{
       if(input.image_url.length>0 && input.name.length>0 && input.category.length>0 && input.description.length>0){
       
        axios.post(linkDataApi, {
         id, image_url, name, category, description, price, rating, release_year, size, is_android_app,is_ios_app
         })
         .then((res) => {
           setFetchStatus(true)
         })
         console.log('input data berhasil', input)         
       setInput(
         {
           image_url : "", 
           name : "", 
           category : "", 
           description :"", 
           price : 0, 
           rating : 0, 
           release_year : 0,
           size : 0, 
           is_android_app : 1, 
           is_ios_app : 1
          }
       )
       }
       else{
         alert('Tidak Boleh Ada yang Kosong!')
       }
       }
     }

     const handleDelete = (event) => {

        let idData = event
        console.log(`${linkDataApi}/${idData}`)
        axios.delete(`${linkDataApi}/${idData}`)
        .then((res) => {
          setFetchStatus(true)
        })
    
    } 

    
  const handleEdit = (event) =>{

    let idData = event
    setEditDataStatus({id:idData, status: true})
    console.log(idData)

    axios.get(`${linkDataApi}/${idData+""}`)
      .then((res) => {
        let data = res.data
        console.log(data)        
    setInput(
      {
        image_url : data.image_url, 
        name : data.name, 
        category : data.category, 
        description :data.description, 
        price : data.price, 
        rating : data.rating, 
        release_year : data.release_year,
        size : data.size, 
        is_android_app : data.is_android_app, 
        is_ios_app : data.is_ios_app
      }
    )

      })
  }

  

  const handleSubmitEdit = (event) =>{   
    event.preventDefault()
    let {
    id,
    image_url, 
    name, 
    category, 
    description, 
    price, 
    rating , 
    release_year,
    size, 
    is_android_app, 
    is_ios_app
    } = input
    if(input.is_android_app===0 && input.is_ios_app===0) {
     alert('Pilih Salah Satu atau Semua!')
     }
     else{
    if(input.image_url.length>0 && input.name.length>0 && input.category.length>0 && input.description.length>0){
   
    axios.put(`${linkDataApi}/${editDataStatus.id}`,  {
        id, image_url, name, category, description, price, rating, release_year, size, is_android_app,is_ios_app
        })
    .then(response => {
      console.log('Data berhasil diperbarui:', response.data);
      setEditDataStatus({id:-1, status:false})
      setFetchStatus(true)
    })
    .catch(error => {
      console.error('Gagal memperbarui data:', error);
    });     
    setInput(
      {
        image_url : "", 
        name : "", 
        category : "", 
        description :"", 
        price : 0, 
        rating : 0, 
        release_year : 0,
        size : 0, 
        is_android_app : 1, 
        is_ios_app : 1
       }
    )
    }
    else{
      alert('Tidak Boleh Ada yang Kosong!')
    }
    }
  }

    return(
        <>
        <div className='w-11/12 bg-white shadow-md rounded-lg mx-auto my-8'>
        <Table>
        <Table.Head className='text-white text-left'>
          <Table.HeadCell className='bg-violet-500 rounded-tl-lg p-3 w-1/6'>NO</Table.HeadCell>
          <Table.HeadCell className='bg-violet-500 p-3 w-1/6'>NAMA</Table.HeadCell>
          <Table.HeadCell className='bg-violet-500 p-3 w-1/6'>KATEGORI</Table.HeadCell>
          <Table.HeadCell className='bg-violet-500 p-3 w-52'>DESCRIPTION</Table.HeadCell>
          <Table.HeadCell className='bg-violet-500 p-3 w-1/6'>PRICE</Table.HeadCell>
          <Table.HeadCell className='bg-violet-500 p-3 w-1/6'>RATING</Table.HeadCell>
          <Table.HeadCell className='bg-violet-500 p-3 w-1/6'>RELEASE YEAR</Table.HeadCell>
          <Table.HeadCell className='bg-violet-500 p-3 w-1/6'>SIZE</Table.HeadCell>
          <Table.HeadCell className='bg-violet-500 p-3 w-16'>IS_ANDROID_APP</Table.HeadCell>
          <Table.HeadCell className='bg-violet-500 p-3 w-16'>IS_IOS_APP</Table.HeadCell>
          <Table.HeadCell className='bg-violet-500 rounded-tr-lg p-3 w-1/6'>ACTION</Table.HeadCell>
        </Table.Head>
        <TableBody>
        {data !== null && data.map((res) => {            
                
                return (
                    <Table.Row className="border-b w-1/6 truncate">
                        <Table.Cell className="p-3 font-bold w-1/6">{res.id}</Table.Cell>
                        <Table.Cell className="p-3"><div className="w-52 truncate">{res.name}</div></Table.Cell>
                        <Table.Cell className="p-3 ">{res.category}</Table.Cell>
                        <Table.Cell className="p-3"><div className="w-48 truncate">{res.description}</div></Table.Cell>
                        <Table.Cell className="p-3 w-1/6">{res.price}</Table.Cell>
                        <Table.Cell className="p-3 w-1/6">{res.rating}</Table.Cell>
                        <Table.Cell className="p-3 w-1/6">{res.release_year}</Table.Cell>
                        <Table.Cell className="p-3 w-1/6">{res.size}</Table.Cell>
                        <Table.Cell className="p-3 w-1/6">{res.is_android_app}</Table.Cell>
                        <Table.Cell className="p-3 w-1/6">{res.is_ios_app}</Table.Cell>
                        <Table.Cell className="p-3 w-1/6">
                            <ButtonGroup>
                                <Button  onClick={()=>handleEdit(res.id)} className="bg-amber-200 border-2 rounded-lg text-white">Edit</Button>
                                <Button  onClick={()=>handleDelete(res.id)} className="bg-red-500 border-2 rounded-lg text-white ml-4">Delete</Button>
                            </ButtonGroup>
                        </Table.Cell>
                    </Table.Row>
                )})}
        </TableBody>
        </Table>
        </div>
        
        
       <div className='w-11/12 p-3 mx-auto my-8 text-sm'>
            <h1 className="font-bold text-xl">{editDataStatus.status ? "Create Data" : "Edit Data"}</h1>
        <form onSubmit={editDataStatus.status ? handleSubmitEdit : handleSubmit} value={editDataStatus.id}>
            <div className="my-10">
                Gambar data Game
                <hr/>
            </div>
            <b>Image_Url :</b>
            <div>
            <input onChange={handleInput} name="image_url" value={input.image_url}  className="block w-full rounded-md border-0 py-1.5 px-2 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-5" />  
            </div>
            <div className="my-10">
                Data Game
                <hr/>
            </div>            
            <b>Name :</b>
            <div>
            <input onChange={handleInput} name="name" value={input.name}  className="block w-full rounded-md border-0 py-1.5 px-2 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-5" />  
            </div>
            <b>Category :</b>
            <div>
            <input onChange={handleInput} name="category" value={input.category}  className="block w-full rounded-md border-0 py-1.5 px-2 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-5" />  
            </div>
            <b>Description :</b>
            <div>
            <input onChange={handleInput} name="description" value={input.description}  className="block w-full rounded-md border-0 py-1.5 px-2 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-5" />  
            </div>
            <b>Price :</b>
            <div>
            <input onChange={handleInput} name="price" value={input.price} min="0" type="number" className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-5" />  
            </div>
            <b>Rating  :</b>
            <div>
            <input onChange={handleInput} name="rating" value={input.rating} min="0" max="5" type="number" className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-5" />  
            </div>
            <b>Release Year :</b>
            <div>
            <input onChange={handleInput} name="release_year" value={input.release_year} min="1900" type="number" className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-5" />  
            </div>
            <b>Size :</b>
            <div>
            <input onChange={handleInput} name="size" value={input.size} min="0" type="number" className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-5" />  
            </div>
            <div className="my-10">
                Jenis Perangkat
                <hr/>
            </div>
            <b>Android ?</b>
            <div>
            <input onChange={handleInput} name="is_android_app" value={input.is_android_app} min="0" max="1" type="number" className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-5" />  
            </div>
            <b>IOS ? :</b>
            <div>
            <input onChange={handleInput} name="is_ios_app" value={input.is_ios_app} min="0" max="1" type="number" className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-5" />  
            </div>
            <button className='w-16 h-9 bg-indigo-600 border-2 rounded-lg text-white'>submit</button>
        </form>
        </div> 

        </>
    )

}

export default DataManage