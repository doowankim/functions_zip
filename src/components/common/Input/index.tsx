import React from 'react';
import * as S from './styles';

interface inputProps {
  label?: string;
  width?: number;
  height?: number;

  name?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
}

const Input = (props: inputProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <div>{props.label}</div>
        <input
          style={{ width: `${props.width}px`, height: `${props.height}px` }}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Input;
