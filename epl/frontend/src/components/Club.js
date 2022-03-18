import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'


function Club({club}) {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/clubs/${club._id}`}>
          <Card.Img src={club.image} />
      </Link>
      <Card.Body>
          <Link to={`/clubs/${club._id}`}>
              <Card.Title as='div' className='text-center'>
                  <strong>{club.name}</strong>
            </Card.Title> 
          </Link>
        <Card.Text>
          <div className='text-center my-3'>
            <Rating value={club.rating} color={'#f8e825'} />
          </div>
        </Card.Text>
        <Card.Text as='h3' className='text-center'>
          {club.city}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Club
