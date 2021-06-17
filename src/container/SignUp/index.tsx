import React from 'react';
import styled from 'styled-components';

const SignUp = () => {
  return (
    <Container>
      <Title>Sign up</Title>
      <form>
        <Flexbox>
          <div>ID</div>
          <input placeholder="input your id" required />
        </Flexbox>
        <Flexbox>
          <div>Password</div>
          <input placeholder="input your password" required />
        </Flexbox>
        <Flexbox>
          <div>Nick name</div>
          <input placeholder="setting your nickname" />
        </Flexbox>
        <Flexbox>
          <div>Email</div>
          <input placeholder="input your email" />
        </Flexbox>
        <Flexbox>
          <div>Country</div>
          <select>
            <option>Seoul</option>
            <option>Gyeongki</option>
            <option>Incheon</option>
            <option>Busan</option>
          </select>
        </Flexbox>
      </form>
      <button>confirm</button>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
`;

const Title = styled.div`
  text-align: center;
`;

const Flexbox = styled.div`
  display: flex;
`;

export default SignUp;
