import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

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
  padding-right: 32px;
  padding-bottom: 10px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dee2e6;
  width: 60%;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
`;

function DailyCostCreate() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input style={{ width: '100px', marginRight:'5px' }} autoFocus placeholder="0원" />
            <Input autoFocus placeholder="지출 내역 입력 후, Enter를 누르세요" />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default DailyCostCreate;