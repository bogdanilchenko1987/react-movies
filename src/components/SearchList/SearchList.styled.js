import { Link } from 'react-router-dom';
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
  height: 336px;
`;

export const MovieText = styled.h2`
  text-align: center;
  padding: 5px;
  /* margin: 0; */
`;

export const StyledLink = styled(Link)`
  color: black;
  font-weight: 500;
  text-decoration: none;
  margin-top: 10px;
  display: block;
  &:hover,
  &:focus {
    color: #a19b19;
  }
`;
