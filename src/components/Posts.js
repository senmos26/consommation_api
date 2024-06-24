import React from 'react'
import Post from './Post'
import "./posts.css"

export default function Posts({posts}) {
  return (
    <div className='posts'>
        {
            posts.map((p,i)=>{
                return(
                    <Post post={p}/>
                )
            })
        }
    </div>
  )
}
