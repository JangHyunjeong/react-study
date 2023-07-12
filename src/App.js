/* eslint-disable */
import React from "react";
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

  let [currentIdx, setCurrentIdx] = useState(null);
  let [inputValue, setInputValue] = useState("");

  function chnageList() {
    let titleCopy = [...title];
    titleCopy[0] = "여자 코트 추천";
    setTitle(titleCopy);
  }

  function post() {
    let titleCopy = [...title];
    titleCopy.unshift(inputValue);
    setTitle(titleCopy);
  }

  function deleteTitle(idx) {
    let titleCopy = [...title];
    titleCopy.splice(idx, 1);
    setTitle(titleCopy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setCurrentIdx(i);
                setModal(true);
              }}
            >
              {a}
              <button
                type="button"
                onClick={(e) => {
                  // 이벤트 버블링 막기
                  e.stopPropagation();
                  let likeCopy = [...좋아요];
                  likeCopy[i] = likeCopy[i] + 1;
                  좋아요변경(likeCopy);
                }}
              >
                ❤️ {좋아요[i]}
              </button>
            </h4>
            <p>2월 15일 발행</p>
            <button
              type="button"
              onClick={(e) => {
                deleteTitle(i);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      {/* input 에 뭔가 입력시, 코드 실행하고 싶으면
      onChange / onInput */}
      {/* state 변경함수는 늦게 처리됨.(비동기처리) 
        하단 코드에서 console.log 가 먼저 실행
        setInputValue 그다음 실행
      */}
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button type="button" onClick={post}>
        등록
      </button>

      {modal == true ? (
        <Modal
          title={title}
          color={"skyblue"}
          chnageList={chnageList}
          currentIdx={currentIdx}
        ></Modal>
      ) : null}

      <Modal2 title={title}></Modal2>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.currentIdx]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button type="button" onClick={props.chnageList}>
        글수정
      </button>
    </div>
  );
}

// 옛날 class 문법
// 근데 function 권장
class Modal2 extends React.Component {
  // props사용하기
  constructor(props) {
    super(props);
    //state
    this.state = {
      name: "Kim",
      age: 20,
    };
  }
  render() {
    // component
    return (
      <div>
        {/* props 가져다쓰기 */}
        <p>{this.props.title}</p>
        {/* state 가져다 쓰기 */}
        안녕 {this.state.name}, 너 {this.state.age}살이구나
        {/* 이벤트 넣기 */}
        <button
          type="button"
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          한살먹기
        </button>
      </div>
    );
  }
}

export default App;
