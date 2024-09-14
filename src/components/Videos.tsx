import React from "react";

import { YoutubeSharingItem } from "@/utils/types";
import Video from "./Video";

interface ListVideoProps {
  videos: YoutubeSharingItem[];
}

const Videos: React.FC<ListVideoProps> = ({ videos }) => {
  return (
    <ul>
      {videos?.map((video, index) => (
        <Video key={index} video={video} />
      ))}
    </ul>
  );
};

export default Videos;
