import { styled } from 'styled-components';

const Main = styled.main`
  margin-top: 5rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export const HeaderElement = styled.header`
  width: 50%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Select = styled.select`
  background-color: transparent;
  padding: 0.25rem;
  border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
`;

export const Label = styled.label`
  padding: 0.25rem;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const DropdownItem = styled.option``;

export const ThumbFilter = styled.div`
  display: none;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  -webkit-border-right-radius: 16px;
  -moz-border-left-radius: 16px;
  position: absolute;
  top: 0;
  opacity: 0.25;
`;

export const Thumb = styled.article<{ $width: string; $height: string }>`
  padding-bottom: 0.5rem;
  margin-bottom: 1.25rem;
  width: ${({ $width }) => $width ?? '33%'};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;

  box-shadow: 6px 15px 30px -10px rgba(149, 153, 155, 0.75);
  -webkit-box-shadow: 6px 15px 30px -10px rgba(149, 153, 155, 0.75);
  -moz-box-shadow: 6px 15px 30px -10px rgba(149, 153, 155, 0.75);

  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.primary.main};

    ${ThumbFilter} {
      display: flex;
      background-color: ${({ theme }) => theme.palette.primary.light};
      width: ${({ $width }) => $width};
      height: ${({ $height }) => $height};
    }
  }

  > img {
    background-size: cover;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    -webkit-border-right-radius: 16px;
    -moz-border-left-radius: 16px;
  }
`;

export const ThumbDesc = styled.p`
  padding: 1rem;
  width: 100%;
  font-size: 0.95rem;
  font-weight: bold;
`;

export default Main;
