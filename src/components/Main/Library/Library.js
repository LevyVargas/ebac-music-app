import React from "react";
import Song from "../Song/Song";
import { LibraryContent, LibraryStyle } from "./styles";

const Library = ({ songs, onAdd }) => {
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
                            likeSong={() => onAdd(album)}
                        />
                    </div>
                ))}
            </LibraryContent>
        </LibraryStyle>
    );
};

export default Library;
