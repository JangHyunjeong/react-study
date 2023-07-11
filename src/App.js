/* eslint-disable */
import { useState } from "react";
import "./App.css";

function App() {
  // 자료 잠깐 저장할땐 변수
  let post = "강남 우동 맛집";

  let [title, setTitle] = useState([
    "남자 코트 추천",
    "오늘 날씨 어때?",
    "충격 연돈 근황",
  ]);
  let [좋아요, 좋아요변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]}
          {/* 1. onClick 쓰는법
          onClick={} 안엔 함수 이름을 넣어야함 
          onClick={함수명}
          onClick={()=>{console.log(1)}} 
          이런식으로 써도 됌 */}

          {/* 2. state 변경하는법
          항상 state 변경함수 사용
          state변경함수(새로운state) 
          - state는 등호로 변경금지
          - 좋아요변경 이용 > 그래야 재랜더링 잘 됨
          */}
          <button type="button" onClick={() => 좋아요변경(좋아요 + 1)}>
            ❤️ {좋아요}
          </button>
        </h4>
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
