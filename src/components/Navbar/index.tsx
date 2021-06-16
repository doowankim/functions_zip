import React from 'react';
import Emoji from '../Emoji';
import * as S from './styles';

const Navbar = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.List>
          <S.LOGO>DOOWAN Playground</S.LOGO>
          <ul>
            <li onClick={() => window.open('https://github.com/doowankim')}>
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
