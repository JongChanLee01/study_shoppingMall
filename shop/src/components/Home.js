import { Container } from "react-bootstrap";
import Card from "./Card";
import axios from "axios";

function Home(props) {
    // console.log(props)

    // App.js로 옮김
    // let getUrl = "https://codingapple1.github.io/shop/data2.json";
    // const getData=()=>{
    //     axios
    //     .get(getUrl)
    //     .then((result)=>{
    //         console.log(result.data);
    //     })
    //     .catch(()=>{
    //         console.log("접속실패....");
    //     });
    // }
    return (
        <div>
            <Container className='background mt-4'>
                <h1>20% Season Off</h1>
                <p>welcome to my Shopping Mall</p>
            </Container>

            <div className='container'>
            <div className='row'>
                {
                    // map이 반복문이랑 비슷함
                    props.shoes.map((a, i)=>{  
                        // 아래 Card에 props로 shoes[i]와 i를 보냄
                        return <Card shoes={props.shoes[i]} i={i} key={i} />;
                    })
                }

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
            </div>

            {/* 기능을 위에 함수로 올림 */}
            {/* 잘라내서 App.js로 옮김 */}
            {/* <button className="btn btn-primary"onClick={getData}>
            더보기(axios)
            </button> */}

            {/* 기능을 함수로 옮기기 전 */}
            {/* <button className="btn btn-primary"
            onClick={()=>{
                axios.get("https://codingapple1.github.io/shop/data2.json")
                .then((result)=>{console.log(result.data)})
                .catch(()=>{console.log("접속실패....")});
            }}>
            더보기(axios)
            </button> */}

            {/* fetch로 하는방법 */}
            {/* <button className="btn btn-danger"
            onClick={()=>{
                fetch("https://codingapple1.github.io/shop/data2.json")
                .then((result)=>{
                    console.log(result.data)
                    return result.json();
                }).then((data)=>{
                    console.log(data)
                });
            }}>
            더보기(fetch)
            </button> */}

            </div>
        </div> 
    )
}

export default Home;