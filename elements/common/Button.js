import styled from "styled-components";

export const Button = styled.a`
  box-shadow: none;
  outline: none;
  text-decoration: none;
  display: inline-flex;
  padding: 19px 58px;
  cursor: pointer;
  border: 2px solid
    ${props => (props.light ? props.theme.light : props.theme.main)};
  color: ${props => (props.light ? props.theme.light : props.theme.main)};
  transition: all 0.3s linear;
  background-color: transparent;

  &:hover {
    transition: none;
    color: ${props => (!props.light ? props.theme.light : props.theme.main)};
    background-color: ${props =>
      props.light ? props.theme.light : props.theme.main};
  }
`;

export default Button;
