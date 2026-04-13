import React from "react";
import Song from "../Song/Song";
import './styles.css';

const SearchResults = ({ songs, onAdd }) => {

    return(
        <section className='search_results_container'>
            {/* <h3>Search Results</h3> */}
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

export default SearchResults;