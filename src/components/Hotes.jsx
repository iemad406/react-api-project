import { useLocation } from "react-router-dom";
import ShowHotels from "./ShowHotels";
const Hotes = () => {
  const location=useLocation();
  const hotels=location.state;  
  return (
     <>
       {
          hotels.length===0 ? <div
            style={{
                backgroundColor: "#ffe6e6",
                color: "#cc0000",
                padding: "15px",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "20px",
                border: "1px solid #ff4d4d"
            }}
        >
        There is no available data supported from this API
        </div> :<ShowHotels hotelsData={hotels} />
       }
     </>
  )
}

export default Hotes
