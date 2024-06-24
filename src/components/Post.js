import React from 'react'

export default function Post({post}) {
  return (
    <div style={{border:"1px solid red"}}>
        <p>{post.id}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
    </div>
  )
}
