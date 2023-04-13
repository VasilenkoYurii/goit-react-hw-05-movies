import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 60px 20px 60px;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);
  background-color: #fdf0f7;
  height: 550px;
`;

export const MoviesIdImg = styled.img`
  height: 500px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const DescriptionContainer = styled.div`
  height: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 700px;
`;

export const AdditionalInfo = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AdditionalLink = styled(Link)`
  font-size: 17px;
  color: #212121;
  font-weight: 500;

  &:hover,
  &.active {
    color: #ff0068;
  }
`;
