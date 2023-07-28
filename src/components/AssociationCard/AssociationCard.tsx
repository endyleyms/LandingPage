import Card from 'react-bootstrap/Card';

const AssociationCard = (props: { CardTitle: string, description: string }) => {
  const { CardTitle = '', description = '' } = props
  return (
    <Card style={{ width: '90%', height: '80%', }}>
      <Card.Img variant="top" src={CardTitle} style={{ width: '80%', height: '40%', padding: '20px' }} />
      <Card.Body>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default AssociationCard
