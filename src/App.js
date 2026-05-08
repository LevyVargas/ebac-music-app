import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SearchResults from "./components/Main/SearchResults/SearchResults";
import Library from "./components/Main/Library/Library";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SongDetails from "./components/Main/Song/SongDetails/SongDetails";
import useFetch from "./hooks/useFetch";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyle from "./theme/GlobalStyles";
import AppStyle from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { addSong, removeSong } from "./redux/libraryActions";

function App() {
    const [search, setSearch] = useState("coldplay");

    const {
        music: albums,
        error,
        loading,
        refetch,
    } = useFetch(
        `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${search}`,
        "album",
    );

    // const { music: albums, error, loading } = useFetch('https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=coldplay', 'album');

    const library = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToLibrary = (album) => {
        if (library.some((lib) => lib.id === album.idAlbum || lib.idAlbum === album.idAlbum)) {
            dispatch(removeSong(album.idAlbum || album.id));
        } else {
            dispatch(addSong({
                ...album,
                id: album.idAlbum,
                title: album.strAlbum,
                artist: album.strArtist,
                album: album.strAlbum
            }));
        }
    };

    useEffect(() => {
        console.log("Song added to library:", library);
    }, [library]);

    if (loading) return <p>Cargando...</p>;
    if (error)
        return (
            <div>
                <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
                <button onClick={refetch}>Reintentar</button>
            </div>
        );

    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <AppStyle className="App">
                <Header name="SoundCloud" />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main songs={albums} onAdd={addToLibrary} onSearch={setSearch} />
                        }
                    />
                    <Route
                        path="/search"
                        element={<SearchResults songs={albums} onAdd={addToLibrary} />}
                    />
                    <Route
                        path="/library"
                        element={<Library songs={library} onAdd={addToLibrary} />}
                    />
                    <Route path="/song/:id" element={<SongDetails />} />
                </Routes>
                <Footer />
            </AppStyle>
        </ThemeProvider>
    );
}

export default App;
