import styled from 'styled-components';

export const MovieContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 262px);
  gap: 16px;
  justify-content: center;
  list-style: none;
`;

export const MovieItem = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  &:hover,
  &:focus {
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.7);
  }
`;

export const MovieImg = styled.img`
  width: 100%;
`;

export const MovieText = styled.h2`
  text-align: center;
`;
