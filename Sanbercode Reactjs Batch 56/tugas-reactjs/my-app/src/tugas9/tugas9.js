import React from "react"
import { Button, ButtonGroup, Table } from 'flowbite-react';

const Tugas9 = ()=>{
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
        <Table.Body className=''>
          <Table.Row className="border-b">
            <Table.Cell className="p-3 font-bold">1</Table.Cell>
            <Table.Cell className="p-3">John</Table.Cell>
            <Table.Cell className="p-3">Algoritma</Table.Cell>
            <Table.Cell className="p-3">80</Table.Cell>
            <Table.Cell className="p-3">A</Table.Cell>
            <Table.Cell className="p-3 font-bold">
              <ButtonGroup>
                <Button className="border-2 rounded-lg text-gray">Edit</Button>
                <Button className="bg-red-500 border-2 rounded-lg text-white ml-4">Delete</Button>
              </ButtonGroup>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="border-b">
            <Table.Cell className="p-3 font-bold">2</Table.Cell>
            <Table.Cell className="p-3">Doe</Table.Cell>
            <Table.Cell className="p-3">Matematika</Table.Cell>
            <Table.Cell className="p-3">70</Table.Cell>
            <Table.Cell className="p-3">B</Table.Cell>
            <Table.Cell className="p-3 font-bold">
              <ButtonGroup>
                <Button className="border-2 rounded-lg text-gray">Edit</Button>
                <Button className="bg-red-500 border-2 rounded-lg text-white ml-4">Delete</Button>
              </ButtonGroup>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="border-b">
            <Table.Cell className="p-3 font-bold">3</Table.Cell>
            <Table.Cell className="p-3">Frank</Table.Cell>
            <Table.Cell className="p-3">Kalkulus</Table.Cell>
            <Table.Cell className="p-3">60</Table.Cell>
            <Table.Cell className="p-3">C</Table.Cell>
            <Table.Cell className="p-3 font-bold">
              <ButtonGroup>
                <Button className="border-2 rounded-lg text-gray">Edit</Button>
                <Button className="bg-red-500 border-2 rounded-lg text-white ml-4">Delete</Button>
              </ButtonGroup>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="border-b">
            <Table.Cell className="p-3 font-bold">4</Table.Cell>
            <Table.Cell className="p-3">Jason</Table.Cell>
            <Table.Cell className="p-3">Basis Data</Table.Cell>
            <Table.Cell className="p-3">90</Table.Cell>
            <Table.Cell className="p-3">A</Table.Cell>
            <Table.Cell className="p-3 font-bold">
              <ButtonGroup>
              <Button className="border-2 rounded-lg text-gray">Edit</Button>
              <Button className="bg-red-500 border-2 rounded-lg text-white ml-4">Delete</Button>
              </ButtonGroup>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      
        </div>
        
        </>
  );
}

export default Tugas9