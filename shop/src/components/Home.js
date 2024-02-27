import { Container } from "react-bootstrap";
import Card from "./Card"

function Home(props) {
    console.log(props)
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
            </div>
        </div> 
    )
}

export default Home;