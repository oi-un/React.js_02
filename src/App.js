import './App.css';
import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import bg from './bg.png';
import { useState } from 'react';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail.js';
import Item from './components/Item.js';
import About from './routes/About.js';
import Event from './routes/Event.js';

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link to='/' className='logo'>Yun's Store</Link>
          <Nav className="me-auto">
            <Link to='/about' className='menu'>About</Link>
            <Link to='/detail' className='menu'>Detail</Link>
            <Link to='/event' className='menu'>Event</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<>
          <div className='main-bg'></div>
            <Container>
            <Row>
              {
                data.map((item) => {
                  return <Item item={item} key={item.id}></Item>;
                })
              }
              </Row>
          </Container>
        </>}></Route>
        <Route path='/detail' element={ <Detail data={data}></Detail> }></Route>
        <Route path="/about" element={<About navigate={navigate} />}>
          <Route path='member' element={<div>member</div>}></Route>
          <Route path='location' element={<div>location</div>}></Route>
        </Route>
        <Route path='/event' element={<Event navigate={navigate} />}>
          <Route path='one' element={<>첫 주문시 양배추즙 서비스</>}></Route>
          <Route path='two' element={<>생일기념 쿠폰받기</>}></Route>
        </Route>
        <Route path='*' element={<h1>404페이지</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;

