import {Button, Container, Nav, Navbar, Row, Col, Fade} from 'react-bootstrap';
import { json, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../store';

function Detail(props){
  let {id} = useParams();
  let newId = parseInt(id);
  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState('');
  let dispatch = useDispatch();

  let data = props.data.find(function(item){
    return item.id == id;
  })

  let [time, setTime] = useState(true);

  useEffect(()=>{
    let alert = setTimeout(()=>setTime(false), 2000);
    return()=>{
      clearTimeout(alert);
    }
  },[])

  let [input, setInput] = useState('');
  useEffect(()=>{
    if(isNaN(input) == true){
      alert('문자안됨');
      setInput('');
    }
  }, [input]);

  useEffect(()=>{
    let detail = setTimeout(() => {
      setFade('end');
    }, 100);

    return () => {
      clearTimeout(detail);
      setFade('');
    }
  },[])

  useEffect(()=>{
    let local = JSON.parse(localStorage.getItem('watched'));
    if(local == null){
      localStorage.setItem('watched', '[]');
    }else if(local.length === 0){ // 비어있는 배열이면 현재 아이템을 추가한다.
      let item = {id: data.id, name: data.title}
      local.push(item);
      localStorage.setItem('watched', JSON.stringify(local));
    } else { // 비어있지 않다면 id값을 확인해서 추가한다.
      let index = local.findIndex((item)=>{return item.id === data.id});
      if(index === -1){
        let item = {id: data.id, name: data.title}
        local.unshift(item);
        localStorage.setItem('watched', JSON.stringify(local));
      }
    }
  }, [])

  return(<>
    <Container>
      <div className={`start ${fade}`}>
      {
        time === true ? 
        <div className='alert alert-warning'>
          2초 뒤에 사라지는 박스
        </div>
        : null
      }
      <Row>
        <Col>
          <img src={'https://codingapple1.github.io/shop/shoes'+ (newId + 1) +'.jpg'}></img>
        </Col>
        <Col>
          <div className='clear'>
            <h3 className='shoe-title'>{data.title}</h3>
            <p className='shoe-content'>{data.content}</p>
            <p className='shoe-price'>{data.price}원</p>
          </div>
          <div>
            <input onChange={(e)=>setInput(e.target.value)} value={input} />
          </div>
          <div className='button'>
            <Button variant="danger">구매하기</Button>
            <Button variant="warning" onClick={()=>{dispatch(addCart(data))}}>장바구니</Button>
          </div>
        </Col>
      </Row>

      <div className='tab-container'>
        <ul className='tab-menu'>
          <li className={tab===0 && 'active'} onClick={()=>{setTab(0)}}><a>menu 1</a></li>
          <li className={tab===1 && 'active'} onClick={()=>{setTab(1)}}><a>menu 2</a></li>
          <li className={tab===2 && 'active'} onClick={()=>{setTab(2)}}><a>menu 3</a></li>
        </ul>
          <TabContent tab={tab}></TabContent>
      </div>
      </div>
      
    </Container>
    </>)
}

function TabContent(props){
  let tab = props.tab;

  let [fade, setFade] = useState('');
  useEffect(()=>{
    let a = setTimeout(()=>{setFade('end')},100);
    return()=>{
      clearTimeout(a);
      setFade('');
    }
  }, [tab])

  return(
    <div className={`start ${fade}`}>
      {[<div className="tab-content">menu 1 컨텐트임~</div>, <div className="tab-content">menu 2 컨텐트임~</div>, <div className="tab-content">menu 3 컨텐트임~</div>][tab]}
    </div>
  )
}

export default Detail;