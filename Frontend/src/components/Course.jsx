import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Course() {
 
    const [book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try{
                const res=await axios.get('http://localhost:4001/book')
                console.log(res.data)
                setBook(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        getBook()
    },[])
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div  className='flex flex-col gap-5 items-center justify-center py-10 mt-11 z-10'>

                <h1 className='text-2xl font-semibold md:text-4xl'>We are glad to have you <span className='text-pink-600'>here</span></h1>
                <p>"Welcome to our course catalog, where you can explore a wide range of courses to enhance your skills and knowledge. Browse through our collection of courses, and discover the perfect fit for your learning needs."</p>
                <Link to='/'>
                <button className="btn btn-secondary">Back</button>
                </Link>
                
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-3  overflow-hidden z-50'>
                {
                    book.map((item)=>{
                        return <Cards item={item} key={item.id}/>
                    })
                }
            </div>
        </div>

    </>
  );
}

export default Course;
