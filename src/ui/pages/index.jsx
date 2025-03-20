// import { useState } from "react";
import MusicList from "../components/data-display/MusicList/MusicList";
// import Timeline from "../components/inputs/Timeline/Timeline";
import Audioplayer from "../components/data-display/AudioPlayer/Audioplayer";

const musics = [
    {
        id: 1,
        name: 'Musica 1',
        artist: 'Artista 1',
        duration: 180,
        url: ""
    },
    {
        id: 2,
        name: 'Musica 2',
        artist: 'Artista 2',
        duration: 200,
        url: ""
    },
    {
        id: 3,
        name: 'Musica 3',
        artist: 'Artista 3',
        duration: 220,
        url: ""
    }
]

export default function Index() {
    // const [width, setWidth] = useState(20);
    return (
        <>
            <MusicList
                musics={musics}
                selectedMusic={musics[0]}
                onSelect={()=> {}}
            />
            <Audioplayer music={musics[0]}/>
        </>
    )
}