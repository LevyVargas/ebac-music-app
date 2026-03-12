import React, {Component} from 'react';
import Song from './Song';

class Main extends Component {
    render(){
        return(
            <main>
                <h4>Hear what’s trending for free in the SoundCloud community</h4>
                <section className='musical_content'>
                    <section className='album_cover'>
                        <img src="https://i1.sndcdn.com/artworks-9kWgKzz4Hmnw-0-t500x500.jpg" alt="Trending" className='cover_image'/>
                        <Song title="Yellow" artist="Coldplay" album="A Rush of Blood to the Head"/>
                    </section>
                    <section className='album_cover'>
                        <img src="https://i1.sndcdn.com/artworks-c594ae94-9c92-46c2-84ce-13c582cf11de-0-t500x500.jpg" alt="Trending" className='cover_image'/>
                        <Song title="Hotel California" artist="Eagles" album="Hotel California"/>
                    </section>
                    <section className='album_cover'>
                        <img src="https://i1.sndcdn.com/artworks-lOHuCr8tgSck-0-t500x500.jpg" alt="Trending" className='cover_image'/>
                        <Song title="Wonderwall" artist="Oasis" album="What's the Story Morning Glory?"/>
                    </section>
                    <section className='album_cover'>
                        <img src="https://i1.sndcdn.com/artworks-DwKZuBRMEbSq-0-t500x500.png" alt="Trending" className='cover_image'/>
                        <Song title="Eye in the Sky" artist="The Alan Parsons Project" album="Eye in the Sky"/>
                    </section>
                    <section className='album_cover'>
                        <img src="https://i1.sndcdn.com/artworks-rj0wVwfjmHzl-0-t500x500.jpg" alt="Trending" className='cover_image'/>
                        <Song title="Numb" artist="Linkin Park" album="Meteora"/>
                    </section>
                    <section className='album_cover'>
                        <img src="https://i1.sndcdn.com/artworks-lverghRJoIxV-0-t500x500.jpg" alt="Trending" className='cover_image'/>
                        <Song title="Circles" artist="Post Malone" album="Circles"/>
                    </section>
                    <section className='album_cover'>
                        <img src="https://i1.sndcdn.com/artworks-000168814903-4vrfjc-t500x500.jpg" alt="Trending" className='cover_image'/>
                        <Song title="Rolling in the Deep" artist="Adele" album="21"/>
                    </section>
                    <section className='album_cover'>
                        <img src="https://i1.sndcdn.com/artworks-c1506e2e-fe3f-4958-bdf6-f743be7a9490-0-t500x500.jpg" alt="Trending" className='cover_image'/>
                        <Song title="What's My Name" artist="Rihanna" album="Loud"/>
                    </section>
                    <section className='album_cover'>
                        <img src="https://i1.sndcdn.com/artworks-000002411460-gr94vq-t500x500.jpg" alt="Trending" className='cover_image'/>
                        <Song title="Hello" artist="Dragonette" album="Martin Solveig"/>
                    </section>
                    <section className='album_cover'>
                        <img src="https://i1.sndcdn.com/artworks-6vXc2Pat5Qbd-0-t500x500.jpg" alt="Trending" className='cover_image'/>
                        <Song title="Stylo" artist="Gorillaz" album="Stylo"/>
                    </section>
                    <section className='album_cover'>
                        <img src="https://i1.sndcdn.com/artworks-e68e96d3-e589-4e27-92c9-77ca9b9e7339-0-t500x500.jpg" alt="Trending" className='cover_image'/>
                        <Song title="Personal Jesus" artist="Depeche Mode" album="Violator"/>
                    </section>
                    <section className='album_cover'>
                        <img src="https://i1.sndcdn.com/artworks-DEhiioxdsBuN-0-t500x500.jpg" alt="Trending" className='cover_image'/>
                        <Song title="Hole in the Earth" artist="Deftones" album="Hole in the Earth"/>
                    </section>
                </section>
            </main>
        );
    }
}

export default Main;