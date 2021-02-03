import React from 'react';
import styled from 'styled-components';
import DailyCostCreate from './DailyCostCreate';
import DailyCostItem from './DailyCostItem';

const DailyCostBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  border-top: 1px solid #e9ecef;
  h1 {
    margin: 0px 0px 5px 0px;
    font-size: 17px;
    color: #364149;
    font-weight:800;
  }
RiMoneyDollarCircleFill {
  
  }
`;

function DailyCost() {
  return (
    <DailyCostBlock>
        <h1>Expenses List</h1>
        <DailyCostItem text="프로젝트 생성하기" done={true} />
        <DailyCostItem text="컴포넌트 스타일링 하기" done={true} />
        <DailyCostItem text="Context 만들기" done={false} />
        <DailyCostItem text="기능 구현하기" done={false} />
        <DailyCostCreate />
    </DailyCostBlock>
  )
}

export default DailyCost;