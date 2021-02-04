import React from 'react';
import styled from 'styled-components';
import DailyCostCreate from './DailyCostCreate';
import DailyCostItem from './DailyCostItem';
import { useCostState } from '../CostContext';


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
  const costs = useCostState();
  return (
    <DailyCostBlock>
        <h1>| Expenses List</h1>
        {costs.map(cost => (
        <DailyCostItem
          key={cost.id}
          id={cost.id}
          text={cost.text}
          done={cost.done}
          money={cost.money}
        />
      ))}
        <DailyCostCreate />
    </DailyCostBlock>
  )
}

export default DailyCost;