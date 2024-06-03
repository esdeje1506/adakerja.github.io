import React, { useEffect, useState }  from "react";
import CardSection from "./card_section";
import axios from 'axios';
import { parse } from "postcss";

const ContentSection = () =>{

    const linkDataApi = "http://localhost:5000/mobile-apps"
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

    const handleGameSize = (gameSz) =>{
        let szDevide = gameSz/1000
        if(gameSz > 499)return szDevide % 1 === 0 ? szDevide + ' GB' : szDevide.toFixed(1) + ' GB'    
        else return gameSz + ' MB'  
    
    }

    const handleGameOs = (platfrm)=>{      
        if(platfrm.is_android_app === 1 && platfrm.is_ios_app === 0) return 'Android'
        else if(platfrm.is_android_app === 0 && platfrm.is_ios_app === 1) return 'Ios'
        else if(platfrm.is_android_app === 1 && platfrm.is_ios_app === 1) return 'AndroidAndroid & Ios'        
    }

    return(
    <>            
        <section className="bg-gray-200 p-5">
            <div className="container mx-auto mt-10">
                <h1 className="text-xl font-bold ">Find your data that you need!</h1>
            </div>
            <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
            {data !== null && data.map((res) => {            
                
           return (
                <CardSection 
                img_src={res.image_url}
                name= {res.name}
                year= {res.release_year}
                description= {res.description}
                category= {res.category}
                size= {handleGameSize(res.size)}
                price= {res.price>0 ? 'Rp. '+res.price.toLocaleString('id-ID') : 'Free'}
                rate= {res.rating}
                os = {handleGameOs(res)}
                />
           )})}
            </div>
        </section>
    </>
    )
}

export default ContentSection