import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  background: #fff;
  padding: 10px 30px;
  border-bottom: 2px solid #7b6481;
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    li {
      cursor: pointer;
      margin-right: 20px;

      &:hover {
        text-decoration: underline;
      }
      @media only screen and (max-width: 500px) {
        display: flex;
        margin-right: 10px;
        align-items: center;
      }
    }
    @media only screen and (max-width: 500px) {
      display: flex;
      font-size: 12px;
    }
  }
`;

export const LOGO = styled.div`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: #495057;
  margin: auto 0;
  margin-right: 100px;

  @media only screen and (max-width: 500px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const MenuBox = styled.div`
  /* float: right; */
`;
