import React from "react";
import Song from "../Song/Song";
import { LibraryContent, LibraryStyle } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { removeSong } from "../../../redux/libraryActions";

const Library = () => {
    const songs = useSelector((state) => state.songs);
    const dispatch = useDispatch();

    return (
        <LibraryStyle>
            <h3>Library</h3>
            <LibraryContent>
                {songs.map((album) => (
                    <div key={album.idAlbum}>
                        <Song
                            key={album.idAlbum}
                            idAlbum={album.idAlbum}
                            strAlbum={album.strAlbum}
                            strArtist={album.strArtist}
                            strAlbumThumb={album.strAlbumThumb}
                            likeSong={() => dispatch(removeSong(album.id))}
                        />
                    </div>
                ))}
            </LibraryContent>
        </LibraryStyle>
    );
};

export default Library;
