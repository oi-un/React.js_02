import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';

function Item(props){
  let item = props.item;
  return(
    <Col>
      <a>
        <img src={'https://codingapple1.github.io/shop/shoes'+ (item.id + 1) +'.jpg'} width="80%" />
        <h4>{item.title}</h4>
        <p>{item.price}</p>
      </a>  
    </Col> 
  )
}

export default Item;