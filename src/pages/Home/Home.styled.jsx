import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 30px;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);
  background-color: #fdf0f7;
  width: 100%;
`;

export const PageTitle = styled.h1`
  text-align: center;
  padding: 20px;
`;

export const MoviesPopList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const MoviesPopItem = styled.li``;

export const MoviesPopItemImg = styled.img`
  width: 270px;
`;

export const MoviesPopItemPrg = styled.p`
    height: 50px;
    width: 270px;

    color: #212121;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
}`;
