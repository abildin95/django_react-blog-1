import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import Rating from '../components/Rating';
// import clubs from '../clubs';
import axios from 'axios'


function ClubScreen() {

    const params = useParams()

    const [ club, setClub ] = useState([])

    useEffect(() => {
        
      async function fetchClub(){
        const {data} = await axios.get(`/api/clubs/${params.id}`)
        setClub(data)
      }
  
      fetchClub()
  
    }, [])

  return (
    <div>
      <Link to='/' className='btn btn-dark my-3'>Go Back</Link>
      <Row>
          <Col md={7}>
              <Image src={club.image} />
          </Col>
          <Col md={4}>
              <ListGroup>
                  <ListGroup.Item className='text-center'>
                        <h3>{club.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item className='text-center'>
                    <Rating value={club.rating} color={'#f8e825'} />  
                  </ListGroup.Item>
                  <ListGroup.Item>
                      Founded: {club.founded} years
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Ground: {club.stadion} ({club.city}, {club.country})
                  </ListGroup.Item>
                  <ListGroup.Item>
                      Coach: {club.Coach}
                  </ListGroup.Item>
                  <ListGroup.Item>
                      {club.description}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    WebSait : <a href={club.webSait} target='_blank'>{club.name} Official page</a>
                  </ListGroup.Item>
              </ListGroup>
          </Col>
          <Col md={3}></Col>
      </Row>
    </div>
  )
}

export default ClubScreen
