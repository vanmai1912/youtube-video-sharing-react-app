import { BASE_URL } from "@/utils/request";
import { YoutubeSharingResponse } from "@/utils/types";
import axios from "axios";
import { useState } from "react";

interface YoutubeSharingReturn {
  isLoading: boolean;
  error: string | null;
  success: string | null;
  getVideos: (page: number) => Promise<null | YoutubeSharingResponse>;
  shareVideo: (videoUrl: string) => Promise<null | YoutubeSharingResponse>;
}

export const useYoutubeSharing = (): YoutubeSharingReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const getVideos = async (page: number = 0) => {
    const url = `${BASE_URL}/api/youtubes`;
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: { page },
      });
      setIsLoading(false);

      if (response.status === 200) {
        return response.data;
      }
      return [];
    } catch (err) {
      console.log(err);
      // Handle error
      if (axios.isAxiosError(err) && err.response) {
        setError(
          err.response.data.error || "An error occurred during register"
        );
      } else {
        setError("An error occurred during register");
      }
    }
    return [];
  };

  const shareVideo = async (videoUrl: string) => {
    const url = `${BASE_URL}/api/youtubes`;
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(url, {
        video_url: videoUrl,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      });
      setSuccess('Bạn đã chia sẽ video thành công')
      return response.data;
    } catch (err) {
      console.log(err);
      // Handle error
      if (axios.isAxiosError(err) && err.response) {
        setError(
          err.response.data.error || "An error occurred during register"
        );
      } else {
        setError("An error occurred during register");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { getVideos, shareVideo, isLoading, error, success };
};
