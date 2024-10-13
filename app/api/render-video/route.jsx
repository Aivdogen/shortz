import { renderMedia } from '@remotion/renderer';
import path from 'path';
import fs from 'fs';
import os from 'os';
import dynamic from 'next/dynamic';

const RemotionVideo = dynamic(() => import('../../dashboard/_components/RemotionVideo'), { ssr: false });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { videoData, durationInFrames } = req.body;

    const outputPath = path.join(os.tmpdir(), 'output.mp4'); // Temporary file to store the rendered video

    await renderMedia({
      composition: {
        id: 'RemotionVideo',
        component: RemotionVideo,
        durationInFrames,
        fps: 30,
        width: 300,
        height: 450,
        inputProps: videoData,
      },
      codec: 'h264',
      outputLocation: outputPath,
    });

    // Stream the rendered video to the client
    const fileStream = fs.createReadStream(outputPath);
    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
    fileStream.pipe(res);

    fileStream.on('close', () => {
      fs.unlinkSync(outputPath);
    });
  } catch (err) {
    console.error('Error rendering video:', err);
    res.status(500).json({ message: 'Failed to render video' });
  }
}
