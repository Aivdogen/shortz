import { AbsoluteFill, Audio, Img, interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';

const RemotionVideo = ({ script, audioFileUrl, captions, imageList, setDurationInFrames }) => {

    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();

    const getDurationFrames = () => {
        const duration = (captions[captions?.length - 1]?.end || 0) / 1000 * fps;
        setDurationInFrames(duration);
        return duration;
    }

    const getCurrentCaptions = () => {
        const currentTime = frame / fps * 1000;
        const currentCaption = captions.find(caption => currentTime >= caption.start && currentTime <= caption.end);
        return currentCaption?.text || '';
    }

    return script && (
        <AbsoluteFill style={{ backgroundColor: 'black' }}>
            {imageList?.map((item, index) => {
                const startTime = index * getDurationFrames() / imageList?.length;
                const duration = getDurationFrames();

                const scale = () => interpolate(
                    frame,
                    [startTime, startTime + duration / 2, startTime + duration],
                    index % 2 === 0 ? [1, 1.8, 1] : [1.8, 1, 1.8],
                    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
                )
                return (
                    <Sequence key={index} from={startTime} durationInFrames={duration}>
                        <Img src={item} 
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transform: `scale(${scale()})`
                            }}
                        />
                        <AbsoluteFill className='flex flex-col justify-end items-center pb-4'>
                            <div className='text-xl bg-black bg-opacity-50 text-white p-2 rounded'>
                                {getCurrentCaptions()}
                            </div>
                        </AbsoluteFill>
                    </Sequence>
                )
            })}
            {audioFileUrl && <Audio src={audioFileUrl} />}
        </AbsoluteFill>
    )
}

export default RemotionVideo
