import styled from 'styled-components';

export const StatWrap = styled.div`
  padding: 10px;
  /* border: 1px solid; */
  border-radius: 5px;
  border-color: ${props => {
    return props.theme.colors.main; // из темы передаем цвет с помощью функции
  }};
  background-color: ${props => {
    return props.theme.colors.bgc; // из темы передаем цвет с помощью функции
  }};
  box-shadow: 3px 3px 7px
    ${props => {
      return props.theme.colors.accentDark; // из темы передаем цвет с помощью функции
    }};
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
`;
