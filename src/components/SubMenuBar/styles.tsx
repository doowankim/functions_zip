import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 300px;
  height: 91vh;
  border-right: 1px solid #ddd;
  overflow: auto;

  @media only screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  padding-top: 30px;

  div {
    font-size: 18px;
    margin-bottom: 50px;
    cursor: pointer;
    transition: 0.35s;

    &:hover {
      color: ${lighten(0.6, '#000')};
      transition: 0.35s;
    }

    @media only screen and (max-width: 500px) {
      font-size: 14px;
    }
  }
`;
