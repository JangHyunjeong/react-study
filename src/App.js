import { useState } from "react";
import "./App.css";

function App() {
  // 자료 잠깐 저장할땐 변수
  let post = "강남 우동 맛집";

  //#1. state 사용법
  // 1. import {useState } from 'react'
  // 2. useState(보관할자료)
  // 3. let [작명, 작]

  let [title, setTitle] = useState([
    "남자 코트 추천",
    "오늘 날씨 어때?",
    "충격 연돈 근황",
  ]);
  // 왜 state 씀?
  // 일반 변수는 갑자기 변경되면 html 에 자동으로 반영 안됨
  // state는 자동 재랜더링됨
  // 변동 시 자동으로 html에 반영되게 만들고 싶으면 state 쓰셈

  // 자주 변경될거 같은 html state로 만들기
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 15일 발행</p>
      </div>
    </div>
  );
}

export default App;
