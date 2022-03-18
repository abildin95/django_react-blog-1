import React, { useState, useEffect } from 'react'
// import clubs from '../clubs'
import { Row, Col } from 'react-bootstrap'
import Club from '../components/Club'
import axios from 'axios'

function HomeScreen() {

  const [ clubs, setClubs ] = useState([])

  useEffect(() => {
      
    async function fetchClubs() {

      const { data } = await axios.get('/api/clubs/')
      setClubs(data)
      
    }

    fetchClubs()

  }, [])

  return (
    <div>
      <h1>Clubs of League</h1>
      <Row>
          {clubs.map(club => (
              <Col key={club._id} sm={12} md={6} lg={4} xl={3}>
                <Club club={club} />
              </Col>
          ))}
      </Row>
    </div>
  )
}

export default HomeScreen
