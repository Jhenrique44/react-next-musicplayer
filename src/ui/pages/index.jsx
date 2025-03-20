import MusicList from "../components/data-display/MusicList/MusicList";
import Audioplayer from "../components/data-display/AudioPlayer/Audioplayer";
import styles from "./index.module.css"
import { useContext } from "react";
import { AppContext } from "../../App";


export default function Index() {
    const { selectedMusic,
        // time,
        // setTime,
        selectMusic,
        musicList
    } = useContext(AppContext);
    return (
        <>
            <div className={styles.pageContainer}>
                <MusicList
                    musics={musicList}
                    selectedMusic={selectedMusic}
                    onSelect={selectMusic}
                />
                <Audioplayer
                 music={selectedMusic} 
                 onComplete={() => { console.log('Finish') }} 
                 />
            </div>
        </>
    )
}