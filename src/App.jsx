import { useEffect,useState } from "react"
import Show from "./components/Show";
import { Routes,Route } from "react-router-dom";
import Hotes from "./components/Hotes";
function App() {
  const [contries,setContries]=useState([]);
  const [errorMessage,setErroeMessagr]=useState("");
  useEffect(()=>{
      const fetchContries=async ()=>{
          try{
              const response=await fetch("https://geoapi.info/api/countries?offset=40");
              const data=await response.json();
              if(response.status!==429){
                   setContries(data.countries)
                  
              }
          }catch(err){
               setErroeMessagr(err);
              console.error(err);
          }
      }
      fetchContries();
  },[])
  return (
    <>
     

     <Routes>
        <Route path="/" element={contries.length>0 ? <Show data={contries}/> : errorMessage} />
        <Route path='/showHotels' element={<Hotes />}/>
     </Routes>
    </>
  )
}
export default App
