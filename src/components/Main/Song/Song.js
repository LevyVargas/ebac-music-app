import React from 'react';
import Overlay from './Overlay/Overlay';
import './styles.css';
import { Link } from 'react-router-dom';

const Song = ({ idAlbum, likeSong, strAlbum, strArtist, strAlbumThumb }) => {
    return(
        <section className='album_cover'>
            <div className="cover_image--wrapper">
                <img src={strAlbumThumb} alt={strAlbum} className='cover_image'/>
                <Overlay likeSong={likeSong} idAlbum={idAlbum} />
            </div>
            <div className='music_container'>
                <Link className='music_info music_info--title' to={`/song/${idAlbum}`}>{strAlbum}</Link>
                <a className='music_info music_info--artist' href={strArtist}>{strArtist}</a>
                <a className='music_info music_info--album' href={strAlbum}>{strAlbum}</a>
            </div>
        </section>
    );
}

export default Song;