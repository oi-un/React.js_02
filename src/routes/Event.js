import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

function Event(props){
  return(<>
  <Container>
      <div className='page-title'>
        <h3>Event</h3>
        <div className="page-button">
          <Button onClick={()=>{props.navigate('/event/one')}}>one</Button>
          <Button onClick={()=>{props.navigate('/event/two')}}>two</Button>
        </div>
      </div>
      <Outlet/>
    </Container>
  </>)
}

export default Event;