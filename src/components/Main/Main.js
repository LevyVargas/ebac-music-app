import React, { useState } from 'react';
import Song from './Song/Song';
import './styles.css';
import { Link } from 'react-router-dom';
import SearchResults from './SearchResults/SearchResults';


const Main = ({ songs, onAdd, onSearch }) => {

    const [inputValue, setInputValue] = useState('');

    // const renderMusic = () => (
    //     <section className='musical_content'>
    //         {
    //             songs.map(album => (
    //                 <Song 
    //                     key={album.idAlbum} 
    //                     idAlbum={album.idAlbum} 
    //                     strAlbum={album.strAlbum}
    //                     strArtist={album.strArtist}
    //                     strAlbumThumb={album.strAlbumThumb}
    //                     likeSong={() => onAdd(album)} 
    //                 />
    //             ))
    //         }
    //     </section>
    // );

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()) {
            onSearch(inputValue.trim());
        }   
    }

    return(
        <main>
            <section className='search_container'>
                <section className='search_options_container'>
                    <form className="search_form" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            id="search_input" 
                            placeholder="Search for artists, bands, tracks, podcasts" 
                            value={inputValue} 
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button id="search_button" type='submit'>
                            <div id="search_button_div">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M10 2.25a7.75 7.75 0 1 0 4.924 13.735l5.546 5.545 1.06-1.06-5.545-5.546A7.75 7.75 0 0 0 10 2.25ZM3.75 10a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </button>
                    </form>
                    <section id='others_options'>
                        <p id='others_options_text'>or</p>
                        <button id="others_options_button">Upload your own</button>
                        <Link to="/library" id='library_link'>
                        <button id="others_options_button">Go to Library</button>
                        </Link>
                    </section>
                </section>
            </section>
            <h4>Hear what's trending for free in the SoundCloud community</h4>
            {/* {renderMusic()} */}
            <SearchResults songs={songs} onAdd={onAdd} />
        </main>
    );
}

export default Main;