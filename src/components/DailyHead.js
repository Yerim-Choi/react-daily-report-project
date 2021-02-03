import React from 'react';
import styled from 'styled-components';
import { BiSmile } from 'react-icons/bi';


const DailyHeadBlock = styled.div`
  padding-top: 40px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 34px;
    color: #364149;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #b2b2b2;
    font-size: 18px;
    margin-top: 36px;
    font-weight: light;
  }
  .tasks-left-color {
      display:inline-block;
    color: #6182ff;
    font-weight: light;
  }
`;

function DailyHead() {
  return (
    <DailyHeadBlock>
      <h1>7월 10일, 2019</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">오늘 해야 할 일 <div className="tasks-left-color"> 2개 </div> 달성!<br />지출은 <div className="tasks-left-color"> 27000원 </div> 이 있었습니다 <BiSmile /></div>
    </DailyHeadBlock>
  );
}

export default DailyHead;