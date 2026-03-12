import React, {Component} from 'react';

class Song extends Component {
    render(){
        return(
            <div className='music_container'>
                <a className='music_info music_info--title' href='#'>{this.props.title}</a>
                <a className='music_info music_info--artist' href='#'>{this.props.artist}</a>
                <a className='music_info music_info--album' href='#'>{this.props.album}</a>
            </div>
        );
    }
}

export default Song;