import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

const Overlay = ({ likeSong, idAlbum }) => {
    return(
        <div className='cover_image--overlay'>
            <Link to={`/song/${idAlbum}`} className='overlay_link'>
                <button className='play_btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" fill='white'></circle>
                        <polygon points="10 8 16 12 10 16 10 8" fill='black'></polygon>
                    </svg>
                </button>
            </Link>
            <div className='bottom_btns'>
                <button className='small_btn' id="like" onClick={likeSong}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Overlay;