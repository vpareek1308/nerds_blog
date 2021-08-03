import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isFetched, setIsFetched] = useState(false);
    const [error, setError] = useState(null) ;

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok)
                {
                    throw Error("Could not fetch the data from the source");
                }
                return res.json();
            })
            .then(data => {
                setData(data); 
                setIsFetched(true);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError')
                {
                    console.log("Abort Error");
                }
                else
                {
                    setError(err.message);
                    console.log(err);
                    setIsFetched(true);
                }
            })
        
        return () => abortCont.abort();
    }, [url]);

    return {data, isFetched, error};
}

export default useFetch;