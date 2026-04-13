import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url, key = 'album') => {
    const [music, setMusic] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fetchTrigger, setFetchTrigger] = useState(0);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const fetchMusic = async () => {
            try {
                const response = await axios.get(url);
                setMusic(response.data[key] || []);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchMusic();
    }, [url, key, fetchTrigger]);

    const refetch = () => setFetchTrigger(t => t + 1);

    return { music, error, loading, refetch };
}

export default useFetch;