import Timeline from "../../inputs/Timeline/Timeline";
import {useState } from "react";
import styles from "./Audioplayer.module.css";

export default function Audioplayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [width, setWidth] = useState(0);
    return (
        <div className={styles.playerContainer}>
            <div className={styles.buttonContainer}>
                <button className={styles.playButton}>
                    {isPlaying ? '\u2759\u2759' : '\u25b8'}
                </button>
            </div>
            <Timeline width={width} onChangeWidth={setWidth}/>
            <audio controls className={styles.audio}></audio>
        </div>
    )
}