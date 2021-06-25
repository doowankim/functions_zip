import React from 'react';
import styled from 'styled-components';

const Splash = () => {
  return (
    <Container>
      <Wrapper>
        <Text>PLAYGROUND</Text>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  height: 100vh;
  background: #f0f0f0;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 24px;
  text-decoration: underline;
`;

export default Splash;
