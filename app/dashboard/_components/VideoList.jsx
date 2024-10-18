import { Thumbnail } from "@remotion/player";
import { useState } from "react";
import PlayerDialog from "./PlayerDialog";
import RemotionVideo from "./RemotionVideo";

function VideoList({ videoList }) {
    const [openPlayDialog, setOpenPlayDialog] = useState(false);
    const [videoId, setVideoId] = useState();

    return (
        <div className='mt-10 grid grid-cols-2 md:grid-c    ols-3 lg:grid-cols-4 gap-7'>
            {videoList?.map((video, index) => (
                <div
                    key={video.id}
                    className="cursor-pointer hover:scale-105 transition-all duration-300"
                    onClick={() => {
                        setOpenPlayDialog(Date.now());
                        setVideoId(video?.id);
                    }}
                >
                    <Thumbnail
                        component={RemotionVideo}
                        compositionWidth={250}
                        compositionHeight={400}
                        frameToDisplay={30}
                        durationInFrames={120}
                        fps={30}
                        style={{ borderRadius: 15 }}
                        inputProps={{
                            ...video,
                            setDurationInFrames: (v) => console.log(v)
                        }}
                        errorFallback={(error) => (
                            <div>Error loading thumbnail: {error.message}</div>
                        )}
                    />
                </div>
            ))}
            <PlayerDialog
                open={openPlayDialog}
                onClose={() => setOpenPlayDialog(false)}
                videoId={videoId}
            />
        </div>
    )
}

export default VideoList
