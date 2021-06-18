import React, { useState, FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Button, Input } from '../../components';

interface stateType {
  id: string;
  password: string;
  nickname?: string;
  email: string;
  country: string;
}

const SignUp = () => {
  const [state, setState] = useState<stateType>({
    id: '',
    password: '',
    nickname: '',
    email: '',
    country: '',
  });

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault();

    console.log(state);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  return (
    <Container>
      <Title>sign up</Title>
      <form onSubmit={handleSubmit}>
        <Input
          name="id"
          label="ID"
          placeholder="input your id"
          onChange={handleChange}
          value={state.id}
        />
        <Input
          name="password"
          label="Password"
          placeholder="input your password"
          onChange={handleChange}
          value={state.password}
        />
        <Input
          name="nickname"
          label="Nick name"
          placeholder="setting your nickname"
          onChange={handleChange}
          value={state.nickname}
        />
        <Input
          name="email"
          label="Email"
          placeholder="input your id"
          onChange={handleChange}
          value={state.email}
        />
        <Button type="submit" text="Confirm" />
      </form>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
`;

const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;

export default SignUp;
