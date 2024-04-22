import './App.css';
import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Detail from './routes/Detail.js';
import Item from './components/Item.js';
import About from './routes/About.js';
import Event from './routes/Event.js';
import axios from 'axios';
import Cart from './routes/Cart.js';
import Watched from './components/Watched.js';
import { useQuery } from 'react-query';

function App() {

  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);
  let [showBtn, setShowBtn] = useState(0);
  let [loadImg, setLoadImg] = useState(false);

  function moreShoes(){
    let URL;
    if(showBtn == 0){
      setShowBtn(showBtn+1);
      URL = 'https://codingapple1.github.io/shop/data2.json';
      getAjax(URL)
    } else if(showBtn == 1){
      setShowBtn(showBtn+1);
      URL = 'https://codingapple1.github.io/shop/data3.json';
      getAjax(URL)
    }
  }
  function getAjax(URL){
    setLoadImg(true);

    axios.get(URL).then((result)=>{
      let copy = [...shoes, ...result.data];
      setShoes(copy);
      setLoadImg(false);
    })
    .catch(()=> {
      alert('서버요청 실패');
      setLoadImg(false);
    });
    
  }

  let result = useQuery('작명', ()=>{
    return axios.get('https://codingapple1.github.io/userdata.json')
    .then((res)=>{return res.data})
  });

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link to='/' className='logo'>Yun's Store</Link>
          <Nav className="me-auto">
            <Link to='/about' className='menu'>About</Link> 
            <Link to='/event' className='menu'>Event</Link>
            <Link to='/cart' className='menu'>Cart</Link>
          </Nav>
          <Nav className='ms-auto'>
            {result.isLoading ? '로딩중' : result.data.name}
          </Nav>
        </Container>
      </Navbar>
      <Watched></Watched>  

      <Routes>
        <Route path='/' element={<>
          <div className='main-bg'></div>
            <Container>
              <div className='row'>
                {shoes.map((item) => {
                    return <Item navigate={navigate} item={item} key={item.id}></Item>;
                })}
              </div>

              {showBtn < 2 ? <Button onClick={moreShoes}>더보기</Button> : null}
              {loadImg === true ? <p>로딩중입니다.</p> : null}
              
            </Container>
        </>}></Route>
        <Route path='/detail/:id' element={<Detail data={shoes}></Detail>}></Route>
        <Route path="/about" element={<About navigate={navigate} />}>
          <Route path='member' element={<div>member</div>}></Route>
          <Route path='location' element={<div>location</div>}></Route>
        </Route>
        <Route path='/event' element={<Event navigate={navigate} />}>
          <Route path='one' element={<>첫 주문시 양배추즙 서비스</>}></Route>
          <Route path='two' element={<>생일기념 쿠폰받기</>}></Route>
        </Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='*' element={<h1>404페이지</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;

