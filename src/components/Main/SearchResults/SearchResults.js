import React from "react";
import Song from "../Song/Song";
import './styles.css';

const SearchResults = ({ songs, onAdd }) => {
    return(
        <section className='search_results_container'>
            <h3>Search Results</h3>
            <section className='musical_content'>
                {
                    songs.map(song => (
                        <div key={song.id}>
                            <Song
                                title={song.title}
                                artist={song.artist}
                                album={song.album}
                                img={song.img}
                                titleUrl={song.titleUrl}
                                artistUrl={song.artistUrl}
                                albumUrl={song.albumUrl}
                                likeSong={() => onAdd(song)}
                            />
                        </div>
                    ))
                }
            </section>
        </section>
    );
}

export default SearchResults;