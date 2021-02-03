import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone } from 'react-icons/md';
import { RiDeleteBack2Fill } from 'react-icons/ri';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #e25454;
  }
  display: none;
`;

const DailyListItemBlock = styled.div`
//   border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 8px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid #ced4da;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #6182ff;
      color: #6182ff;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 18px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function DailyCostItem({ id, done, text }) {
  return (
    <DailyListItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <RiDeleteBack2Fill />
      </Remove>
    </DailyListItemBlock>
  );
}

export default DailyCostItem;