import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

function Detail(props){
  let {id} = useParams();
  let newId = parseInt(id);

  let data = props.data.find(function(item){
    return item.id == id;
  })

  let [time, setTime] = useState(true);
  let [count, setCount] = useState(0);

  useEffect(()=>{
    let alert = setTimeout(()=>setTime(false), 2000);
    return()=>{
      //useEffect 동작 전에 실행되는 clean up function
      //기존 타이머 제거 등 기존 코드 제거에 쓰임
      clearTimeout(alert);
    }
  })

  let [input, setInput] = useState();
  useEffect(()=>{
    if(isNaN(input) == true){
      alert('문자안됨');
      setInput('');
    }
  }, [input])

  return(<>
    <Container>
      {
        time == true ? 
        <div className='alert alert-warning'>
          2초 뒤에 사라지는 박스
        </div>
        : null
      }
      <button onClick={()=>setCount(count+1)}>+</button>{count}
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
            <Button variant="warning">장바구니</Button>
          </div>
        </Col>
      </Row>
    </Container>
    </>)
}

export default Detail;