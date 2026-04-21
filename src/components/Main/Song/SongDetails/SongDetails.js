import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import {
    SongDetailsCover,
    SongDetailsMeta,
    SongDetailsStyle,
    SongDetailsTitle,
} from "./styles";

const SongDetails = () => {
    const { id } = useParams();
    const {
        music: albums,
        loading,
        error,
    } = useFetch(
        `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`,
        "album",
    );

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos</p>;

    const album = albums[0];
    if (!album) return <div>Album not found</div>;

    return (
        <SongDetailsStyle className="song-details">
            <SongDetailsTitle>{album.strAlbum}</SongDetailsTitle>
            <SongDetailsCover src={album.strAlbumThumb} alt={album.strAlbum} />
            <SongDetailsMeta>Artist: {album.strArtist}</SongDetailsMeta>
            <SongDetailsMeta>Year: {album.intYearReleased}</SongDetailsMeta>
            {/* <SongDetailsMeta>{album.strDescriptionEN}</SongDetailsMeta> */}
        </SongDetailsStyle>
    );
};

export default SongDetails;
