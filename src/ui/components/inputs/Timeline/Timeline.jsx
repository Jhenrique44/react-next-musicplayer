import React from 'react'
import styles from './Timeline.module.css'
export default function Timeline(props) {
    return (
        <div className={styles.container}>
            <div className={styles.timeLineline}
                style={{ width: `${props.width}%` }}>
            </div>
            <input type="range" className={styles.timeLineSlider}
                onChange={(event) => props.onChangeWidth(event.target.value)} />
        </div>
    )
}
