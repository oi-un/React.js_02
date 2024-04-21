import { useState } from "react";
import { Container, Table  } from "react-bootstrap";

export default function Cart() {

  ;

  return(<>
    <Container>
    <div className='page-title'>
      <h3>장바구니</h3>
    </div>

    <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>

        <tr>
          <td>3</td>
          <td colSpan={2}>총액</td>
          <td>100만원</td>
        </tr>
      </tbody>
    </Table>
    </Container>
  </>)
}