import { YoutubeSharingItem } from "@/utils/types";
import React from "react";

interface VideoProps {
  video: YoutubeSharingItem;
}

const Video: React.FC<VideoProps> = ({ video }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={video.image_url} alt={video.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{video.title}</h2>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default Video;
