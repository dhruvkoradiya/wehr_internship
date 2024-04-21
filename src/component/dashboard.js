import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PieChart from './charts/piechart';
import Sales from './charts/sales'
import Bar from  './charts/barchart'
import People from './charts/people'


function dashboard() {
  return (
    <div>
      <Row className='tab-style'>
        <Col><h1>Available jobs</h1> <h2>120</h2> </Col>
        <Col><h1>New employees</h1> <h2>10</h2></Col>
        <Col><h1>Total employees</h1><h2>2500</h2></Col>
        <Col><h1>Talent Request</h1> <h2>250</h2></Col>
      </Row>
      <PieChart/>
      <Sales/>
      <Bar/>
      <People/>

</div>
    
  )
}

export default dashboard
