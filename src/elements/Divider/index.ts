import { styled } from 'styled-components';

interface IDivider {
  $width: string;
  $mt: string;
  $mb: string;
}

const Divider = styled.hr<IDivider>`
  border: none;
  border-top: 2px solid ${({ theme }) => theme.palette.gray.main};
  border-radius: 4px;
  text-align: center;
  width: ${({ $width }) => $width};
  margin-top: ${({ $mt }) => $mt};
  margin-bottom: ${({ $mb }) => $mb};
`;

export default Divider;
