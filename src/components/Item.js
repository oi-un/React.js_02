import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

function Item(props){
  let item = props.item;
  return(
    <div className='col-sm-3 col-lg-4'>
      <a onClick={()=>props.navigate('/detail/'+item.id)}>
        <img src={'https://codingapple1.github.io/shop/shoes'+ (item.id + 1) +'.jpg'} width="80%" />
        <h4>{item.title}</h4>
        <p>{item.price}</p>
      </a>  
    </div> 
  )
}

export default Item;