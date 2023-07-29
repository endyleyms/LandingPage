import './AssociationCard.css'
import Card from 'react-bootstrap/Card';

const AssociationCard = (props: { CardImg: string, description: string }) => {
  const { CardImg = '', description = '' } = props
  return (
    <Card className='card--association-container'>
      <Card.Img variant="top" src={CardImg} className='card-img-container' />
      <Card.Body>
        <Card.Text className='card-text'>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default AssociationCard
