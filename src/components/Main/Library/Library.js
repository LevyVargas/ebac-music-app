import React from "react";
import Song from "../Song/Song";
import './styles.css';

const Library = ({ songs, onAdd }) => {
    return(
        <section className='library_container'>
            <h3>Library</h3>
            <section className='musical_content'>
                {
                    songs.map(album => (
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
                    ))
                }
            </section>
        </section>
    );
}

export default Library;