// Start by making sure the `assemblyai` package is installed.
// If not, you can install it by running the following command:
// npm install assemblyai

import { AssemblyAI } from 'assemblyai';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { audioFileUrl } = await req.json();

        if (!audioFileUrl) {
            console.error('No audioFileUrl provided');
            return NextResponse.json({ error: 'No audioFileUrl provided' }, { status: 400 });
        }

        const client = new AssemblyAI({
            apiKey: process.env.NEXT_PUBLIC_CAPTION_API_KEY,
        });

        console.log('Attempting to transcribe:', audioFileUrl);
        
        const transcript = await client.transcripts.transcribe({ audio: audioFileUrl });

        // Poll for the transcription result if necessary
        const { id } = transcript; // Save the ID to check the result later
        let transcriptionResult = null;

        // You might need to poll for the transcription status (optional)
        const checkTranscriptStatus = async (id) => {
            const result = await client.transcripts.get(id);
            return result;
        };

        // Poll until the transcript is ready (you may want to add a delay and limit attempts)
        let attempts = 0;
        while (transcriptionResult === null && attempts < 10) {
            const result = await checkTranscriptStatus(id);
            if (result.status === 'completed') {
                transcriptionResult = result;
            } else if (result.status === 'failed') {
                console.error('Transcription failed:', result.error);
                return NextResponse.json({ error: 'Transcription failed' }, { status: 500 });
            }
            attempts++;
            await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds before the next check
        }

        console.log('Transcription successful:', transcriptionResult.text);
        return NextResponse.json({ result: transcriptionResult.words });
    } catch (e) {
        console.error('Error in generate-caption:', e);
        return NextResponse.json({ error: e.message || 'An error occurred during transcription' }, { status: 500 });
    }
}
