/* eslint-disable no-unused-vars */
import Timeline from "../../inputs/Timeline/Timeline";
import {useState, useRef } from "react";
import styles from "./Audioplayer.module.css";

export default function Audioplayer(props) {
    const [canPlay, setCanPlay] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [width, setWidth] = useState(0);
    const audioRef = useRef(null);
    const [duration, setDuration] = useState(1);
    function onCanPlay() {
        setDuration(audioRef.current.duration);
        setCanPlay(true);   
    }
    function onEnded(){ 
        setIsPlaying(false);
        props?.onComplete();
    }
    return (
        <div className={styles.playerContainer}>
            <div className={styles.buttonContainer}>
                <button className={styles.playButton} disable={!canPlay}>
                    {isPlaying ? '\u2759\u2759' : '\u25b8'}
                </button>
            </div>
            <Timeline width={width} onChangeWidth={setWidth}/>
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