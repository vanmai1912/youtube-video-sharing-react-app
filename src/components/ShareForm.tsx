import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

import InputField from "./InputField";
import { ShareFormData, shareSchema } from "./types";
import { useYoutubeSharing } from "@/hooks/useYoutubeSharing";

const ShareForm: React.FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ShareFormData>({
    resolver: zodResolver(shareSchema),
  });

  const { isLoading, shareVideo, error: apiError, success: apiSuccess} = useYoutubeSharing();

  const onSubmit = async (data: ShareFormData) => {
    // Handle form submission
    await shareVideo(data.video_url);
    reset({ video_url: '' });
  };

  return (
    <div className="py-24 px-10">
      <h2 className="text-2xl font-semibold mb-2 text-center">Share</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <InputField
            label="Youtube URL"
            type="text"
            placeholder="Enter your video url"
            register={register("video_url")}
            error={errors.video_url?.message}
          />
        </div>

        <div className="text-right text-primary">
          <div>
            {apiError && (
              <p className="flex text-error text-bold mt-1">{apiError}</p>
            )}
            {apiSuccess && (
              <p className="flex text-green-600 text-bold mt-1">{apiSuccess}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="btn mt-2 w-full btn-primary"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            <span>Share</span>
          )}
        </button>

      </form>
    </div>
  );
};

export default ShareForm;
