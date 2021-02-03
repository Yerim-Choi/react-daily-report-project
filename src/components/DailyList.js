import React from 'react';
import styled from 'styled-components';
import DailyListItem from './DailyListItem';
import DailyToDoCreate from './DailyToDoCreate';

const DailyListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  h1 {
    margin: 0px 0px 5px 0px;
    font-size: 17px;
    color: #364149;
    font-weight:800;
  }
`;

function DailyList() {
  return (
    <DailyListBlock>
        <h1>| To Do List</h1>
        <DailyListItem text="프로젝트 생성하기" done={true} />
        <DailyListItem text="컴포넌트 스타일링 하기" done={true} />
        <DailyListItem text="Context 만들기" done={false} />
        <DailyListItem text="기능 구현하기" done={false} />
        <DailyToDoCreate />
    </DailyListBlock>
    
  )
}

export default DailyList;