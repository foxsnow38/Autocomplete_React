
import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const data = [
    {
      id:1,
      title:"test1"
    },
    {
      id:2,
      title:"Test1"
    },  
    {
      id:3,
      title:"deneme1"
    },

    {
      id:4,
      title:"Deneme1"
    }

  ]
  const [search, setSearch] = useState(``)
  const [result, setResult] = useState([])
  const searchRef = useRef()
  const isTyping = search.length>0
useEffect(() => {
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
    if(isTyping) {
setResult(data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())))}
else{ setResult([])}
  },[search])
  return (
    <>
      <div className="search" ref={searchRef}>
        <input type="text"  className={isTyping  ? 'typing' : null} onChange={(e) => setSearch(e.target.value)} placeholder="Birseyler Yaz.." />
    
      <div className="search-result">
{result.length>0 && isTyping &&
  result.map( item => 
    <div  key={item.id} className="search-result-item"> {item.title} </div>
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
