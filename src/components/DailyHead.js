import React from 'react';
import styled from 'styled-components';
import { BiSmile } from 'react-icons/bi';
import { useTodoState } from '../TodoContext';
import { useCostState } from '../CostContext';



const DailyHeadBlock = styled.div`
  padding-top: 40px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 32px;
    color: #364149;
    text-align:right;
  }
  .day {
    text-align:right;
    margin-top: 10px;
    color: #868e96;
    font-size: 18px;
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
  //할일 가져오기
  const todos = useTodoState();
  const doneTasks = todos.filter(todo => todo.done);

  //지출내역 가져오기
  const costs = useCostState();
  let sumCost = 0;
  costs.forEach((item) => {
    sumCost += Number(item.money);
  })

  //오늘 날짜 가져오기
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <DailyHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">오늘 해야 할 일 <div className="tasks-left-color"> {doneTasks.length}개 </div> 달성!<br />지출은 <div className="tasks-left-color"> {sumCost}원 </div> 이 있었습니다 <BiSmile /></div>
    </DailyHeadBlock>
  );
}

export default DailyHead;