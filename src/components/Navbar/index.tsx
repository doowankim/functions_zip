import React from 'react';
import Emoji from '../Emoji';
import * as S from './styles';

const Navbar = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.List>
          <S.LOGO>DOOWAN 놀이터</S.LOGO>
          <ul>
            <li>
              <Emoji symbol="💻" label="notebook" />
              Github
            </li>
            <li>
              <Emoji symbol="💬" label="message" />
              Direct Message
            </li>
          </ul>
        </S.List>
      </S.Wrapper>
    </S.Container>
  );
};

export default Navbar;
