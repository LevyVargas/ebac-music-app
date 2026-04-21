import React from "react";
import Song from "../Song/Song";
import { SearchResultsContent, SearchResultsStyle } from "./styles";

const SearchResults = ({ songs, onAdd }) => {
    return (
        <SearchResultsStyle>
            {/* <h3>Search Results</h3> */}
            <SearchResultsContent>
                {songs.map((album) => (
                    <div key={album.idAlbum}>
                        <Song
                            key={album.idAlbum}
                            idAlbum={album.idAlbum}
                            strAlbum={album.strAlbum}
                            strArtist={album.strArtist}
                            strAlbumThumb={album.strAlbumThumb}
                            likeSong={() => onAdd(album)}
                        />
                    </div>
                ))}
            </SearchResultsContent>
        </SearchResultsStyle>
    );
};

export default SearchResults;
