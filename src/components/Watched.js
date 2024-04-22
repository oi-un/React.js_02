import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Watched() {

  let watched = JSON.parse(localStorage.getItem('watched'));

  return(<>
    <Container>
      {watched == null ? null : <div className="watched">
        <h5>최근 본 상품</h5>
        <div className="watched-container">
          {watched.map((item)=>{return(
            <div className="watched-item" key={item.id}>
              <img src={`https://codingapple1.github.io/shop/shoes${item.id+1}.jpg`} width="80%" />
              <h6>{item.name}</h6>
            </div>
          )})}
        </div>
      </div>}
      
    </Container>
  </>)
}