// app/api/render-video/route.js

import { NextResponse } from 'next/server';
import { bundle } from '@remotion/bundler';
import { getCompositions, renderMedia } from '@remotion/renderer';
import os from 'os';
import path from 'path';

export async function POST(req) {
  try {
    const { videoData, durationInFrames } = await req.json();

    // Bundle your video
    const bundled = await bundle(path.join(process.cwd(), 'app/dashboard/_components/RemotionVideo.jsx'));

    // Fetch the compositions you have defined
    const comps = await getCompositions(bundled);

    // Select the composition you want to render
    const composition = comps.find((c) => c.id === 'MyComposition');

    // Set up the output location
    const outputLocation = path.join(os.tmpdir(), `out-${Date.now()}.mp4`);

    // Render the video
    await renderMedia({
      composition,
      serveUrl: bundled,
      codec: 'h264',
      outputLocation,
      inputProps: {
        ...videoData,
        durationInFrames,
      },
    });

    // Read the output file
    const file = await fetch(`file://${outputLocation}`).then(res => res.blob());

    // Clean up: delete the output file
    await fs.unlink(outputLocation);

    // Return the video file
    return new NextResponse(file, {
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Disposition': `attachment; filename="video_${videoData.id}.mp4"`,
      },
    });
  } catch (error) {
    console.error('Error in render-video API route:', error);
    return NextResponse.json({ error: 'Failed to render video' }, { status: 500 });
  }
}
