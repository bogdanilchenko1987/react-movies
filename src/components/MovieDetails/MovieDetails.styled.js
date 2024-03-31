import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsWrapper = styled.div`
  display: flex;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const BtnDetailsContainer = styled.div`
  margin: 20px 0 20px 20px;
`;

export const StyledLink = styled(NavLink)`
  margin-right: 10px;
  padding: 5px 20px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #a19b19;
  }
`;

export const Img = styled.img`
  width: 400px;
  height: 500px;
  border-radius: 5px;
  margin-right: 10px;
`;
export const StyledBackLink = styled(Link)`
  color: black;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 10px;
  display: inline-block;
  &:hover,
  &:focus {
    color: #a19b19;
  }
`;
