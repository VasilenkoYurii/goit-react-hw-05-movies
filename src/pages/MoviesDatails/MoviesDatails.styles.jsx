import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieDatailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  margin: 30px 60px 20px 60px;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);
  background-color: #fdf0f7;
  width: 100%;

  min-height: 1000px;
  position: relative;
`;

export const ContainerForImgAndDescription = styled.div`
  display: flex;
`;

export const MoviesIdImg = styled.img`
  height: 500px;
  margin: 30px;
  margin-top: 50px;
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

export const LoaderContainer = styled.div`
  margin-top: 50px;
`;

export const BackLink = styled(Link)`
  padding: 15px;
  position: absolute;
  color: black;
  font-size: 18px;
  font-weight: 600;
  top: 0;
  left: 0;

  &:hover {
    color: #ff0068;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 60px 20px 60px;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);
  background-color: #fdf0f7;
  height: 200px;
  width: 100%;
  position: relative;
`;

export const ErrorPrg = styled.p`
font-size: 22px;
    font-weight: 600;
    color: #212121;
}`;
