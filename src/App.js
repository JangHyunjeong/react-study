/* eslint-disable */
import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "오늘 날씨 어때?",
    "충격 연돈 근황",
  ]);
  let [좋아요, 좋아요변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]}
          <button type="button" onClick={() => 좋아요변경(좋아요 + 1)}>
            ❤️ {좋아요}
          </button>
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            if (modal == true) {
              setModal(false);
            } else {
              setModal(true);
            }
          }}
        >
          {title[1]}
        </h4>
        <p>2월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 15일 발행</p>
      </div>

      {/* {
        조건식 ? 참일때 실행 코드 : 거짓일때 실행할 코드
      } */}
      {modal == true ? <Modal></Modal> : null}
    </div>
  );
}

// 함수 바깥에 넣기
// 영어대문자로 작명시작
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
