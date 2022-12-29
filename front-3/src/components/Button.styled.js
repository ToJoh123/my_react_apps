import styled from 'styled-components';

export const Button = styled.button`
border-radius: 5%;
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  // this gives hover effect
  &:hover {
    // this will change the text to display "See More"
    background-color: red;
  }
`;
