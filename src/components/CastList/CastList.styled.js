import styled from 'styled-components';

export const CastContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  justify-content: center;
  list-style: none;
`;

export const CastItem = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  &:hover,
  &:focus {
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.7);
  }
`;

export const CastImg = styled.img`
  width: 100%;
  height: 264px;
`;

export const CastText = styled.h3`
  text-align: center;
`;
