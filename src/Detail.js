import React, { useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const { date } = useParams();
  const [counter, setCounter] = React.useState(0); //초기값
  const [mouse, setMouse] = React.useState(0); //초기값
  const Click = (i) => {
    //Click 이라는 함수로 i(인덱스) 를 받아와서
    setCounter(i + 1); //setCounter를 이용해 counter 값을 하나 올려 저장할 수 있다
  };
  //클릭과 마찬가지
  const Hover = (i) => {
    setMouse(i + 1);
  };
  React.useEffect(() => {
    const press = (event) => {
      if ([0, 1, 2, 3, 4, 5].indexOf(parseInt(event.key)) !== -1) {
        //만약 키보드 입력 이벤트를 정수로 만든 값이 []안에 있다면 없으면 -1이기 때문에 -1이 아니라면
        setCounter(parseInt(event.key)); //useState의 카운터를 입력받은 값으로 바꿔준다
      }
    };
    window.addEventListener("keydown", press); //화면창에서 일어나는 이벤트 이므로 window에 이벤트 리스너를 key눌림으로 받아서 ,press 함수 동작시키게함

    return () => window.removeEventListener("keydown", press);
  }, []);

  return (
    <>
      <Title>
        {/* useParams를 이용해 값을 넘겨받아와 라우트된 date를 받아와 요일에 표시 */}
        <TitleSpan>{date}요일</TitleSpan> 평점 남기기
      </Title>
      <WrapStar>
        {/* Array from 을 사용해 배열을 5의 길이를 가진 배열을 만들어 평점 남길 공간을 5개로 만든다 */}
        {Array.from({ length: 5 }, (value, i) => {
          return (
            //   스타가 평점 똥글뱅이
            <Star
              key={i}
              //온클릭시 클릭함수에 i 전달
              onClick={() => {
                Click(i);
              }}
              //클릭 된것 호버된것 값을 스타일드 css 로 전달
              clicked={counter < i + 1}
              hovered={mouse < i + 1}
              //호버 효과를 위해 마우스 엔터와 리브를 사용
              onMouseEnter={() => Hover(i)}
              onMouseLeave={() => Hover(-1)}
            ></Star>
          );
        })}
      </WrapStar>
      {/* 링크 투로 라우트 시킴 */}
      <Link to=".." style={{ textDecoration: "none" }}>
        <HomeBtnText>평점 남기기</HomeBtnText>
      </Link>
    </>
  );
}
const Title = styled.h3`
  text-align: center;
  margin-top: 5vh;
  color: #af68b3;
`;
const TitleSpan = styled.span`
  background-color: plum;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
`;
const WrapStar = styled.div`
  display: flex;
  margin: 2em auto;
  justify-content: space-between;
  width: 50%;
`;
const Star = styled.div`
  width: 1.5em;
  height: 3em;
  border: 1px solid #bbb;
  border-radius: 3em;
  background-color: ${(props) =>
    props.clicked && props.hovered ? "#999" : "#FCC7FF"};
`;

const HomeBtnText = styled.h3`
  background-color: #af68b3;
  text-align: center;
  margin: auto;
  width: 50%;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
`;
export default Detail;
