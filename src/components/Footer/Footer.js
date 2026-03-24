import React from 'react';
import './styles.css';

const Footer = () => {
    return(
        <footer>
            <div className='footer_info'>
                <h2>Thanks for listening. Now join in.</h2>
                    <h5>Save tracks, follow artists and build playlists. All for free.</h5>
                    <button className='footer_button--CreateAccount'>Create account</button>
                    <div className='footer_sing-in_content'>
                        <p className='footer_text'>Already have an account?</p>
                        <p className='footer_sing-in '>Sign in</p>
                    </div>
                </div>
                <div className='footer_links_content'>
                    <a href='https://soundcloud.com/people/directory'>Directory · </a>
                    <a href='https://soundcloud.com/company/home'>About us · </a>   
                    <a href='https://soundcloud.com/getstarted/getheard'>Artist Resources ·</a>   
                    <a href='https://soundcloud.com/company/newsroom'>Newsroom · </a>  
                    <a href='https://soundcloud.com/topic/home'>Topics · </a>  
                    <a href='https://soundcloud.com/jobs'>Jobs · </a>  
                    <a href='https://developers.soundcloud.com/'>Developers · </a>   
                    <a href='https://help.soundcloud.com/'>Help · </a>   
                    <a href='https://soundcloud.com/terms-of-use'>Legal · </a>    
                    <a href='https://soundcloud.com/pages/privacy'>Privacy · </a>    
                    <a href='https://soundcloud.com/pages/cookies'>Cookie Policy · </a>   
                    <a href='https://soundcloud.com/pages/cookies'>Cookie Manager · </a>   
                    <a href='https://soundcloud.com/imprint'>Imprint · </a>  
                    <a href='https://soundcloud.com/charts/top'>Charts · </a>  
                    <a href='https://soundcloud.com/transparency-reports'>Transparency Reports · </a>  
                </div>
            </footer>
        );
}

export default Footer;