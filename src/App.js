
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

const [data,setData]=useState(`null`)
  const [search, setSearch] = useState(``)
  const [result, setResult] = useState([])
  const searchRef = useRef()
  const isTyping = search.length>0
useEffect(() => {
(async ()=>{
  const  axi= await  axios(`https://jsonplaceholder.typicode.com/comments`)
  setData(axi.data)
  
})()
 
  document.addEventListener("mousedown",handleClickOutside)
  return document.removeEventListener("mousedown",handleClickOutside)
   }


, [])
const handleClickOutside = (e) => {

  if (searchRef.current && !searchRef.current.contains(e.target)){
    setSearch("")
  

  }
 }

  useEffect(() => {
    if(isTyping && data!=null ) {
setResult(data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())))}
else{ setResult([])}
  },[search])
  return (
    <>
      <div className="search" ref={searchRef}>
        <input type="text"  className={isTyping  ? 'typing' : null} onChange={(e) => setSearch(e.target.value)} placeholder="Birseyler Yaz.." />
    
      <div className="search-result">
{result.length>0 && isTyping &&
  result.map( item => 
    <div  key={item.id} className="search-result-item"> {item.name} </div>
  )
}

  {result.length === 0 && isTyping && (
    <div className="result-not-found" >
      {search} ile alakali birsey bulunamadi !!
    </div>
    )}

      </div>
      </div>  
    </>


  );
}

export default App;
