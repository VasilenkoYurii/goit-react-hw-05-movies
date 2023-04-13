import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 30px;
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
