import React from "react";

class Profile extends React.Component{
    constructor(){
        super(); // 부모 생성자 함수 호출
        this.state={name: "이순신", age:30};
    }
    // 멤버 함수
    changeName=()=>{
        this.setState({name:"강감찬", age:50});
    }

    render(){
        return(
            <div>
                <div>
                    {/* 멤버 함수는 this로 불러옴 */}
                    <h3>나는 {this.state.name}입니다.</h3>
                    <h4>나이는 {this.state.age}살입니다.</h4>
                    <button onClick={this.changeName}>버튼</button>
                </div>
            </div>
        )
    }
}

export default Profile;