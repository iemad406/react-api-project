import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const CardHotelAmenities = ({title,content}) => {
  return (
    <>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
               {content}
            </Card.Text>
        </Card.Body>
    </Card>
    </>
  )
}

export default CardHotelAmenities
