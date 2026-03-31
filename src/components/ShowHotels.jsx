import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import CardHotelAmenities from "./CardHotelAmenities";

const ShowHotels = ({ hotelsData }) => {
  return (
    <>
      
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Hotel name</th>
            <th>City</th>
            <th>Country</th>
            <th>Address</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {hotelsData.map((currHotel, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{currHotel.name}</td>
              <td>{currHotel.city}</td>
              <td>{currHotel.country}</td>
              <td>{currHotel.address || "N/A"}</td>
              <td>{currHotel.rating || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {hotelsData.map((currHotel, index) =>
          currHotel.amenities?.map((amenity, idx) => (
            <CardHotelAmenities
              key={`${index}-${idx}`}
              title={amenity.toUpperCase()}
              content={amenity}
            />
          ))
        )}
      </div>
    </>
  );
};

export default ShowHotels;