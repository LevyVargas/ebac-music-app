import React from "react";
import Song from "../Song/Song";
import { SearchResultsContent, SearchResultsStyle } from "./styles";
import { useDispatch } from "react-redux";
import { addSong } from "../../../redux/libraryActions";

const SearchResults = ({ songs, onAdd }) => {
    const dispatch = useDispatch();
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
                            likeSong={() => dispatch(addSong({
                                ...album,
                                id: album.idAlbum,
                                title: album.strAlbum,
                                artist: album.strArtist,
                                album: album.strAlbum
                            }))}
                        />
                    </div>
                ))}
            </SearchResultsContent>
        </SearchResultsStyle>
    );
};

export default SearchResults;
