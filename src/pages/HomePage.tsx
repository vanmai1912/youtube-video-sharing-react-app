import React, { useEffect, useState } from "react";

import Videos from "@/components/Videos";
import { useYoutubeSharing } from "@/hooks/useYoutubeSharing";
import { YoutubeSharingItem } from "@/utils/types";

const HomePage: React.FC = () => {
  const [page] = useState<number>(3);
  const [videos, setVideos] = useState<YoutubeSharingItem[]>([]);
  const { isLoading, getVideos } = useYoutubeSharing();

  useEffect(() => {
    const fetchingVideos = async () => {
      const response = await getVideos(page);
      if (response) {
        console.log(response);
        setVideos(response?.data);
      }
    };

    fetchingVideos();
  }, [page]);

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      <Videos videos={videos} />
    </main>
  );
};

export default HomePage;
