
// import { NextResponse } from 'next/server';
// import { bundle } from '@remotion/bundler';
// import { getCompositions, renderMedia } from '@remotion/renderer';
// import os from 'os';
// import path from 'path';
// import fs from 'fs/promises';
// import { initializeApp } from 'firebase/app';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { storage } from '@/config/FirebaseConfig';
// import {firebaseConfig} from '@/config/FirebaseConfig'


// const firebaseApp = initializeApp(firebaseConfig);


// export async function POST(req) {
//   try {
//     const { videoData, durationInFrames } = await req.json();

//     // Ensure the video is under 60 seconds
//     const durationInSeconds = durationInFrames / 30; // Assuming 30 fps
//     if (durationInSeconds > 60) {
//       return NextResponse.json({ error: 'Video duration exceeds 60 seconds limit' }, { status: 400 });
//     }

//     // Bundle your video
//     const bundled = await bundle(path.join(process.cwd(), 'app/dashboard/_components/RemotionVideo.jsx'));

//     // Fetch the compositions you have defined
//     const comps = await getCompositions(bundled);

//     // Select the composition you want to render
//     const composition = comps.find((c) => c.id === 'MyComposition');

//     // Set up the output location
//     const outputLocation = path.join(os.tmpdir(), `out-${Date.now()}.mp4`);

//     // Render the video
//     await renderMedia({
//       composition,
//       serveUrl: bundled,
//       codec: 'h264',
//       outputLocation,
//       inputProps: {
//         ...videoData,
//         durationInFrames,
//       },
//     });

//     // Read the output file
//     const file = await fs.readFile(outputLocation);

//     // Upload to Firebase Storage
//     const storageRef = ref(storage, `videos/video_${videoData.id}.mp4`);
//     await uploadBytes(storageRef, file);

//     // Get download URL
//     const downloadURL = await getDownloadURL(storageRef);

//     // Clean up: delete the local output file
//     await fs.unlink(outputLocation);

//     // Return the download URL
//     return NextResponse.json({ downloadURL });
//   } catch (error) {
//     console.error('Error in render-video API route:', error);
//     return NextResponse.json({ error: 'Failed to render video' }, { status: 500 });
//   }
// }