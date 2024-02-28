import React from "react";
import './style/PersonTable.css';

export type Person = {
    id: number,
    name: string,
    age: number
};

export type PersonTableProps = {
    persons: Person[]
}

function PersonTable(props: PersonTableProps) {
    // map함수는 key 값이 꼭 있어야함
    // "key" prop의 값은 DB 테이블의 기본키(primary key) 같은 유일한 값
    let trlist = props.persons.map(person =>
        <tr key= {person.id}><td>{ person.name }</td><td>{ person.age }</td></tr>
    );

    return (
        <table className="PersonTable">
            <tr key={0}><td>이름</td><td>나이</td></tr>
            { trlist }
        </table>
    );
}

export default PersonTable;