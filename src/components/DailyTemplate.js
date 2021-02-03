import React from 'react';
import styled from 'styled-components';

const DailyTemplateBlock = styled.div`
  width: 550px;
  height: 800px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.07);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 70px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function DailyTemplate({ children }) {
  return <DailyTemplateBlock>{children}</DailyTemplateBlock>;
}

export default DailyTemplate;