import React from 'react';
import Song from './Song/Song';
import './styles.css';

const Main = ({ onAdd }) => {

    const trendingSongs = [
        { id: 1, title: "Yellow", artist: "Coldplay", album: "Parachutes", img: "https://i1.sndcdn.com/artworks-9kWgKzz4Hmnw-0-t500x500.jpg", titleUrl:"https://soundcloud.com/coldplay/yellow", artistUrl:"https://soundcloud.com/coldplay", albumUrl:"https://soundcloud.com/coldplay/sets/parachutes-2" },
        { id: 2, title: "Hotel California", artist: "Eagles", album: "Hotel California", img: "https://i1.sndcdn.com/artworks-c594ae94-9c92-46c2-84ce-13c582cf11de-0-t500x500.jpg", titleUrl:"https://soundcloud.com/eaglesofficial/eagles-hotel-california?in=eaglesofficial/sets/hotel-california-remastered", artistUrl:"https://soundcloud.com/eaglesofficial", albumUrl:"https://soundcloud.com/eaglesofficial/sets/hotel-california-remastered" },
        { id: 3, title: "Wonderwall", artist: "Oasis", album: "What's the Story Morning Glory?", img: "https://i1.sndcdn.com/artworks-lOHuCr8tgSck-0-t500x500.jpg", titleUrl:"https://soundcloud.com/oasisofficial/wonderwall-unplugged?in=oasisofficial/sets/whats-the-story-morning-4", artistUrl:"https://soundcloud.com/oasisofficial", albumUrl:"https://soundcloud.com/oasisofficial/sets/whats-the-story-morning-4" },
        { id: 4, title: "Eye in the Sky", artist: "The Alan Parsons Project", album: "Eye in the Sky", img: "https://i1.sndcdn.com/artworks-DwKZuBRMEbSq-0-t500x500.png", titleUrl:"https://soundcloud.com/the-alan-parsons-project/eye-in-the-sky?in=the-alan-parsons-project/sets/eye-in-the-sky-3", artistUrl:"https://soundcloud.com/the-alan-parsons-project", albumUrl:"https://soundcloud.com/the-alan-parsons-project/sets/eye-in-the-sky-3" },
        { id: 5, title: "Numb", artist: "Linkin Park", album: "Meteora", img: "https://i1.sndcdn.com/artworks-rj0wVwfjmHzl-0-t500x500.jpg", titleUrl:"https://soundcloud.com/linkinpark/numb?in=linkinpark/sets/meteora-3", artistUrl:"https://soundcloud.com/linkinpark", albumUrl:"https://soundcloud.com/linkinpark/sets/meteora-3" },
        { id: 6, title: "Circles", artist: "Post Malone", album: "Hollywood's Bleeding", img: "https://i1.sndcdn.com/artworks-lverghRJoIxV-0-t500x500.jpg", titleUrl:"https://soundcloud.com/postmalone/circles?in=postmalone/sets/hollywoods-bleeding-1", artistUrl:"https://soundcloud.com/postmalone", albumUrl:"https://soundcloud.com/postmalone/sets/hollywoods-bleeding-1" },
        { id: 7, title: "Rolling in the Deep", artist: "Adele", album: "21", img: "https://i1.sndcdn.com/artworks-000168814903-4vrfjc-t500x500.jpg", titleUrl:"", artistUrl:"", albumUrl:"" },
        { id: 8, title: "What's My Name", artist: "Rihanna", album: "Loud", img: "https://i1.sndcdn.com/artworks-c1506e2e-fe3f-4958-bdf6-f743be7a9490-0-t500x500.jpg", titleUrl:"", artistUrl:"", albumUrl:"" },
        { id: 9, title: "Hello", artist: "Dragonette", album: "Martin Solveig", img: "https://i1.sndcdn.com/artworks-000002411460-gr94vq-t500x500.jpg", titleUrl:"", artistUrl:"", albumUrl:"" },
        { id: 10, title: "Stylo", artist: "Gorillaz", album: "Stylo", img: "https://i1.sndcdn.com/artworks-6vXc2Pat5Qbd-0-t500x500.jpg", titleUrl:"", artistUrl:"", albumUrl:"" },
        { id: 11, title: "Personal Jesus", artist: "Depeche Mode", album: "Violator", img: "https://i1.sndcdn.com/artworks-e68e96d3-e589-4e27-92c9-77ca9b9e7339-0-t500x500.jpg", titleUrl:"", artistUrl:"", albumUrl:"" },
        { id: 12, title: "Hole in the Earth", artist: "Deftones", album: "Hole in the Earth", img: "https://i1.sndcdn.com/artworks-DEhiioxdsBuN-0-t500x500.jpg", titleUrl:"", artistUrl:"", albumUrl:"" }
    ];

    return(
        <main>
            <section className='search_container'>
                <section className='search_options_container'>
                    <form className="search_form">
                        <input type="text" id="search_input" placeholder="Search for artists, bands, tracks, podcasts"/>
                        <button id="search_button">
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
                    </section>
                </section>
            </section>
            <h4>Hear what’s trending for free in the SoundCloud community</h4>
            <section className='musical_content'>
                {
                    trendingSongs.map(song => (
                        <Song 
                        key={song.id} 
                        title={song.title} 
                        artist={song.artist} 
                        album={song.album} 
                        img={song.img} 
                        titleUrl={song.titleUrl} 
                        artistUrl={song.artistUrl} 
                        albumUrl={song.albumUrl} 
                        likeSong={() => onAdd(song)}
                        />
                    ))
                }
            </section>
        </main>
    );
}

export default Main;