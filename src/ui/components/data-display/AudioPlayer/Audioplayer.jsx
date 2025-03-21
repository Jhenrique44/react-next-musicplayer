import Timeline from "../../inputs/Timeline/Timeline";
import { useState, useRef, useEffect, useMemo } from "react";
import styles from "./Audioplayer.module.css";

export default function Audioplayer(props) {
    const [canPlay, setCanPlay] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [duration, setDuration] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const width = useMemo(() => {
        return ((currentTime / duration) * 100)
    }, [duration, currentTime]);
    useEffect(() => {
        if (props.music) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, props.music])

    useEffect(() => {
        const interval = setInterval(() => {
            isPlaying && setCurrentTime(audioRef.current.currentTime);
        }, 500);
        return () => clearInterval(interval);
    }, [isPlaying]);

    useEffect(() => {
        setCurrentTime(0);
        setCanPlay(false);
    }, [props.music])

    function onCanPlay() {
        setDuration(audioRef.current.duration);
        setCanPlay(true);
    }
    function onEnded() {
        setIsPlaying(false);
        props?.onComplete();
    }
    function changeTime(percent) {
        if (props.music) {
            audioRef.current.currentTime = (percent / 100) * duration;
        }
    }
    function handlePlay() {
        if (props.music) {
            setIsPlaying(!isPlaying);
        }
    }
    return (
        <div className={styles.playerContainer}>
            <div className={styles.buttonContainer}>
                <button className={styles.playButton}
                    disable={!canPlay}
                    onClick={handlePlay}
                >
                    {isPlaying ? '\u2759\u2759' : '\u25b8'}
                </button>
            </div>
            <Timeline width={width} onChangeWidth={changeTime} />
            <audio
                ref={audioRef}
                src={props?.music?.url}
                onCanPlay={onCanPlay}
                onEnded={onEnded}
                controls
                className={styles.audio}></audio>
        </div>
    )
}