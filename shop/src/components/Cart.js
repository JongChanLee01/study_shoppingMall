// ES7 + React/Redux-Native snippets 설치
// rafce 치면 아래가 자동으로 생김
import React from 'react';
import { Table } from 'react-bootstrap';

import { Connect, connect } from 'react-redux';

const Cart = (props) => {
    let tableArray = props.state.map((a,i)=>{
        return(
            <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                    <button onClick={()=>{props.dispatch({type:"수량증가", id:i})}}>+</button>
                    <button onClick={()=>{props.dispatch({type:"수량감소", id:i})}}>-</button>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <Table striped hover bordered>
                <tr>
                    <th>아이디</th>
                    <th>상품명</th>
                    <th>수량</th>
                </tr>
                {tableArray}
                {/* <tr>
                    <td> 1 </td>
                    <td> {props.state[0].name}</td>
                    <td> {props.state[0].quan}</td>
                    <td> {props.state[0].id}</td>
                </tr> */}
            </Table>
        </div>
    )
}

// export default Cart;
function stateToProps(state){
    return(
        {state:state}
    )
}
export default connect(stateToProps)(Cart);