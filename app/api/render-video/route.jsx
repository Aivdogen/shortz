import { renderMedia } from '@remotion/renderer';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import os from 'os';
import RemotionVideo from '../dashboard/_components/RemotionVideo' // Adjust the import to match your setup

export default async function handler(req = NextApiRequest, res = NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { videoData, durationInFrames } = req.body;

    // Temporary file to store the rendered video
    const outputPath = path.join(os.tmpdir(), 'output.mp4');

    // Render the video using Remotion renderer
    await renderMedia({
      composition: {
        id: 'RemotionVideo',
        component: RemotionVideo,
        durationInFrames: durationInFrames,
        fps: 30,
        width: 300,
        height: 450,
        inputProps: videoData
      },
      codec: 'h264',
      outputLocation: outputPath,
    });

    // Send the video as a response
    const fileStream = fs.createReadStream(outputPath);
    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
    fileStream.pipe(res);

    // Cleanup: remove the file after streaming
    fileStream.on('close', () => {
      fs.unlinkSync(outputPath);
    });
  } catch (err) {
    console.error('Error rendering video:', err);
    res.status(500).json({ message: 'Failed to render video' });
  }
}
