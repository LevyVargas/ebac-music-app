import { useParams } from 'react-router-dom';
import useFetch from '../../../../hooks/useFetch';
import './styles.css';

const SongDetails = () => {
    const { id } = useParams();
    const { music: albums, loading, error } = useFetch(
        `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`,
        'album'
    );

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos</p>;

    const album = albums[0];
    if (!album) return <div>Album not found</div>;

    return (
        <div className="song-details">
            <h2 className="song-details__title">{album.strAlbum}</h2>
            <img className="song-details__cover" src={album.strAlbumThumb} alt={album.strAlbum} />
            <p className="song-details__meta">Artist: {album.strArtist}</p>
            <p className="song-details__meta">Year: {album.intYearReleased}</p>
            {/* <p className="song-details__description">{album.strDescriptionEN}</p> */}
        </div>
    );
};

export default SongDetails;