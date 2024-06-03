import React from "react";

const CardSection = (prop) =>{
    
    return(
        <>
        <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={prop.img_src} className="w-1/3 bg-cover bg-center bg-landscape" />
            <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                {prop.name}
                </h1>
                <small>{prop.year}</small>
                <p className="mt-2 text-gray-600 text-sm">
                {prop.description}
                </p>
                <div className=" item-center mt-2 text-gray-500">
                    <span>{prop.category}</span>
                    <span>, {prop.size}</span>
                    <span>, {prop.os}</span>
                </div>
                <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-700 font-bold text-xl">
                    {prop.price}
                    </h1>
                    <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                    {prop.rate} Ratings
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardSection