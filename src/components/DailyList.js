import React from 'react';
import styled from 'styled-components';
import DailyListItem from './DailyListItem';
import DailyToDoCreate from './DailyToDoCreate';
//아래 추가
import { useTodoState } from '../TodoContext';


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
  const todos = useTodoState();
  return (
    <DailyListBlock>
        <h1>| To Do List</h1>
        {todos.map(todo => (
        <DailyListItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
        <DailyToDoCreate />
    </DailyListBlock>
    
  )
}

export default DailyList;