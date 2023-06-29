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

export const Thumb = styled.div``;

export default Main;
