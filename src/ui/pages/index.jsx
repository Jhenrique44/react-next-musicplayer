import MusicList from "../components/data-display/MusicList/MusicList";

const musics = [
    {
        id: 1,
        name: 'Musica 1',
        artist: 'Artista 1',
        duration: '2:20'
    },
    {
        id: 2,
        name: 'Musica 2',
        artist: 'Artista 2',
        duration: '2:20'
    },
    {
        id: 3,
        name: 'Musica 3',
        artist: 'Artista 3',
        duration: '2:20'
    }
]

export default function index() {
    return (
        <>
            <MusicList
                musics={musics}
                selectedMusic={musics[0]}
                onSelect={ ()=> {}}
            />
        </>
    )
}