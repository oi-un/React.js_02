import { Container, Table  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, removeItem } from "../store";
import { memo, useState } from "react";

let Child = memo(function(){
  return <div>자식임</div>
})

export default function Cart() {

  let cart = useSelector((state)=> state.cart);
  let user = useSelector((state)=> state.user);
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);

  return(<>
    <Container>
      <Child></Child>
      <button onClick={()=>{setCount(count+1)}}>+</button>
    <div className='page-title'>
      <h3>{user.name}의 장바구니</h3>
    </div>

    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
          <th>삭제하기</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, i)=>{
          return(
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td><button onClick={()=>{
                dispatch(addCount(item.id))
              }}>+</button></td>
              <td><button onClick={()=>{dispatch(removeItem(item))}}
              >삭제</button></td>
            </tr>
          )
        })}
        <tr>
          <td colSpan={2}>총액</td>
          <td colSpan={2}>100만원</td>
        </tr>
      </tbody>
    </Table>
    </Container>
  </>)
}