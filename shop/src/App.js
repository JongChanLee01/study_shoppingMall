import './App.css';
import React from 'react';
import { useState, useContext } from 'react';

// 경로가 없는것은 라이브러리
// 경로가 있는것은 컴포넌트
// import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar.js';
import Data from './components/Data.js';
// import Card from './components/Card.js';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import Details from './components/Details.js';
import { Switch } from 'react-router-dom';
// import axios from 'axios';

export const 재고Context = React.createContext();

function App() {
  // Data파일에 객체 배열 데이터들을 받아와서 shoes에 저장
  let [shoes, setShoes]  = useState(Data);
  // let getUrl = "https://codingapple1.github.io/shop/data2.json";
  // let [show, setShow] = useState(false);
  let [재고, 재고변경] = useState([10,11,12,5,3,2,1,2]);

  // const loading=()=>{
  //   return(
  //     <div>
  //       <h2>loading.....</h2>
  //     </div>
  //   )
  // }
  // const loading2 = (<div>로딩중.....</div>);

  // const getData=()=>{
  //     axios
  //     .get(getUrl)
  //     .then((result)=>{
  //         // console.log(result.data);
  //         setShow(true);
  //         setShoes([...shoes, ...result.data])
  //         setTimeout(()=>{
  //           setShow(false);
  //         },1000);
  //     })
  //     .catch(()=>{
  //         console.log("접속실패....");
  //         setShow(true);
  //     });
  // }

  return (
    <div className="App">
      <NavBar />
      
      <Switch>
        <Route path="/" exact>
          <재고Context.Provider value={재고}>
            <Home shoes={shoes} setShoes={setShoes} />
          </재고Context.Provider>
          {/* show가 true면 로딩 아니면 null */}
          {/* {show ? loading() : null} 
          {show ? loading2 : null} 

          <button className="btn btn-primary"onClick={getData}>
          더보기(axios)
          </button> */}
        </Route>
        {/* 
          라우터를 이용하여 한 파일에서 페이지를 나누어서 띄울 수 있음
          <Route path="/" exact>
          "/"는 기본경로
          exact는 path속성에 넣은 경로값이 정확히 URL의 경로값과 일치
          할때만 렌더링이 되도록 도와줌

          * 렌더링 : 코드로 정의된 내용이 실제 브라우저 화면에 그려지는 과정
          
        */}

        {/* 첫번째 라우터 부분(기본페이지)를 Home.js로 보냄 */}
        {/* <Route path="/" exact>
          <Container className='background'>
            <h1>20% Season Off</h1>
            <p>welcome to my Shopping Mall</p>
          </Container>

          <div className='container'>
            <div className='row'>
              {
                // map이 반복문이랑 비슷함
                shoes.map((a, i)=>{  
                  // 아래 Card에 props로 shoes[i]와 i를 보냄
                  return <Card shoes={shoes[i]} i={i} key={i} />;
                })
              } */}

              {/* 아래 코드를 Card컴포넌트로 만듬 */}
              {/* <div className='col-md-4'>
                <img src="shoes1.jpg" width="100%" alt='shoes1' />
                <h4>{shoes[0].title}</h4>
                <p>{shoes[0].content}</p>
                <p>{shoes[0].price}원</p>
              </div>
        
              <div className='col-md-4'>
                <img src="shoes2.jpg" width="100%" alt='shoes2' />
                <h4>{shoes[1].title}</h4>
                <p>{shoes[1].content}</p>
                <p>{shoes[1].price}원</p>
              </div>
          
              <div className='col-md-4'>
                <img src="shoes3.jpg" width="100%" alt='shoes3' />
                <h4>{shoes[2].title}</h4>
                <p>{shoes[2].content}</p>
                <p>{shoes[2].price}원</p>
              </div> */}
            {/* </div>
          </div>
        </Route> */}
        

        <Route path="/detail" exact>
          <Details />
          {/* 아래는 Details.js로 보냄 */}
          {/* <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <img src="shoes1.jpg" width="100%" alt='shoes1'/>
                <h4 className='pt-5'>상품명</h4>
                <p>상품설명</p>
                <p>12000원</p>
                <button className='btn btn-primary'>주문하기</button>
              </div>
            </div>
          </div> */}
        </Route>
        
        <Route path="/detail/:id" exact>
          {/* Provider 할당 */}
          <재고Context.Provider value={재고}>
            <Details shoes={shoes} 재고={재고} 재고변경={재고변경}/>
          </재고Context.Provider>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;

// 따로 컴포넌트 파일로 만들어도 되고 이렇게 같은 파일에 해도됨
// function Card(props) {
//   return(
//     <div className='col-md-4'>
//       {/* <img src={"shoes" + (props.i+1) + ".jpg"} width="100%" alt={"shoes" + (props.i+1)} /> */}
//       {/* 아래는 빽틱으로 해봄 */}
//       <img src={`shoes${(props.i+1)}.jpg`} width="100%" alt={`shoes${(props.i+1)}`} />
//       <h4>{props.shoes.title}</h4>
//       <p>{props.shoes.content}</p>
//       <p>{props.shoes.price}원</p>
//     </div>
//   )
// }


// 컴포넌트
// 데이터바인딩
// 반복문
// 라우터

// 라우터
// npm install react-router-dom@5.3.0
// index.js 에 import { BrowserRouter } from 'react-router-dom';
// 그러고나서 App컴포넌트를 BrowserRouter로 감쌈

// 그러고 App.js에서 
// import { Route } from 'react-router-dom'; 후에
// Route태그로 기존 태그들을 감싸줌