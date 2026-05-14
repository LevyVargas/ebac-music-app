import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbumDetails, clearAlbumDetails } from "../../../../redux/slices/songDetailsSlice";
import {
    SongDetailsCover,
    SongDetailsMeta,
    SongDetailsStyle,
    SongDetailsTitle,
} from "./styles";

const SongDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { album, loading, error } = useSelector((state) => state.songDetails);

    useEffect(() => {
        dispatch(fetchAlbumDetails(id));
        return () => {
            dispatch(clearAlbumDetails());
        };
    }, [id, dispatch]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos</p>;

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
