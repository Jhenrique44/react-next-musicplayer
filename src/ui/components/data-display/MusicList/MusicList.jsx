import React from 'react'
import styles from './MusicList.module.css'
import { TimeService } from '../../../../data/services/TimeService';

export default function MusicList(props) {

    function isSelected(music) {
        return props.selectedMusic === music ? styles.selected : '';
    }
    return (
        <ul className={styles.listMusic}>
            {props.musics.map((music) => (
                <li className={[styles.musicListItem, 
                    isSelected(music)].join(' ')} 
                    onClick={() => props.onSelect(music)}>
                    <div className={styles.info}>
                        <span className={styles.title}>{music.name}</span>
                        <span className={styles.artist}>{music.artist}</span>
                        <span className={styles.duration}>{TimeService.timeDisplay(music.duration)}</span>
                    </div>
                </li>
            ))}
        </ul>
    )
}
