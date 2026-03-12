import React, {Component} from 'react';
import '../App.css';

class Footer extends Component {
    render(){
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
                    <a href='#'>Directory · </a>
                    <a href='#'>About us · </a>   
                    <a href='#'>Artist Resources ·</a>   
                    <a href='#'>Newsroom · </a>  
                    <a href='#'>Topics · </a>  
                    <a href='#'>Jobs · </a>  
                    <a href='#'>Developers · </a>   
                    <a href='#'>Help · </a>   
                    <a href='#'>Legal · </a>    
                    <a href='#'>Privacy · </a>    
                    <a href='#'>Cookie Policy · </a>   
                    <a href='#'>Cookie Manager · </a>   
                    <a href='#'>Imprint · </a>  
                    <a href='#'>Charts · </a>  
                    <a href='#'>Transparency · </a>  
                    <a href='#'>Reports · </a>  
                    <a href='#'>Transparency · </a>  
                    <a href='#'>Reports ·</a>  
                </div>
            </footer>
        );
    }
}

export default Footer;