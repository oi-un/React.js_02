import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';

function Detail(props){
  let data = props.data[0];
  return(<>
    <Container>
      <Row>
        <Col>
          <img src='https://codingapple1.github.io/shop/shoes1.jpg'></img>
        </Col>
        <Col>
          <div className='clear'>
            <h3 className='shoe-title'>{data.title}</h3>
            <p className='shoe-content'>{data.content}</p>
            <p className='shoe-price'>{data.price}원</p>
          </div>
          <div className='button'>
            <Button variant="danger">구매하기</Button>
            <Button variant="warning">장바구니</Button>
          </div>
        </Col>
      </Row>
    </Container>
    </>)
}

export default Detail;