import React, { useEffect, useState } from 'react'
import User from './User'
import axios from 'axios'

export default function Users({users}) {
   const [posts,setPosts]=useState([])
   const [filterPosts,setfilterPosts]=useState([])
    useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/posts").
            then((response)=>{setPosts(response.data)}).catch((error)=>console.log(error));
            
            
        })
    const ShowPosts=(id)=>{
        setfilterPosts(posts.filter((p,i)=>p.userId===id));
    }
        

  return (
    <div className='users'>
        <h1>Nombre d'utilisateurs: {users.length} </h1>
        {users && 
           users.map((u)=>{
           return(
            <User user={u} ShowPosts={ShowPosts} posts={filterPosts}/>
           )
           })
        }
   
    </div>
  )
}

