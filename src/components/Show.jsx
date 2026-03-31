import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
const Show = ({data}) => {
  const navigate=useNavigate();  
  const fetchHotelsInSpecificCountry = async (countryName) => {
             
          try{
              const response=await fetch(`https://api.hotels-api.com/v1/hotels/search?country=${countryName}`,{
                   method:"GET",
                   headers:{
                      'X-API-KEY':'aca173e2dc3a0bbe3a819201964b91580dcc94c88e39fbf86192f8728f2f7778'
                   }
              });
              const responseData=await response.json();
              if(response.status!==429){
                   navigate('/showHotels',{state:responseData.data});
              }
          }catch(err){
               
              console.error(err);
          }
    }
  return (
    
    <>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Number</th>
          <th>Code</th>
          <th>Country name</th>
          <th>Capital city</th>
          <th>Country code </th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((currCountry,index)=>{
                return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{currCountry.code}</td>
                        <td onClick={async (e)=>await fetchHotelsInSpecificCountry(e.target.innerText)}>{currCountry.name}</td>
                        <td>{currCountry.capitalCity}</td>
                        <td>{currCountry.currencyCode}</td>
                    </tr>
                )
            })
        }
      </tbody>
    </Table> 
    </>
  )
}

export default Show
