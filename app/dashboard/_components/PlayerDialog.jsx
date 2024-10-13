import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { db } from '@/config/db';
import { VideoData } from '@/config/schema';
import { Player } from '@remotion/player';
import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { eq } from 'drizzle-orm';

// Dynamically import RemotionVideo to avoid SSR issues
const RemotionVideo = dynamic(() => import('./RemotionVideo'), { ssr: false });

function PlayerDialog({ playVideo, videoId, onClose }) {
    const [openDialog, setOpenDialog] = useState(false);
    const [videoData, setVideoData] = useState(null);
    const [durationInFrames, setDurationInFrames] = useState(100);
    const [error, setError] = useState(null);
    const [rendering, setRendering] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setOpenDialog(true);
        videoId && getVideoData();
    }, [playVideo, videoId]);

    const getVideoData = async () => {
        try {
            const result = await db.select().from(VideoData).where(eq(VideoData.id, videoId));
            if (result.length > 0) {
                setVideoData(result[0]);
            } else {
                setError('Video not found');
            }
        } catch (err) {
            console.error('Error fetching video data:', err);
            setError('Failed to fetch video data');
        }
    };

    const handleClose = () => {
        setOpenDialog(false);
        onClose();
    };

    const handleRenderAndDownload = useCallback(async () => {
        if (!videoData) return;
    
        setRendering(true);
        setProgress(0);
    
        try {
            const response = await fetch('/api/render-video', {  // Correct path
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    videoData,
                    durationInFrames,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Rendering failed');
            }
    
            // Create a Blob from the response stream and trigger the download
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'video.mp4';
            a.click();
    
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error('Error rendering video:', err);
            setError('Failed to render video');
        } finally {
            setRendering(false);
        }
    }, [videoData, durationInFrames]);
    
    

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className='bg-white flex flex-col justify-center items-center'>
                <DialogHeader>
                    <DialogTitle className='text-2xl font-bold my-5 text-center'>Your Video is Ready</DialogTitle>
                    <DialogDescription>
                        {error ? (
                            <p className="text-red-500">{error}</p>
                        ) : (
                            <>
                                <Player
                                    component={RemotionVideo}
                                    durationInFrames={Number(durationInFrames.toFixed(0))}
                                    compositionWidth={300}
                                    compositionHeight={450}
                                    fps={30}
                                    controls
                                    inputProps={{
                                        ...videoData,
                                        setDurationInFrames: (frameValue) => setDurationInFrames(frameValue)
                                    }}
                                />
                                <div className='flex flex-col items-center gap-3 mt-4'>
                                    {rendering ? (
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${progress * 100}%`}}></div>
                                        </div>
                                    ) : (
                                        <Button onClick={handleRenderAndDownload} disabled={rendering}>
                                            Render and Download
                                        </Button>
                                    )}
                                    <Button variant='ghost' onClick={handleClose}>Close</Button>
                                </div>
                            </>
                        )}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default PlayerDialog;