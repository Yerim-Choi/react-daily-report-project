import React from 'react';
import { createGlobalStyle } from 'styled-components';
import DailyTemplate from './components/DailyTemplate'
import DailyHead from './components/DailyHead';
import DailyList from './components/DailyList';
import DailyCost from './components/DailyCost';

const GlobalStyle = createGlobalStyle`
  body {
    background: #f4f4f4;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <DailyTemplate>
        <DailyHead />
        <DailyList />
        <DailyCost />
        
      </DailyTemplate>
    </>
  );
}

export default App;