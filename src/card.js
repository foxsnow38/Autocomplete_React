import React from 'react'

function Card({item}) {
  return (
    <div style={{width:`500px`,display:"flex",flexDirection:"column",border:"2px solid #000",borderRadius:'20px'}}>
    <div style={{marginLeft:'10px'}}>
    <h4>NAME :  {item.name}</h4>
    <h5>EMAIL : {item.email}</h5>
    <h5>DESC : {item.body}</h5>
    <h6 style={{display:"inline-block",margin:`10px`,marginLeft:"80%"}}>id:{item.id}</h6>
    </div>

    </div>
  )
}

export default Card