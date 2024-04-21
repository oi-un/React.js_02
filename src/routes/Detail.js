import {Button, Container, Nav, Navbar, Row, Col, Fade} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
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

  return(<>
    <Container>
      <div className={`start ${fade}`}>
      {
        time == true ? 
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
          <li className={tab==0 && 'active'} onClick={()=>{setTab(0)}}><a>menu 1</a></li>
          <li className={tab==1 && 'active'} onClick={()=>{setTab(1)}}><a>menu 2</a></li>
          <li className={tab==2 && 'active'} onClick={()=>{setTab(2)}}><a>menu 3</a></li>
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

  // if( tab === 0){
  //   return <div className="tab-content">menu 1 컨텐트임~</div>
  // } else if(tab === 1){
  //   return <div className="tab-content">menu 2 컨텐트임~</div>
  // } else {
  //   return <div className="tab-content">menu 3 컨텐트임~</div>
  // }

  return(
    <div className={`start ${fade}`}>
      {[<div className="tab-content">menu 1 컨텐트임~</div>, <div className="tab-content">menu 2 컨텐트임~</div>, <div className="tab-content">menu 3 컨텐트임~</div>][tab]}
    </div>
  )
}

export default Detail;