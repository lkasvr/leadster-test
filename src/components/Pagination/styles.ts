import { styled } from 'styled-components';

interface IPaginationItem {
  $disabled?: boolean;
  $dots?: boolean;
  $selected?: boolean;
}

const Pagination = styled.ul`
  width: 100%;
  display: flex;
  list-style-type: none;
`;

export const PaginationItem = styled.li<IPaginationItem>`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;

  ${({ $dots, $disabled }) => {
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
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }`;
    }
  }};

  ${({ $selected }) => $selected && 'background-color: rgba(0, 0, 0, 0.08);'}

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
