import React from "react";
import Overlay from "./Overlay/Overlay";
import {
    SongAlbum,
    SongArtist,
    SongImage,
    SongImageWrapper,
    SongInfo,
    SongLink,
    SongStyle,
} from "./styles";

const Song = ({ idAlbum, likeSong, strAlbum, strArtist, strAlbumThumb }) => {
    return (
        <SongStyle>
            <SongImageWrapper>
                <SongImage src={strAlbumThumb} alt={strAlbum} />
                <Overlay likeSong={likeSong} idAlbum={idAlbum} />
            </SongImageWrapper>
            <SongInfo>
                <SongLink to={`/song/${idAlbum}`}>{strAlbum}</SongLink>
                <SongArtist href={strArtist}>{strArtist}</SongArtist>
                <SongAlbum href={strAlbum}>{strAlbum}</SongAlbum>
            </SongInfo>
        </SongStyle>
    );
};

export default Song;
