import React from 'react';
import * as S from './styles';
import { useHistory } from 'react-router';

const SubMenuBar = () => {
  const history = useHistory();

  return (
    <S.Container>
      <S.Wrapper>
        <div onClick={() => history.push('/signup')}>Sign up / Login</div>
      </S.Wrapper>
    </S.Container>
  );
};

export default SubMenuBar;
