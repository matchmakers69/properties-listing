import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.reset ? '#323232' : '#fff')};
  color: ${props => (props.primary ? '#fff' : '#dd8011')};
  margin: 0;
  padding: 0 20px;
  border: 0;
  border-radius: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  text-shadow: none;
  font-size: 14px;
  text-transform: uppercase;
  height: 40px;
  cursor: pointer;
`;

export default Button;
