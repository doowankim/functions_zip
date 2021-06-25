import React, { useState } from 'react';
import * as S from './styles';
import useWindowWidth from '../../hooks/useWindowWidth';
import Emoji from '../Emoji';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const width = useWindowWidth();
  const [state, setState] = useState<boolean>(false);

  return (
    <S.Container>
      <S.Wrapper>
        <S.List>
          <S.LOGO>DOOWAN Playground</S.LOGO>
          {width < 600 ? (
            <FontAwesomeIcon
              icon={faBars}
              style={{ cursor: 'pointer' }}
              onClick={() => setState(!state)}
            />
          ) : (
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
          )}
        </S.List>
      </S.Wrapper>
      {state && (
        <S.MenuBox>
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
        </S.MenuBox>
      )}
    </S.Container>
  );
};

export default Navbar;
