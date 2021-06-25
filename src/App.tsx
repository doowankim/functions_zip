import React from 'react';
import Router from './router';
import { createGlobalStyle } from 'styled-components';

const Container = createGlobalStyle`
	body {
    font-family: 'Noto Sans KR', sans-serif;
		margin: 0;
		padding: 0;
	}
`;

const App = () => {
  return (
    <div>
      <Container />
      <Router />
    </div>
  );
};

export default App;
