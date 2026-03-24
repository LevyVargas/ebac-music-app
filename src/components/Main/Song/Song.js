import React from 'react';
import Overlay from './Overlay/Overlay';
import './styles.css';

const Song = ({ title, artist, album, img, titleUrl, artistUrl, albumUrl, likeSong }) => {
    return(
        <section className='album_cover'>
            <div className="cover_image--wrapper">
                <img src={img} alt={title} className='cover_image'/>
                <Overlay likeSong={likeSong} />
            </div>
            <div className='music_container'>
                <a className='music_info music_info--title' href={titleUrl}>{title}</a>
                <a className='music_info music_info--artist' href={artistUrl}>{artist}</a>
                <a className='music_info music_info--album' href={albumUrl}>{album}</a>
            </div>
        </section>
    );
}

export default Song;