import React from "react";
import styled from "styled-components";
import Main from "./Main";
import Detail from "./Detail";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <FrameDiv>
        <Routes>
          <Route path="/*" element={<Main />}></Route>
          <Route path="/detail/:date" element={<Detail />}></Route>
        </Routes>
      </FrameDiv>
    </div>
  );
}
const FrameDiv = styled.div`
  background-color: #fffdba;
  margin: 5vh auto;
  width: 90vw;
  max-width: 300px;
  height: 90vh;
  border: 3px solid #fffdba;
  border-radius: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
