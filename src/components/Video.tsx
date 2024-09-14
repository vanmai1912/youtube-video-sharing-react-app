import { YoutubeSharingItem } from "@/utils/types";
import React from "react";

interface VideoProps {
  video: YoutubeSharingItem;
}

const Video: React.FC<VideoProps> = ({ video }) => {
  return (
    <div className="flex items-center my-4 bg-base-100 shadow-xl rounded">
      <div className="flex justify-center flex-col md:flex-row m-4">
        <figure className="flex justify-center items-center">
          {/* <img className="rounded" src={video.image_url} alt={video.title} /> */}
          <iframe 
            className="w-full max-w-[400px] md:w-[400px] h-[225px]"
            src="https://www.youtube.com/embed/ep1jOzAxsAc?si=_tbE3mi62QboCDLn" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{video.title}</h2>
          <p>{video.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
