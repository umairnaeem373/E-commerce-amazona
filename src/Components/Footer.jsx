import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

function Footer() {
  const date = new Date()
  return (
   <>
   <footer>
    <Container>
        <Row>
            <Col className='text-center py-3'>Copyright &copy; {date.getFullYear()}  Umair's Shop</Col>
        </Row>
    </Container>
   </footer>
   </>
  )
}

export default Footer