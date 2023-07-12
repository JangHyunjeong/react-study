/* eslint-disable */
import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "오늘 날씨 어때?",
    "충격 연돈 근황",
  ]);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  [1, 2, 3].map(function (a) {
    return "1213";
  });

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {/* a: 현재 도는 item , i : 0부터  ++ 되는 정수 */}
      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4>
              <span
                onClick={() => {
                  if (modal == true) {
                    setModal(false);
                  } else {
                    setModal(true);
                  }
                }}
              >
                {a}
              </span>
              <button
                type="button"
                onClick={() => {
                  let likeCopy = [...좋아요];
                  likeCopy[i] = likeCopy[i] + 1;
                  좋아요변경(likeCopy);
                }}
              >
                ❤️ {좋아요[i]}
              </button>
            </h4>
            {/* <h4>{title[i]}</h4> */}
            <p>2월 15일 발행</p>
          </div>
        );
      })}

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
