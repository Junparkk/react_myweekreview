import React from "react";
import styled from "styled-components";
import { TiChevronRight } from "react-icons/ti";
import { Link } from "react-router-dom";

function Main() {
  //배열을 만들어 주고 일요일이 시작인 이유는 date 함수를 이용하면 일요일이 '0'으로 나오기 때문
  const week_day = ["일", "월", "화", "수", "목", "금", "토"];
  // 새로운 배열을 만들어 주기 위해 맵을 이용 (오늘 날짜를 최상단으로 오게 하려는 작업)
  const today = week_day.map((a, i) => {
    //오늘 날짜를 받아와 요일만 숫자로 받는다
    const date = new Date();
    const day_label = date.getDay();
    //요일은 최대 6까지 있기 때문에 현재 요일과 week_day 길이만큼의 인덱스를 더 했을 때 7이 된다면 값을 표현 할 수 없게된다
    //때문에 7이 된 값에 대해서는 7을 빼서 처음인 0으로 만들어 주고 넘지 않는다면 그래도 사용한다면
    //오늘이 월요일이라면 1 근데 처음에는 인덱스가 무조건 0 이므로 1의 값인 월요일이 제일 처음 배열에 담긴다
    const new_day = day_label + i > 6 ? day_label + i - 7 : day_label + i;
    console.log(new_day);
    return week_day[new_day];
  });
  console.log(today);
  //새로 만들어진 배열로 맵을 돌림
  const today_week = today.map((b) => {
    return {
      //각각 day에는 요일
      //random 이라는 곳에는 랜덤으로 0-4까지 담아줌
      day: b,
      random: Math.floor(Math.random() * 5),
    };
  });

  console.log(today_week);
  return (
    <>
      <Title>나의 이번주 평점은~?</Title>
      {today_week.map((v, i) => {
        return (
          <Week key={i}>
            <Text>{v.day}</Text>
            {Array.from({ length: 5 }, (value, i) => {
              return (
                <Circle
                  key={i}
                  스타일컴포넌트한테값전달={v.random < i}
                ></Circle>
              );
            })}

            <Link to={`/detail/${v.day}`}>
              <TiChevronRight size="2em" color="#fff" />
            </Link>
          </Week>
        );
      })}
      <WeekContainer></WeekContainer>
    </>
  );
}

const Title = styled.h3`
  text-align: center;
  margin-top: 5vh;
  color: #af68b3;
`;

const WeekContainer = styled.div`
  /* background-color: black; */
  padding: 10px;
  margin: auto;
  width: 90%;
  height: 100%;
`;
const Week = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  margin: 10px auto;
  justify-content: space-between;
  background-color: rebeccapurple;
  height: 3em;
  width: 90%;
  border-radius: 15px;
`;
const Text = styled.span`
  color: whitesmoke;
  margin-left: 5px;
`;
const Circle = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: ${(props) =>
    props.스타일컴포넌트한테값전달 ? "#999" : "#FCC7FF"};
`;
export default Main;
