'use client';

import ReactPlayer from 'react-player';

interface IVideoPlayer {
  url: string;
  width?: string;
  height?: string;
}

const Index = ({ url, width, height }: IVideoPlayer) => {
  return (
    <ReactPlayer
      url={url}
      width={width ? width : '100%'}
      height={height ? height : '100%'}
      controls
    />
  );
};

export default Index;
