import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom";

// npm install styled-components
import styled from "styled-components";

import "../Details.scss";
import { useState, useEffect } from "react";

let DIV = styled.div`
  padding:20px;
  padding-top: 0;
  border:1px solid blue;
  background:${(props)=>props.color};
`
let BOX = styled.div`
  padding:20px;
`

let TITLE_HEAD = styled.h4`
  fint-size:25px;
  color:${(props)=>props.색상}
`

const Details = (props) => {
    let history = useHistory();

    // parameter
    // useParams()
    // cconsole.log(useParams())
    // (id: 2)
    // id = useParams().id
    // id=2
    // {id} = useParams();
    // id=2
    let {id} = useParams(); // {id:2}

    console.log(props.shoes)

    let find_goods = props.shoes.find((goods)=> goods.id === parseInt(id));

    let [alert, setAlert] =useState(true);
    let [inputData, setInputData] = useState("");

    useEffect(()=>{
      let Timer = setTimeout(()=>{
        setAlert(false);
        console.log(alert);
      }, 3000);
      return ()=>{clearTimeout(Timer)} // 이렇게 해주어야 한번만 뜸
    },[alert]) // alert가 변경될때마다 실행

    useEffect(()=>{
      console.log("업데이트중...");
    },[inputData]) // inputData가 변경될때마다 실행


    let 재고화면 = (
      <div className="my-alert2">
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>
    )

    console.log(find_goods.id);
    return (
        <div className='container'>
          <BOX>
            <TITLE_HEAD 색상={"blue"} className="blue">
              Detail(상세페이지)
            </TITLE_HEAD>
          </BOX>
          <input onChange={(e)=>{setInputData(e.target.value)}}/>
          {
            alert === true ? 재고화면 : null // ; 쓰면 안됨
          }
          
          <div className='row'>
            <div className='col-md-6'>
              <img src={`/shoes${find_goods.id+1}.jpg`} width="100%" alt='shoes1'/>
            </div>

            <DIV color ="snow">
              <div className="col-md-6 md-4">
                <h4 className='pt-1'>{find_goods.title}</h4>
                <p>{find_goods.content}</p>
                <p>{find_goods.price}</p>
                <hr/>
                <button className='btn btn-primary'>주문하기</button>
                <button
                  className="btn btn-danger"
                  onClick={()=>{
                    history.goBack();
                  }}
                >뒤로가기
                </button>
                <button
                  className="btn btn-info"
                  onClick={()=>{
                    history.push("/");
                    history.go();
                  }}
                >홈으로가기
                </button>
              </div>
            </DIV>
            </div>
          </div>
    )
}

export default Details;