import React from "react";
import { Carousel } from "bootstrap";
import Logo from "../../assets/img/logo.png";
import Title from "../../assets/img/title.png";
import { Link } from "react-router-dom";
import { HeaderCarousel, HeaderCarouselImg, HeaderLink, HeaderStyle, HeaderTitle } from "./styles";

const Header = ({ name }) => {
    return (
        <HeaderStyle>
            <HeaderLink to="/">
                {/* <img src={Logo} alt="Cloud" />
                <img src={Title} alt="SoundCloud" /> */}
                <HeaderTitle>{name}</HeaderTitle>
            </HeaderLink>
            <div className="d-flex justify-content-center mt-4 mb-4 position-relative overflow-hidden">
                <HeaderCarousel
                    id="carouselExampleAutoplaying"
                    className="carousel slide rounded-4"
                    data-bs-ride="carousel"
                >
                    <div className="position-absolute z-3 top-0 start-0 w-100 d-flex justify-content-between p-4">
                        <div className="d-flex flex-row w-100 justify-content-start p-4">
                            <img src={Logo} alt="Cloud" />
                            <img src={Title} alt="SoundCloud" />
                        </div>
                        <div className="d-flex flex-row w-100 justify-content-end p-3 gap-2">
                            <button className="btn btn-light">Sign in</button>
                            <button className="btn btn-dark">Create account</button>
                        </div>
                    </div>
                    <div className="carousel-inner rounded-4">
                        <div className="carousel-item active rounded-4">
                            <HeaderCarouselImg
                                src="https://a-v2.sndcdn.com/assets/images/front-hero-artist-db39c288.jpeg"
                                className="d-block w-100"
                                alt="Slide 1"
                            />
                        </div>
                        <div className="carousel-item rounded-4">
                            <HeaderCarouselImg
                                src="https://a-v2.sndcdn.com/assets/images/front-hero-fan-7bdd78dc.jpeg"
                                className="d-block w-100"
                                alt="Slide 2"
                            />
                        </div>
                        <div className="carousel-item rounded-4">
                            <HeaderCarouselImg
                                src="https://a-v2.sndcdn.com/assets/images/front-hero-artist-fan-534fb484.jpeg"
                                className="d-block w-100"
                                alt="Slide 3"
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev"
                    ></button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next"
                    ></button>
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                </HeaderCarousel>
            </div>
        </HeaderStyle>
    );
};

export default Header;
