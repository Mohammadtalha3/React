import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";



function Github(){

    const data = useLoaderData()
//     const [data, setdata]= useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/Mohammadtalha3')
//         .then(response=> response.json())
//         .then(data=>{

//             console.log(data)
//             setdata(data)

//         })

//     },[]);


    
    
    return(
        <div className="bg-gray-600 text-white m-4 p-4 text-center text-3xl">
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture " width={200} />
            Username: {data.name}
        </div>
    )
}

export default  Github;

export const githubInfoloader= async ()=>{
    const response = await fetch('https://api.github.com/users/Mohammadtalha3')
    return response.json()
}


