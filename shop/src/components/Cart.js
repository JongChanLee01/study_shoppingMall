// ES7 + React/Redux-Native snippets 설치
// rafce 치면 아래가 자동으로 생김
import React from 'react';
import { Table } from 'react-bootstrap';

import { Connect, connect } from 'react-redux';

const Cart = (props) => {
  return (
    <div>
        <Table responsive>
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경</th>
            </tr>
            <tr>
                <td> 1 </td>
                <td> {props.state[0].name}</td>
                <td> {props.state[0].quan}</td>
                <td> {props.state[0].id}</td>
            </tr>
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