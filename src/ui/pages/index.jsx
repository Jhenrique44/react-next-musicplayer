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
        url: "https://open.spotify.com/embed/track/2BZfNi8kEhMY4jVkCRe2IM?utm_source=generator&theme=0"
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
    return (
        <>
            <MusicList
                musics={musics}
                selectedMusic={musics[0]}
                onSelect={()=> {}}
            />
            <Audioplayer music={musics[0]} onComplete={() => {console.log('Finish')}}/>
        </>
    )
}