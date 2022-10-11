import { useState} from 'react';
import './cssrr.css';
import {Col ,Container,Row,Button} from 'react-bootstrap'

function Ranking({product}){
  let [name] = useState(['사진','사용자이름','설명']);
  let [modal, setModal] = useState(false);


  return(
    <div> 
        {
          product.map(function(a,i){
            return(
            <Col>
              <div>
                <img src={"./img/mnb"+ (i+1) + ".png"} width="20%"/>
                <div>{product[i].title}</div>
              </div>
            </Col>
            )
          })
        }
    </div>
  );
   
}

function Modal(){
    return(
      <div className='modal'>
        <h4>외장하드 보호 케이스</h4>
        <h4>별점</h4>
        <h4>사용자이름</h4>
        <h4>제작년도</h4>
      </div>
    );
  }


export default Ranking;
