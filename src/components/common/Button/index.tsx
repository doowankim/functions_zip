import React from 'react';
import styled from 'styled-components';

interface buttonProps {
  text: string;
  submit?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  width?: number;
  height?: number;
}

const Button = (props: buttonProps) => {
  return (
    <Container>
      <button
        style={{ width: `${props.width}px`, height: `${props.height}px` }}
        type={props.type ? props.type : 'button'}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

export default Button;
