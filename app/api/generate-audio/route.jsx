import axios from 'axios';

export async function POST(req) {
  try {
    const { text, id } = await req.json();

    const options = {
      method: 'POST',
      url: 'https://realistic-text-to-speech.p.rapidapi.com/v3/generate_voice_over_v2',
      headers: {
        'x-rapidapi-key': '5673172775msh48549b92828f185p1ffd1cjsn1144f7371676',
        'x-rapidapi-host': 'realistic-text-to-speech.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        voice_obj: {
          id: 2014,
          voice_id: 'en-US-Neural2-J',
          gender: 'Male',
          language_code: 'en-US',
          language_name: 'US English',
          voice_name: 'Jack',
          sample_text: 'Hello, hope you are having a great time making your video.',
          sample_audio_url: 'https://s3.ap-south-1.amazonaws.com/invideo-uploads-ap-south-1/speechen-US-Neural2-J16831901133170.mp3',
          status: 2,
          rank: 0,
          type: 'google_tts',
          isPlaying: false
        },
        json_data: [
          {
            block_index: 0,
            text: text // Use the text from the request
          }
        ]
      }
    };

    const response = await axios.request(options);
    return new Response(JSON.stringify(response.data), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'An error occurred' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500
    });
  }
}
