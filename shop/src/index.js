import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

// redux 아래 두개 임포트
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, combineReducers } from 'redux';


let initial = [
    { id:0, name:"멋진신발", quan:2 },
    { id:1, name:"더 멋진신발", quan:12 },
    { id:2, name:"아주 멋진신발", quan:20 },
];

let alert초기값 = true;

function reducer2(state = alert초기값, action){
  if(action.type === "alert닫기"){
    state = false;
    return state;
  }else{
    return state;
  }
}

function reducer(state = initial, action){
  if(action.type === "수량증가"){
    let copy = [...state];
    copy[action.id].quan++;
    return copy;
  }else if(action.type === "수량감소"){
    let copy = [...state];
    copy[action.id].quan--;

    if(copy[action.id].quan < 0){
      copy[action.id].quan = 0;
    }
    return copy;
  }else{
    return state;
  }
}

let store = createStore(combineReducers({reducer, reducer2}));
// let store = createStore(()=>{
//   return initial;
// });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
