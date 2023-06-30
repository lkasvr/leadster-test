import { styled } from 'styled-components';

interface IPaginationItem {
  $disabled?: boolean;
  $dots?: boolean;
  $selected?: boolean;
}

const Pagination = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const PaginationItem = styled.li<IPaginationItem>`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.palette.black.main};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  letter-spacing: 0.01071em;
  border-radius: 6px;
  line-height: 1.43;
  font-size: 1rem;
  font-weight: 700;
  min-width: 32px;

  ${({ $dots, $disabled, theme }) => {
    if ($dots) {
      return `
  &:hover {
    background-color: transparent;
    cursor: default;
  }
`;
    } else if (!$disabled) {
      return `
  &:hover {
    background-color: ${theme.palette.primary.main};
    color: white;
    cursor: pointer;
  }`;
    }
  }};

  ${({ $selected, theme }) =>
    $selected &&
    `
    background-color: transparent;
    border: 1px solid ${theme.palette.primary.main};
  `}

  ${({ $disabled }) =>
    $disabled &&
    `
  pointer-events: none;

    .arrow::before {
      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  `}
`;

export const Label = styled.span`
  position: absolute;
  margin-bottom: 1.25rem;
  margin-right: 14rem;
  font-size: 1rem;
  font-weight: 600;
`;

export const Arrow = styled.div<{ $position: 'left' | 'right' }>`
  &::before {
    position: relative;
    content: '';
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  }

  ${({ $position }) => {
    if ($position === 'left') {
      return 'transform: rotate(-135deg) translate(-50%);';
    } else if ($position === 'right') return 'transform: rotate(45deg);';
  }}
`;

export default Pagination;
