import React from 'react'
import { Table, Row, Col } from 'react-bootstrap';


function Top() {
  return (
    <div>
    <Row>
      <Col md={7}>
        <h2 className='text-center'>Tournament Table</h2>
        <Table>
          <thead className='text-center'>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>Games</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            <tr>
              <td>1</td>
              <td>Manchester City</td>
              <td>29</td>
              <td>80</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Liverpool</td>
              <td>29</td>
              <td>79</td>
            </tr>
          </tbody>
        </Table>
      </Col>

      <Col md={5}>
        <h2 className='text-center'>Top Strikers</h2>
        <Table striped bordered hover size="sm">
          <thead className='text-center'>
            <tr>
              <th>#</th>
              <th>Player</th>
              <th>Games</th>
              <th>Goals</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            <tr>
              <td>1</td>
              <td>Mohhamed Salah</td>
              <td>25</td>
              <td>20</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Cristiano Ronaldo</td>
              <td>22</td>
              <td>12</td>
            </tr>
          </tbody>
          </Table>
      </Col>
    </Row>
    </div>
  )
}

export default Top
