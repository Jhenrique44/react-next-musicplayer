import { useState } from "react";

const musicList= [
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
export function useApp() { 
    const [selectedMusic, setSelectedMusic] = useState();
    const [time, setTime] = useState(0);

    function selectMusic(music){
        setTime(0);
        setSelectedMusic(music);
    }
    return{
        selectedMusic,
        musicList,
        time,
        setTime,
        selectMusic
    }
}