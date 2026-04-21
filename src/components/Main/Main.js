import React, { useState } from "react";
import SearchResults from "./SearchResults/SearchResults";
import {
    MainOptionsButton,
    MainOptionsLink,
    MainOptionsText,
    MainSearch,
    MainSearchButton,
    MainSearchForm,
    MainSearchIcon,
    MainSearchInput,
    MainSearchOptions,
    MainStyle,
    MainText,
} from "./styles";

const Main = ({ songs, onAdd, onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSearch(inputValue.trim());
        }
    };

    return (
        <MainStyle>
            <MainSearch>
                <MainSearchOptions>
                    <MainSearchForm onSubmit={handleSubmit}>
                        <MainSearchInput
                            type="text"
                            placeholder="Search for artists, bands, tracks, podcasts"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <MainSearchButton type="submit">
                            <MainSearchIcon>
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M10 2.25a7.75 7.75 0 1 0 4.924 13.735l5.546 5.545 1.06-1.06-5.545-5.546A7.75 7.75 0 0 0 10 2.25ZM3.75 10a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </MainSearchIcon>
                        </MainSearchButton>
                    </MainSearchForm>
                    <MainSearchOptions>
                        <MainOptionsText>or</MainOptionsText>
                        <MainOptionsButton>Upload your own</MainOptionsButton>
                        <MainOptionsLink to="/library">
                            <MainOptionsButton>Go to Library</MainOptionsButton>
                        </MainOptionsLink>
                    </MainSearchOptions>
                </MainSearchOptions>
            </MainSearch>
            <MainText>Hear what's trending for free in the SoundCloud community</MainText>
            <SearchResults songs={songs} onAdd={onAdd} />
        </MainStyle>
    );
};

export default Main;
