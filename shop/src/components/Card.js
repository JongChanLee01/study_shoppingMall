import { 재고Context } from "../App";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

function Card(props) {
  const {shoes, i} = props; // 변수를 줄이는방법
  let 재고 = useContext(재고Context);
  let history = useHistory();

  console.log(재고);
    return(
      <div className='col-md-4'>
        {/* <a href={"/detail/" + i}> */}
          {/* <img src={"shoes" + (props.i+1) + ".jpg"} width="100%" alt={"shoes" + (props.i+1)} /> */}
          {/* 아래는 빽틱으로 해봄 */}
          <img src={`shoes${(props.i+1)}.jpg`} width="100%" alt={`shoes${(props.i+1)}`}
          onClick={()=>{
            history.push("/detail/"+i);
          }}
          />
        {/* </a> */}
        {/* 
          const {shoes, i} = props; 이거를 사용하려면 h4태그처럼 하면됨
        */}
        <h4>{shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}원</p>

        {재고[i]}
      </div>
    )
  }

  export default Card;