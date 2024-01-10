import React, { useEffect, useState } from "react";

function Github()
{   const[data , setData] = useState([]);
     useEffect(
        ()=>
        {
            fetch('https://api.github.com/users/sandeeprathore302007')
            .then(Response => Response.json())
            .then(
                (data)=>
                {
                    console.log(data);
                    setData(data);
                    
                }
            )
        },[])

     
    return (
         <div className="text-center m-5 bg-gray-600 text-white text-lg">Github Followers : {data.followers} 
          <img src={data.avatar_url} alt="gihub profile" width={250}  ></img></div>
        

    )
}
export default Github ;

// export const  githubInfoFolder = async()=>
// {
    
//     const response =  await fetch('https://api.github.com/users/sandeeprathore302007')
//     return response.json()
// }