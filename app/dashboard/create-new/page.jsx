"use client";
import { VideoDataContext } from "@/app/_context/VideoDataContext";
import { Button } from "@/components/ui/button";
import { db } from "@/config/db";
import { VideoData } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CustomLoading from "../_components/CustomLoading";
import SelectDuration from "../_components/SelectDuration";
import SelectStyle from "../_components/SelectStyle";
import SelectTopic from "../_components/SelectTopic";
import PlayerDialog from "../_components/PlayerDialog";

function CreateNew() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [audioFileUrl, setAudioFileUrl] = useState();
  const { setVideoData } = useContext(VideoDataContext);
  const [playVideo, setPlayVideo] = useState(true);
  const [videoId, setVideoId] = useState(5);
  const { user } = useUser();

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const onCreateClickHandler = async () => {
    setLoading(true);
    try {
      const videoScriptData = await getVideoScript();
      const audioLink = await generateAudioFile(videoScriptData);
      const captionsData = await generateCaptions(audioLink);
      const images = await generateImages(videoScriptData);

      const completeVideoData = {
        script: videoScriptData,
        audioFileUrl: audioLink,
        captions: captionsData,
        imageList: images,
        createdBy: user?.primaryEmailAddress?.emailAddress || "unknown",
      };

      setVideoData(completeVideoData);
      await saveVideoData(completeVideoData);

      setAudioFileUrl(audioLink);
    } catch (error) {
      console.error("Error in create process:", error);
    } finally {
      setLoading(false);
    }
  };

  const getVideoScript = async () => {
    const prompt = `Write a script to generate ${formData.duration} video on topic: ${formData.topic} along with AI image prompt in ${formData.imageStyle} format for each scene and give me result in JSON format with imagePrompt and ContentText as field`;
    const resp = await axios.post("/api/get-video-script", { prompt });
    if (!resp.data.result) throw new Error("Failed to get video script");
    return resp.data.result;
  };

  const generateAudioFile = async (videoScriptData) => {
    let script = videoScriptData.map(item => item.contentText).join(" ");
    if (!script.trim()) throw new Error("No content text available for audio generation");

    const resp = await axios.post("/api/generate-audio", {
      text: script,
      id: uuidv4(),
    });

    if (!resp.data || !resp.data.length || !resp.data[0].link) {
      throw new Error("Invalid or missing audio link in the response");
    }

    return resp.data[0].link;
  };

  const generateCaptions = async (audioLink) => {
    const resp = await axios.post("/api/generate-caption", { audioFileUrl: audioLink });
    if (!resp.data.result || !Array.isArray(resp.data.result)) {
      throw new Error("Invalid caption data received");
    }
    return resp.data.result;
  };

  const generateImages = async (videoScriptData) => {
    let images = [];
    for (const element of videoScriptData) {
      try {
        const resp = await axios.post("/api/generate-image", {
          prompt: element?.imagePrompt,
        });
        const imageUrl = resp.data.result;
        console.log("Generated image URL:", imageUrl);
        images.push(imageUrl);
      } catch (error) {
        console.error("Error generating image:", error.response?.data || error.message);
      }
    }
    console.log("All generated image URLs:", images);
    return images;
  };

  const saveVideoData = async (videoData) => {
    try {
      if (!videoData.script || !videoData.audioFileUrl || !videoData.captions || !videoData.imageList || videoData.imageList.length === 0) {
        throw new Error("Missing required video data");
      }

      const dataToInsert = {
        script: videoData.script, // This is already a JSON object
        audioFileUrl: videoData.audioFileUrl,
        captions: videoData.captions, // This is already a JSON object
        imageList: videoData.imageList, // This is already an array of strings
        createdBy: videoData.createdBy,
      };
      setVideoId(result[0].id);
      setPlayVideo(true);
      console.log("Attempting to save video data:", dataToInsert);

      const result = await db.insert(VideoData).values(dataToInsert).returning();

      console.log("Video data saved successfully:", result);
    } catch (error) {
      console.error("Error saving video data:", error);
      console.error("Error details:", error.message, error.stack);
      throw error; // Re-throw the error to be caught in the calling function
    }
  };

  return (
    <div className="md:px-20">
      <h1 className="text-2xl text-center font-medium">Create New</h1>
      <div className="mt-10 shadow-md p-10">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <Button className="mt-10 w-full" onClick={onCreateClickHandler} disabled={loading}>
          {loading ? "Generating..." : "Generate"}
        </Button>
      </div>
      <CustomLoading loading={loading} />
      <PlayerDialog playVideo={playVideo} videoId={videoId} />
      {audioFileUrl && (
        <div className="mt-10">
          <audio controls src={audioFileUrl} />
        </div>
      )}
    </div>
  );
}

export default CreateNew;