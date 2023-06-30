import { styled } from 'styled-components';

interface IBaseAnimation {
  $duration?: string;
  $timingFunction?: string;
  $delay?: string;
  $iterationCount?: string;
  $direction?: string;
  $fillMode?: string;
  $playState?: string;
  $display?: string;
}

const BaseAnimation = styled.div<IBaseAnimation>`
  animation-duration: ${({ $duration }) => ($duration ? $duration : '1s')};
  animation-timing-function: ${({ $timingFunction }) =>
    $timingFunction ? $timingFunction : 'ease'};
  animation-delay: ${({ $delay }) => ($delay ? $delay : '0s')};
  animation-iteration-count: ${({ $iterationCount }) =>
    $iterationCount ? $iterationCount : '1'};
  animation-direction: ${({ $direction }) =>
    $direction ? $direction : 'normal'};
  animation-fill-mode: ${({ $fillMode }) => ($fillMode ? $fillMode : 'both')};
  animation-play-state: ${({ $playState }) =>
    $playState ? $playState : 'running'};
  display: ${({ $display }) => ($display ? $display : 'block')};
`;

export default BaseAnimation;
