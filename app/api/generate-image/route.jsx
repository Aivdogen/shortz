import { storage } from '@/config/FirebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { prompt } = await req.json();

        // Define custom image dimensions
        const imageHeight = 1280;
        const imageWidth = 1024;

        const result = await query({
            inputs: prompt,
            height: imageHeight,
            width: imageWidth,
            num_outputs: 1,
        });

        // Convert blob to buffer
        const buffer = Buffer.from(await result.arrayBuffer());

        const fileName = 'ai-short-video-files/' + Date.now() + '.png';
        const storageRef = ref(storage, fileName);

        // Upload buffer to Firebase
        await uploadBytes(storageRef, buffer);
        const downloadUrl = await getDownloadURL(storageRef);

        console.log(downloadUrl);

        return NextResponse.json({ success: true, result: downloadUrl });
    } catch (error) {
        console.error('Error in image generation:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
        {
            headers: {
                Authorization: 'Bearer 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',
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Check if the model supports the requested dimensions
    const result = await response.blob();

    // Additional check if the dimensions are correct (optional)
    if (result.size === 0) {
        throw new Error("Model failed to generate image with the requested dimensions.");
    }

    return result;
}
