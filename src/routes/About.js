import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

function About(props){
  return(<>
    <Container>
      <div className='page-title'>
        <h3>About</h3>
        <div className="page-button">
          <Button onClick={()=>{props.navigate('/about/member')}}>member</Button>
          <Button onClick={()=>{props.navigate('/about/location')}}>location</Button>
        </div>
      </div>
      <Outlet/>
    </Container>
  </>)
}

export default About;