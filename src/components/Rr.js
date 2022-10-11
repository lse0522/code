import { useEffect, useState} from 'react';
import {Col ,Container,Row,Button} from 'react-bootstrap'
import { BsFillAlarmFill } from "react-icons/bs";



const ARRAY = [0, 1, 2, 3, 4];


function Rr({product}){
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
  };
  return(
    <div>

<Container>
      <Row>
        {
          product.map(function(a,i){
            return(
            <Col>
              <div>
                <div>{product[i].title}</div>
              <div className='stars'>

        {ARRAY.map((el, idx) => {
          return (
            <BsFillAlarmFill
              key={idx}
              size="50"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'yellowStar'}
            />
          );
        })}
              </div>

                <h4>{product[0].star}</h4>
                <h4>{product[0].num}</h4>
                <img src={"./img/mnb"+ (i+1) + ".png"} width="20%"/>
                <button><h4>OPEN</h4></button>
              </div>
            </Col>
            )
          })
        }
      </Row>
      </Container>

       

    </div>
  );
   
}


export default Rr;
