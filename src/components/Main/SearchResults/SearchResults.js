import React from "react";
import Song from "../Song/Song";
import { SearchResultsContent, SearchResultsStyle } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../../../redux/slices/librarySlice";

const SearchResults = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state) => state.search.results) || [];

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
