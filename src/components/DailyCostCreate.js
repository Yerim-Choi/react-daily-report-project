import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useCostDispatch, useCostNextId } from '../CostContext';

const CircleButton = styled.button`
  background: #6182ff;
  z-index: 5;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 88%;
  bottom: 32px;
  transform: translate(-50%, 50%);
  color: white;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0px;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 10px;
  padding-right: 90px;
  padding-bottom: 10px;
  border-top: 1px solid #e9ecef;
  display: inline-block;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
`;

function DailyCostCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [moneyValue, setMoneyValue] = useState('');

  const dispatch = useCostDispatch();
  const nextId = useCostNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onMoneyChange = e => setMoneyValue(e.target.value);

  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        money: moneyValue,
        done: false
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };


  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm style={{ paddingRight: '15px'  }} onSubmit={onSubmit}>
            <Input style={{ width: '90px' }} autoFocus placeholder="0원" type="number" onChange={onMoneyChange} value={moneyValue} />
            {/* <Input placeholder="지출 내역 입력 후, Enter를 누르세요" onChange={onChange} value={value} /> */}
            </InsertForm>
            <InsertForm style={{ paddingLeft: '0', paddingRight: '133px' }} onSubmit={onSubmit}>
            {/* <Input style={{ width: '100px', marginRight:'5px' }} autoFocus placeholder="0원" type="number" onChange={onMoneyChange} value={moneyValue} /> */}
            <Input style={{ width: '280px' }} placeholder="내역 입력 후, Enter를 누르세요" onChange={onChange} value={value} />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(DailyCostCreate)