import { styled } from 'styled-components';

interface IButton {
  $bg: string;
  $color: string;
  $width?: string;
  $hoverColor?: string;
  $active?: boolean;
}

const Button = styled.button<IButton>`
  cursor: pointer;
  background-color: ${({ $bg }) => $bg};
  border: 0.1rem solid ${({ $color }) => $color};
  border-radius: 4rem;
  -webkit-border-radius: 4rem;
  -moz-border-radius: 4rem;
  padding: 0.5rem;
  min-width: 5rem;
  width: ${({ $width }) => $width};
  text-align: center;
  font-weight: 500;
  color: ${({ $color }) => $color};

  ${({ $active, $hoverColor, theme }) => {
    if (!$active) {
      return `
      &:hover {
          border-color: ${$hoverColor};
          color: ${$hoverColor};
        }
    `;
    }

    return (
      $active &&
      `
    color: white;
    border-color: ${theme.palette.primary.main};
    background-color: ${theme.palette.primary.main};
  `
    );
  }}
`;

export default Button;
