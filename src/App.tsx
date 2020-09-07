import React from 'react';
import Router from './router';
import * as Styled from './styles';

const App = () => {
	return (
		<Styled.GlobalStyle>
			<Router />
		</Styled.GlobalStyle>
	);
};

export default App;
